import { Sample,  SamplePermId } from "@src/types/openbis";
import dagre from "dagre";
import { SampleFetchOptions } from "@src/openbis/dto";

interface Node {
  id: string;
}

interface Edge {
  source: string;
  target: string;
  id?: string;
}

interface Graph<NodeType extends Node, EdgeType extends Edge> {
  nodes: NodeType[];
  edges: EdgeType[];
}

interface SampleNode extends Node {
  id: string;
  sample: Sample;
}

type SampleGraph = Graph<SampleNode, Edge>;

export function getDirectedRelationships(
  s: Sample,
  relationships: Sample[] | null,
  reverse: boolean = false
): SampleGraph {
  const nodes = new Set([{ id: s.permId.permId, sample: s }]);
  const edges: Set<Edge> = new Set();

  if (relationships) {
    relationships.forEach((relationship) => {
      if (relationship) {
        nodes.add({ id: relationship.permId.permId, sample: relationship });
        edges.add({
          source: reverse ? s.permId.permId : relationship.permId.permId,
          target: reverse ? relationship.permId.permId : s.permId.permId,
          id: reverse
            ? `${s.code}-${relationship.permId.permId}`
            : `${relationship.permId.permId}-${s.permId.permId}`,
        });
      }
    });
  }

  return { nodes: Array.from(nodes), edges: Array.from(edges) };
}

function uniqueBy<T>(vals: T[], pred: (arg0: T) => string): T[] {
  return [...new Map(vals.map((item) => [pred(item), item])).values()];
}

function uniqueEdges<E extends Edge>(edges: E[]): E[] {
  return uniqueBy(edges, (e) => `${e.source}-${e.target}`);
}

function uniqueNodes<N extends Node>(nodes: N[]): N[] {
  return uniqueBy(nodes, (e) => e.id);
}

export function getDirectGraph(s: Sample): SampleGraph {
  const parentsRelationships = getDirectedRelationships(s, s.parents);
  const childrenRelationships = getDirectedRelationships(s, s.children, true);

  const parentNodes = parentsRelationships.nodes;
  const parentEdges = parentsRelationships.edges;
  const childrenNodes = childrenRelationships.nodes;
  const childrenEdges = childrenRelationships.edges;

  return {
    nodes: uniqueNodes([...parentNodes, ...childrenNodes]),
    edges: uniqueEdges([...parentEdges, ...childrenEdges]),
  };
}

export function getGraphToDepth<E extends Edge, N extends Node>(
  s: Sample,
  maxDepth: number,
  depth = 0,
  accumulator: SampleGraph = { nodes: [], edges: [] },
  visited: Set<String> = new Set()
): Graph<N, E> {
  // console.log("getGraphToDepth", s, maxDepth, depth, accumulator, visited);
  if (depth >= maxDepth || visited.has(s.permId.permId)) {
    // If depth reaches maxDepth or the sample is already visited, return the accumulated graph
    return {
      nodes: uniqueNodes(accumulator.nodes),
      edges: uniqueEdges(accumulator.edges),
    };
  } else {
    // Mark the current sample as visited
    const newVisited = new Set(visited).add(s.permId.permId);

    const { nodes, edges } = getDirectGraph(s);
    const parentGraph = s.parents?.flatMap((parent) =>
      getGraphToDepth(parent, maxDepth, depth + 1, accumulator, newVisited)
    );
    const childGraph = s.children?.flatMap((children) =>
      getGraphToDepth(children, maxDepth, depth + 1, accumulator, newVisited)
    );

    accumulator.nodes.push(
      ...uniqueNodes([
        ...nodes,
        ...parentGraph?.flatMap((g) => g.nodes),
        ...childGraph?.flatMap((g) => g.nodes),
      ])
    );
    accumulator.edges.push(
      ...uniqueEdges([
        ...edges,
        ...parentGraph?.flatMap((g) => g.edges),
        ...childGraph?.flatMap((g) => g.edges),
      ])
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

function uniqueGraph<N extends SampleNode, E extends Edge>(graph: Graph<N, E>): Graph<N, E> {
  return {
    nodes: uniqueBy(graph.nodes, (e) => e.id),
    edges: uniqueBy(graph.edges, (e) => `${e.source}-${e.target}`),
  };
}

export function getDisplayGraph<N extends Node, E extends Edge>(
  sampleGraph: Graph<N, E>,
  type: string = "default",
  settings: {width: number, height: number} = {width: 200, height: 100},
  labelingFunction: (node: N) => string = node => node.sample.code
): {
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
  const uniqueSampleGraph = uniqueGraph(sampleGraph);
  uniqueSampleGraph?.nodes.map((node) => {
    graph.setNode(node.id, {...settings, label: node.id });
  });
  uniqueSampleGraph?.edges.map((edge) => graph.setEdge(edge.source, edge.target));
  dagre.layout(graph);
  return {
    nodes: uniqueSampleGraph.nodes.map((node) => {
      return {
        id: node.id,
        data: { label: labelingFunction(node), sample: node.sample },
        type: type,
        position: {
          y: graph.node(node.id).y,
          x: graph.node(node.id).x,
        },
      };
    }),
    edges: uniqueSampleGraph.edges.map((edge) => {
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: "step",
      };
    }),
  };
}
export function fetchOptionsToDepth(depth: number, initialOptions: typeof SampleFetchOptions): typeof SampleFetchOptions {
  if (depth <= 0) {
    // Base case: Stop recursion and return an empty fetch options
    return initialOptions;
  }

  const fo = initialOptions;
  fo.withChildrenUsing(fetchOptionsToDepth(depth - 1, initialOptions));
  fo.withParentsUsing(fetchOptionsToDepth(depth - 1, initialOptions));
  return fo;
}
