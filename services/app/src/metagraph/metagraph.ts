import { Facade } from "@src/openbis/api";
import {
  SampleTypeFetchOptions,
  SampleTypeSearchCriteria,
  ExperimentIdentifier,
  Sample,
  SampleType,
} from "@src/openbis/dto";

import dagre from "dagre";

export interface Node {
  id: string;
  entityType: string;
  type: string;
  description: string | null;
}

export interface EntryNode extends Node {
  id: string;
  type: "entry";
  entityType: string;
  collection: string;
  dependencies: string[]; // IDs of nodes this node depends on
}

export interface SelectNode extends Node {
  id: string;
  type: "select";
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

export class Metagraph {
  nodes: MetagraphNode[];
  name: string;
  description: string;

  constructor(nodes: MetagraphNode[], description: string, name: string) {
    this.nodes = nodes;
    this.description = description;
    this.name = name;

    // Validate the metagraph
    this.validateMetagraph();
  }

  private validateMetagraph() {
    // Define validation functions
    const checkUniqueIds = (nodes: MetagraphNode[]) =>
      new Set(nodes.map((node) => node.id)).size === nodes.length;

    const checkValidDependencies = (nodes: MetagraphNode[]) =>
      nodes.every((node) =>
        node.dependencies.every((depId) => nodes.some((n) => n.id === depId))
      );

    //TODO check for circular dependencies

    // Combine validation functions
    const validations = [
      checkUniqueIds,
      checkValidDependencies,
      // Add more validation functions here
    ];

    // Perform validations
    if (!validations.every((validation) => validation(this.nodes))) {
      throw new Error("Metagraph validation failed");
    }
  }
}

/**
 * Walk the graph in a BFS form and apply a transformation to each visited node
 * @param g
 * @param transform
 * @returns
 */
export function walkGraph<T>(g: Metagraph, transform: (v: MetagraphNode) => T): T[] {
  //Perform BFS on the graph
  const visited = new Set();
  const queue = [];
  const result = [];
  //TODO use a functional / immutable style instead
  //For each node that has not been visited yet, perform BFS
  g.nodes.forEach((node) => {
    if (!visited.has(node.id)) {
      queue.push(node);
      while (queue.length > 0) {
        const currentNode = queue.shift();
        visited.add(currentNode.id);
        result.push(transform(currentNode));
        currentNode.dependencies.forEach((depId) => {
          const depNode = g.nodes.find((n) => n.id === depId);
          if (!visited.has(depNode.id)) {
            queue.push(depNode);
          }
        });
      }
    }
  });
  return result;
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
  console.log(graph);

  return nodes.map((node) => {
    return {
      id: node.id,
      data: { label: node.description },
      type: "default",
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
