import React, { useContext, useEffect, useMemo, useState } from "react";

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
import "./ObjectGraph.css";
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
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import SampleEntry from "@src/openbis/components/SampleEntry";

type Props = {
  sample: typeof Sample;
  maxDepth: number;
  onNodeClick: (event: any, element: Node) => void;
};

function SampleNode({ data }: { data: { sample: typeof Sample } }) {
  return (
    <section className="sample-node">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <table>
        <tbody>
          <tr><td>PermID</td><td>{data.sample.permId.permId}</td></tr>
          <tr><td>Code</td><td>{data.sample.code}</td></tr>
          <tr><td>Identifier</td><td>{data.sample.identifier.identifier}</td></tr>
        </tbody>
      </table>
    </section>
  );
}

function ObjectGraph({ sample, maxDepth, onNodeClick }: Props) {
  const { edges: localEdges, nodes: localNodes } = getDisplayGraph(
    getGraphToDepth(sample, maxDepth),
    "sampleNode"
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(localNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(localEdges);
  const [instance, setInstance] = useState<ReactFlowInstance | null>(null);

  const onInit = (reactFlowInstance: ReactFlowInstance) => {
    setInstance(reactFlowInstance);
  };

  const nodeTypes = useMemo(() => ({ sampleNode: SampleNode }), []);

  const handleNodeClick = (event: any, element: Node) => {
    onNodeClick(event, element);
    instance.setViewport({
      x: element.position.x - element.width / 2,
      y: element.position.y - element.height / 2,
      zoom: 1,
    });
    instance.fitView();
  };

  return (
    <main>
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
          nodeTypes={nodeTypes}
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
