import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { Metagraph, getEdges, getVisualisationNodes, walkGraph } from "../metagraph";

type Props = {
  metagraph: Metagraph;
};

function Summary({ metagraph }: Props) {
  const descriptions = walkGraph(metagraph, (node) => node.description);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getVisualisationNodes(metagraph)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(getEdges(metagraph));
  const onConnect = useCallback((params) => console.log("not possible"), []);
  const onInit = (reactFlowInstance) => console.log("flow loaded:", nodes, edges);

  return (
    <div className="flow" style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onInit={onInit}
        attributionPosition="top-right"
        maxZoom={1}
        minZoom={0.2}
        fitView
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default Summary;
