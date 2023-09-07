import React, { useContext, useEffect, useState } from "react";

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
import {
  Metagraph,
  VisualisationNode,
  getEdges,
  getVisualisationNodes,
  walkGraph,
} from "@src/metagraph/metagraph";
import { Sample, SamplePermId } from "@src/openbis/dto";
import {
  fetchOptionsToDepth,
  getDirectGraph,
  getDisplayGraph,
  getGraphToDepth,
} from "@src/openbis/sampleGraph";
import { AuthContext } from "@src/openbis/AuthContext";

type Props = {
  sample: typeof Sample;
  maxDepth: number
};

function ObjectGraph({ sample, maxDepth }: Props) {


 
  const { edges: localEdges, nodes: localNodes } = getDisplayGraph(
    getGraphToDepth(sample, maxDepth))
    const [nodes, setNodes, onNodesChange] = useNodesState(localNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(localEdges);
      
   
  


  const service = useContext(AuthContext);

  const handleNodeClick = (event: any, element: Node) => {
    const fo = fetchOptionsToDepth(maxDepth);
    service.service
      .getSamples([new SamplePermId(element.id)], fo)
      .then((samples) => {
        const sample = Object.values(samples)[0];
        const { edges: newEdges, nodes: newNodes } = getDisplayGraph(
          getGraphToDepth(sample, maxDepth)
        );
        console.log(sample)
        setNodes(() => newNodes);
        setEdges(() => newEdges);
      });
  };

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
          onNodeClick={(event, element) => handleNodeClick(event, element)}
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
