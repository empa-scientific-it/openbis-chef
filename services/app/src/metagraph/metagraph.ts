import { Facade } from "@src/openbis/api";
import {
  SampleTypeFetchOptions,
  SampleTypeSearchCriteria,
  SampleType,
} from "@src/openbis/dto";
import * as E from "fp-ts/Either";
import dagre from "dagre";
import { Either } from "fp-ts/Either";
import { ExperimentFetchOptions, ExperimentSearchCriteria } from "v3api/V3API.esm";

export enum MetagraphNodeType {
  Entry = "entry",
  Select = "select",
}

export interface Node {
  id: string;
  entityType: string;
  type: MetagraphNodeType;
  description: string | null;
}

export interface EntryNode extends Node {
  id: string;
  type: MetagraphNodeType.Entry;
  entityType: string;
  collection: string;
  dependencies: string[]; // IDs of nodes this node depends on
}

export interface SelectNode extends Node {
  id: string;
  type: MetagraphNodeType.Select;
  entityType: string;
  collection: string;
  dependencies: string[]; // IDs of nodes this node depends on
}

export type MetagraphNode = EntryNode | SelectNode;

/**
 * Represents a metagraph that describes the workflow steps.
 * A metagraph is a graph structure that outlines the sequence of steps
 * required to create an object graph when executed.
 */
export interface Metagraph {
  nodes: MetagraphNode[];
}

export interface VisualisationNode {
  id: string;
  data: Node;
  type: "default";
  position: {
    x: number;
    y: number;
  };
}

export interface CircularDependencyFailure {
  type: "circularDependency";
  node: string;
  dependency: string;
}

export interface DuplicateId {
  type: "duplicateId";
  node: string;
  id: string;
}

export interface InvalidDependency {
  type: "invalidDependency";
  node: string;
  dependency: string;
}

export type SyntaxError = { type: "SyntaxError"; message: string };

export type DataError = {
  type: "DataError";
  message: string;
};

export type ValidationFailure =
  | CircularDependencyFailure
  | DuplicateId
  | InvalidDependency
  | DataError
  | SyntaxError;

export interface ValidationResult {
  valid: boolean;
  failures: ValidationFailure[];
}

function checkNonCircularDependencies(
  nodes: MetagraphNode[]
): CircularDependencyFailure[] {
  const visited: Record<string, boolean> = {};
  const stack: Record<string, boolean> = {};

  const hasCircularDependency = (node: MetagraphNode): string | boolean => {
    if (node !== undefined) {
      if (!visited[node.id]) {
        visited[node.id] = true;
        stack[node.id] = true;

        for (const dependency of node.dependencies) {
          const dependentNode = nodes.find((n) => n.id === dependency);
          if (
            (!visited[dependency] && hasCircularDependency(dependentNode)) ||
            stack[dependency]
          ) {
            return dependency;
          }
        }
      }
      stack[node.id] = false;
    }
    return false;
  };

  for (const node of nodes) {
    const dependency = hasCircularDependency(node);
    if (typeof dependency === "string") {
      return [{ type: "circularDependency", node: node.id, dependency: dependency }];
    }
  }

  return [];
}

function checkUniqueIds(nodes: MetagraphNode[]): DuplicateId[] {
  const ids = nodes.map((node) => node.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  return duplicates.map((id) => ({ id: id, type: "duplicateId", node: id }));
}

function checkValidDependencies(nodes: MetagraphNode[]): ValidationFailure[] {
  return nodes.flatMap((node) => {
    return node.dependencies.flatMap((depId) => {
      if (!nodes.some((n) => n.id === depId)) {
        return [{ type: "invalidDependency", dependency: depId, node: node.id }];
      }
    });
  });
}

export function formatFailure(failure: ValidationFailure): string {
  switch (failure.type) {
    case "circularDependency":
      return `Circular dependency in node: ${failure.node}`;
    case "duplicateId":
      return `Duplicate id: ${failure.id} in node: ${failure.node}`;
    case "invalidDependency":
      return `Invalid dependency: ${failure.dependency} in node: ${failure.node}`;
    case "SyntaxError":
      return `Syntax error: ${failure.message}`;
    case "DataError":
      return `Data error: ${failure.message}`;
  }
}

export function validateMetagraph(nodes: MetagraphNode[]): ValidationResult {
  // Combine validation functions
  const validations = [
    checkNonCircularDependencies,
    checkUniqueIds,
    checkValidDependencies,
    // Add more validation functions here
  ];

  const failures = validations
    .flatMap((validation) => validation(nodes))
    .filter((f) => f !== undefined);
  if (failures.length > 0) {
    return { valid: false, failures: failures };
  } else {
    return { valid: true, failures: [] };
  }
}

async function checkSampleType(
  node: EntryNode,
  service: Facade
): Promise<ValidationResult> {
  const sampleType = await getSampleType(node.entityType, service);
  if (!sampleType) {
    return {
      valid: false,
      failures: [
        {
          type: "DataError",
          message: `Sample type ${node.entityType} in node "${node.id}" does not exist`,
        },
      ],
    };
  }
  return { valid: true, failures: [] };
}

async function checkCollection(
  node: EntryNode,
  service: Facade
): Promise<ValidationResult> {
  const ssc = new ExperimentSearchCriteria();
  ssc.withIdentifier().thatEquals(node.collection);
  const sfo = new ExperimentFetchOptions();
  const res = await service.searchExperiments(ssc, sfo);
  if (res.totalCount === 0) {
    return {
      valid: false,
      failures: [
        {
          type: "DataError",
          message: `Collection ${node.collection} in node "${node.id}" does not exist`,
        },
      ],
    };
  }
  return { valid: true, failures: [] };
}

async function checkLink(node: SelectNode, service: Facade): Promise<ValidationResult> {
  const ssc = new SampleTypeSearchCriteria();
  ssc.withCode().thatEquals(node.collection);
  const sfo = new SampleTypeFetchOptions();
  sfo.withPropertyAssignments().withPropertyType();

  const res = await service.searchSampleTypes(ssc, sfo);
  if (res.totalCount === 0) {
    return {
      valid: false,
      failures: [
        {
          type: "DataError",
          message: `Collection ${node.collection} in node "${node.id}" does not exist`,
        },
      ],
    };
  }
  return { valid: true, failures: [] };
}

async function performValidations(
  node: MetagraphNode,
  service: Facade,
  validations: ((node: MetagraphNode, service: Facade) => Promise<ValidationResult>)[]
): Promise<ValidationResult> {
  const validationResults = await Promise.all(validations.map((v) => v(node, service)));
  const failures = validationResults.flatMap((vr) => vr.failures);
  return { valid: failures.length === 0, failures: failures };
}

export async function checkMetagraphData(
  mg: Metagraph,
  service: Facade
): Promise<ValidationResult> {
  const entryValidations = [checkSampleType, checkCollection];
  const selectValidations = [checkCollection, checkSampleType];
  const validationResults = await Promise.all(
    mg.nodes.map((node) => {
      if (node.type === "entry") {
        return performValidations(node, service, entryValidations);
      } else if (node.type === "select") {
        return performValidations(node, service, selectValidations);
      }
    })
  );
  //Accumulate all failures
  const failures = validationResults.flatMap((vr) => vr.failures);
  return { valid: failures.length === 0, failures: failures };
}

export class Metagraph {
  nodes: MetagraphNode[];
  name: string;
  description: string;

  static fromNodes(
    nodes: MetagraphNode[],
    description: string,
    name: string
  ): Either<ValidationFailure[], Metagraph> {
    const valid = validateMetagraph(nodes);
    if (valid.valid) {
      return E.right(new Metagraph(nodes, description, name));
    } else {
      return E.left(valid.failures);
    }
  }

  constructor(nodes: MetagraphNode[], description: string, name: string) {
    this.nodes = nodes;
    this.description = description;
    this.name = name;
  }
}

export function walkNodes<T>(
  nodes: MetagraphNode[],
  transform: (v: MetagraphNode) => T
): T[] {
  const visited = new Set();
  const queue = [];
  const result = [];
  //TODO use a functional / immutable style instead
  //For each node that has not been visited yet, perform BFS
  nodes.forEach((node) => {
    if (!visited.has(node.id)) {
      queue.push(node);
      while (queue.length > 0) {
        const currentNode = queue.shift();
        visited.add(currentNode.id);
        result.push(transform(currentNode));
        currentNode.dependencies.forEach((depId) => {
          const depNode = nodes.find((n) => n.id === depId);
          if (!visited.has(depNode.id)) {
            queue.push(depNode);
          }
        });
      }
    }
  });
  return result;
}

/**
 * Walk the graph in a BFS form and apply a transformation to each visited node
 * @param g
 * @param transform
 * @returns
 */
export function walkGraph<T>(g: Metagraph, transform: (v: MetagraphNode) => T): T[] {
  //Perform BFS on the graph
  return walkNodes(g.nodes, transform);
}

interface Edge {
  source: string;
  target: string;
  id: string;
}

export function getEdges(g: Metagraph): Edge[] {
  return g.nodes.flatMap((node) => {
    return node.dependencies.map((depId) => {
      return { source: depId, target: node.id, id: `${node.id}-${depId}`, type: "step" };
    });
  });
}

export function findRootNodes(g: Metagraph): MetagraphNode[] {
  //A root node is a node that does not appear as a dependency in any other
  //node
  return g.nodes.filter((node) => {
    return !g.nodes.some((n) => n.dependencies.includes(node.id));
  });
}

function getDepth(node: Node, g: Metagraph): number {
  //If the node never appears in a chain of dependencies, its depth is 0
  if (!g.nodes.some((n) => n.dependencies.includes(node.id))) {
    return 0;
  }
  //Otherwise, we check for a chain of dependencies
  else {
    return g.nodes
      .filter((n) => n.dependencies.includes(node.id))
      .map((n) => 1 + getDepth(n, g))
      .reduce((a, b) => Math.max(a, b));
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Transform a metagraph to a graph that can be visualised
 * using react-flow
 *
 */
export function getVisualisationNodes(
  g: Metagraph,
  config: {
    width: number;
    height: number;
    rankdir: "LR" | "TD";
    nodesep: number;
    align: "UL";
  } = { width: 200, height: 100, rankdir: "TD", nodesep: 200, align: "UL" }
): VisualisationNode[] {
  //Place the node hierarchically
  const nodes = walkGraph(g, (node) => node);
  const edges = getEdges(g);

  //Use dagre to place the nodes hierarchically
  const graph = new dagre.graphlib.Graph();
  graph.setGraph({});

  // Default to assigning a new object as a label for each new edge.
  graph.setDefaultEdgeLabel(function () {
    return {};
  });
  nodes.map((node) => {
    graph.setNode(node.id, { width: 100, height: 100, label: node.description });
  });
  edges.map((edge) => graph.setEdge(edge.source, edge.target));
  dagre.layout(graph, config);

  return nodes.map((node) => {
    return {
      id: node.id,
      data: { label: node.description },
      type: "default",
      draggable: true,
      position: {
        y: graph.node(node.id).y,
        x: graph.node(node.id).x,
      },
    };
  });
}

export interface MetagraphOperation {
  operationId: string;
  type: "create" | "link";
}

export interface CreateOperation extends MetagraphOperation {
  type: "create";
  objectType: string;
  collectionIdentifier: string;
  objectProperties: { [key: string]: string };
}

export interface LinkOperation extends MetagraphOperation {
  type: "link";
  objectType: string;
  collectionIdentifier: string;
  objectIdentifier: string;
}

export type MetagraphOperations = CreateOperation | LinkOperation;

export interface MetagraphComponentProps {
  node: MetagraphNode;
}

export async function getSampleType(
  code: string,
  service: Facade
): Promise<typeof SampleType> {
  const ssc = new SampleTypeSearchCriteria();
  ssc.withCode().thatEquals(code);
  const sfo = new SampleTypeFetchOptions();
  sfo.withPropertyAssignments().withPropertyType();

  const res = await service.searchSampleTypes(ssc, sfo);
  if (res.totalCount === 1) {
    return res.objects[0];
  }
}

export function nodeToOperation(node: MetagraphNode): MetagraphOperations {
  if (node.type === "entry") {
    return {
      operationId: node.id,
      type: "create",
      objectType: node.entityType,
      collectionIdentifier: node.collection,
      objectProperties: {},
    };
  } else if (node.type === "select") {
    return {
      collectionIdentifier: node.collection,
      operationId: node.id,
      objectType: node.entityType,
      type: "link",
      objectIdentifier: "",
    };
  }
}
