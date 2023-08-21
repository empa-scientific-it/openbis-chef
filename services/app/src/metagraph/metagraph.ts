import type { SamplesCreationOperation } from '@src/types/openbis';

export interface Node {
  id: string;
  entityType: string;
  type: string;
  description: string | null;
}

export interface EntryNode extends Node {
  id: string;
  type: 'entry';
  entityType: string;
  collection: string;
  dependencies: string[]; // IDs of nodes this node depends on
}

export interface SelectNode extends Node {
  id: string;
  type: 'select';
  entityType: string;
  collection: string;
  dependencies: string[]; // IDs of nodes this node depends on
}

export type MetagraphNode = EntryNode | SelectNode;


export interface Metagraph {
  nodes: MetagraphNode[];
}

export interface VisualisationNode {
  id: string;
  data: Node;
  position: {
    x: number;
    y: number;
  }
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
      new Set(nodes.map(node => node.id)).size === nodes.length;

    const checkValidDependencies = (nodes: MetagraphNode[]) =>
      nodes.every(node =>
        node.dependencies.every(depId =>
          nodes.some(n => n.id === depId)
        )
      );

    //TODO check for circular dependencies


    // Combine validation functions
    const validations = [
      checkUniqueIds,
      checkValidDependencies,
      // Add more validation functions here
    ];

    // Perform validations
    if (!validations.every(validation => validation(this.nodes))) {
      throw new Error('Metagraph validation failed');
    }
  }
}





/**
 * Walk the graph in a BFS form and apply a transformation to each visited node
 * @param g 
 * @param transform 
 * @returns 
 */
export function walkGraph<T>(g: Metagraph, transform: (Node) => T): T[] {
  //Perform BFS on the graph
  const visited = new Set();
  const queue = [];
  const result = [];
  //TODO use a functional / immutable style instead
  //For each node that has not been visited yet, perform BFS
  g.nodes.forEach(node => {
    if (!visited.has(node.id)) {
      queue.push(node);
      while (queue.length > 0) {
        const currentNode = queue.shift();
        visited.add(currentNode.id);
        result.push(transform(currentNode));
        currentNode.dependencies.forEach(depId => {
          const depNode = g.nodes.find(n => n.id === depId);
          if (!visited.has(depNode.id)) {
            queue.push(depNode);
          }
        })
      }
    }
  })
  return result;
}

interface Edge {
  source: string;
  target: string;
  id: string;
}

export function getEdges(g: Metagraph): Edge[] {

  return g.nodes.flatMap(node => {
    return node.dependencies.map(depId => {
      return { source: node.id, target: depId, id: `${node.id}-${depId}` };
    })
  })
}



export function findRootNodes(g: Metagraph): MetagraphNode[] {
  //A root node is a node that does not appear as a dependency in any other
  //node
  return g.nodes.filter(node => {
    return !g.nodes.some(n => n.dependencies.includes(node.id))
  })
}


function getDepth(node: Node, g: Metagraph): number {
  //If the node never appears in a chain of dependencies, its depth is 0
  if (!g.nodes.some(n => n.dependencies.includes(node.id))) {
    return 0;
  }
  //Otherwise, we check for a chain of dependencies
  else {
    return g.nodes.filter(n => n.dependencies.includes(node.id))
      .map(n => 1 + getDepth(n, g))
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
export function getVisualisationNodes(g: Metagraph, mult: number): VisualisationNode[] {
  //Place the node hierarchically
  const nodes = walkGraph(g, node => node);
  const edges = getEdges(g);


  //TODO place the nodes hierarchically. To do so, we walk the graph using BFS
  //and keep track of the depth of each node. Then we can place the nodes
  interface NodeWithDepth {
    id: string;
    depth: number;
    dependencies: string[];
  }
  const initGraph = g.nodes.map(node => {
    return {
      id: node.id,
      data: node,
      depth: getDepth(node, g),
      dependencies: node.dependencies
    }
  })

  //Once we have the depth of each node, we can place the nodes hierarchically 
  // by setting y = depth and x = index of node in the depth level
  const nodesWithDepth = initGraph.map(node => {
    return {
      id: node.id,
      data: node.data,
      type: 'input',
      position: {
        y: node.depth * mult,
        x: getRandomInt(node.depth) * mult
      }

    }
  })
  return nodesWithDepth;

}

export interface MetagraphOperation{
  operationId: string;
}

export interface CreateOperation extends MetagraphOperation {
  creation: SamplesCreationOperation
}

export interface LinkOperation extends MetagraphOperation {
  source: string;
}


export type MetagraphOperations = CreateOperation | LinkOperation;


export interface MetagraphComponentProps {
  operation: MetagraphOperations;
  onFinished: (operation: MetagraphOperations) => void;
}


