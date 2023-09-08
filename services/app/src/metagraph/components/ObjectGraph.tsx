import React, { useContext, useEffect, useState } from "react";

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Node,
  useReactFlow,
  ReactFlowInstance,
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
  maxDepth: number;
  onNodeClick: (event: any, element: Node) => void;
};

function ObjectGraph({ sample, maxDepth, onNodeClick }: Props) {
  const { edges: localEdges, nodes: localNodes } = getDisplayGraph(
    getGraphToDepth(sample, maxDepth)
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(localNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(localEdges);
  const [instance, setInstance] = useState<ReactFlowInstance | null>(null);

  const onInit = (reactFlowInstance: ReactFlowInstance) => {
    setInstance(reactFlowInstance);
  };

//   useEffect(() => {instance.setCenter()}, [edges, nodes]);
  const handleNodeClick = (event: any, element: Node) => {
    onNodeClick(event, element);
    instance.setViewport(  {
        x: element.position.x - (element.width / 2) ,
        y:  element.position.y - (element.height / 2),
        zoom: 1,
      })
      instance.fitView();
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
          onInit={onInit}
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
