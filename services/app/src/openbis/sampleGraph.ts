import { Sample } from "@src/types/openbis";
import dagre from "dagre";

interface Node {
  id: string;
}

interface Edge {
  source: string;
  target: string;
  id?: string;
}

export function getRelationshipGraph(
  s: Sample,
  relationships: Sample[] | null,
  reverse: Boolean = false
): { nodes: Node[]; edges: Edge[] } {
  const nodes = [{ id: s.code }].concat(
    relationships?.map((relationship) => ({ id: relationship.code }))
  );
  const edges = relationships?.map((relationship) => ({
    source: reverse ? s.code : relationship.code,
    target: reverse ? relationship.code : s.code,
    id: reverse ? `${s.code}-${relationship.code}` : `${relationship.code}-${s.code}`,
  }));
  return { nodes: nodes, edges: edges };
}

export function getDirectGraph(s: Sample): { nodes: Node[]; edges: Edge[] } {
  const parentsRelationships = getRelationshipGraph(s, s.parents);
  const childrenRelationships = getRelationshipGraph(s, s.children, true);

  const parentNodes = parentsRelationships?.nodes ? parentsRelationships.nodes : [];
  const parentEdges = parentsRelationships?.edges ? parentsRelationships.edges : [];
  const childrenNodes = childrenRelationships?.nodes ? childrenRelationships.nodes : [];
  const childrenEdges = childrenRelationships?.edges ? childrenRelationships.edges : [];

  return {
    nodes: [...parentNodes, ...childrenNodes],
    edges: [...parentEdges, ...childrenEdges],
  };
}

export function getGraphToDepth(
  s: Sample,
  maxDepth: number,
  depth = 0,
  accumulator: { nodes: Node[]; edges: Edge[] } = { nodes: [], edges: [] }
): { nodes: Node[]; edges: Edge[] } {
  if (depth >= maxDepth) {
    // If depth reaches maxDepth, return the accumulated graph
    return accumulator;
  } else {
    // Recursively visit all parents or children, depending on your use case
    const graph = (s?.parents || []).flatMap((parent) =>
      getGraphToDepth(parent, maxDepth, depth + 1, accumulator)
    );
    const childrenGraph = (s?.children || []).flatMap((child) =>
      getGraphToDepth(child, maxDepth, depth + 1, accumulator)
    );

    // Optionally, add the current node and edges to the accumulator
    const currentNode = getDirectGraph(s);

    accumulator.nodes.push(...currentNode?.nodes.filter(Boolean)); // Filter out null or undefined nodes
    accumulator.edges.push(
      ...(graph?.flatMap((g) => g.edges).filter(Boolean) || []), // Filter out null or undefined edges
      ...(childrenGraph?.flatMap((g) => g.edges).filter(Boolean) || []) // Filter out null or undefined edges
    );

    return accumulator;
  }
}

interface DisplayNode {
  id: string;
  data: { label: string };
  type: string;
  position: { x: number; y: number };
}

interface DisplayEdge {
  id: string;
  source: string;
  target: string;
  type: string;
}

export function getDisplayGraph(sampleGraph: { nodes: Node[]; edges: Edge[] }): {
  nodes: DisplayNode[];
  edges: DisplayEdge[];
} {
  //Use dagre to place the nodes hierarchically
  const graph = new dagre.graphlib.Graph();
  graph.setGraph({});

  // Default to assigning a new object as a label for each new edge.
  graph.setDefaultEdgeLabel(function () {
    return {};
  });
  sampleGraph?.nodes.map((node) => {
    graph.setNode(node.id, { width: 100, height: 100, label: node.id });
  });
  sampleGraph?.edges.map((edge) => graph.setEdge(edge.source, edge.target));
  dagre.layout(graph);
  return {
    nodes: sampleGraph.nodes.map((node) => {
      return {
        id: node.id,
        data: { label: node.id },
        type: "default",
        position: {
          y: graph.node(node.id).y,
          x: graph.node(node.id).x,
        },
      };
    }),
    edges: sampleGraph.edges.map((edge) => {
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: "step",
      };
    }),
  };
}
