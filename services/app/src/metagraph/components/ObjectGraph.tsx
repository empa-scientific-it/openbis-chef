import React, { useEffect, useState } from "react";

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import "./Demo.css";
import {
  Metagraph,
  VisualisationNode,
  getEdges,
  getVisualisationNodes,
  walkGraph,
} from "@src/metagraph/metagraph";
import { Sample } from "@src/openbis/dto";
import { getDirectGraph, getDisplayGraph } from "@src/openbis/sampleGraph";

type Props = {
  sample: typeof Sample;
};

function ObjectGraph({ sample }: Props) {
  const { edges: localEdges, nodes: localNodes } = getDisplayGraph(
    getDirectGraph(sample)
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(localNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(localEdges);

  return (
    <main>
      <h1>Object graph</h1>
      <section
        className="flow"
        style={{
          width: "500px",
          height: "500px",
          overflow: "auto",
          fontFamily: "Virgil",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          attributionPosition="top-right"
          maxZoom={100}
          minZoom={0.1}
          fitView
        ></ReactFlow>
      </section>
    </main>
  );
}

export default ObjectGraph;
