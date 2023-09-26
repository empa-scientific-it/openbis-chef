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
  samples: (typeof Sample)[];
  maxDepth: number;
  onNodeClick: (event: any, element: Node) => void;
};

function SampleNode({ data }: { data: { sample: typeof Sample } }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className={`sample-node${isCollapsed ? " collapsed" : ""}`}>
      <div className="expand-collapse-toggle" onClick={toggleCollapse}>
        {isCollapsed ? "▼" : "▲"}
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <h3>{data.sample.code}</h3>
      {!isCollapsed && (
        <table>
          <tbody>
            <tr>
              <td>PermID</td>
              <td>{data.sample.permId.permId}</td>
            </tr>
            <tr>
              <td>Identifier</td>
              <td>{data.sample.identifier.identifier}</td>
            </tr>
            {Object.entries(data?.sample?.properties ?? {}).map(([name, value]) => {
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}

function ObjectGraph({ samples, maxDepth, onNodeClick }: Props) {
  const res = samples.flatMap((sample) =>
    getDisplayGraph(getGraphToDepth(sample, maxDepth), "sampleNode", {
      width: 200,
      height: 200,
    })
  );

  const localNodes = [...new Set(res.flatMap((el) => el.nodes))];
  const localEdges = [...new Set(res.flatMap((el) => el.edges))];
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
      zoom: instance?.getViewport().zoom ?? 1,
    });

    instance.fitView();
  };

  return (
    <main>
      <section
        style={{
          width: "99%",
          height: "600px",
          overflow: "auto"
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
