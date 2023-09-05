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
import "./Demo.css"
import {
  Metagraph,
  VisualisationNode,
  getEdges,
  getVisualisationNodes,
  walkGraph,
} from "@src/metagraph/metagraph";

type Props = {
  metagraph: Metagraph;
};

function setVisited(node: Node) {
  return {
    ...node,
    style: {
      ...node.style,
      background: "green",
    },
  };
}

function setVisiting(node: Node) {
  return {
    ...node,
    style: {
      ...node.style,
      background: "green",
      filter: "brightness(1.75)",
    },
  };
}

function setUnvisited(node: Node) {
  return {
    ...node,
    style: {
      ...node.style,
      background: "withe",
    },
  };
}

function Demo({ metagraph }: Props) {
  const descriptions = walkGraph(metagraph, (node) => node.description);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getVisualisationNodes(metagraph)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(getEdges(metagraph));
  const onInit = (reactFlowInstance) => console.log("flow loaded:", nodes, edges);
  const [walk, setWalk] = useState(false);

  const [paused, setPaused] = useState(false); // New paused state

  // Function to pause execution
  const pause = (delay) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

  useEffect(() => {
    async function doWalk() {
      setNodes((prevNodes) => nodes.map((node) => setUnvisited(node)));
      for (const node of nodes) {
        console.log(node);
        await pause(500);
        setNodes((prevNodes) => {
          return prevNodes.map((prevNode) => {
            if (prevNode.id === node.id) {
              return setVisiting(prevNode);
            } else {
              return setVisited(prevNode);
            }
          });
        });
        await pause(500);
      }
      setNodes((prevNodes) => nodes.map((node) => setUnvisited(node)));
    }
    if (walk) {
      doWalk();
    }
  }, [walk]);

  return (
    <div>
      <h1>Summary</h1>
      <div
        className="flow"
        style={{ width: "1000px", height: "1000px", overflow: "auto" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onInit={onInit}
          attributionPosition="top-right"
          maxZoom={100}
          minZoom={0.1}
          fitView
        >
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <button onClick={() => setWalk((old) => !old)}>Walk</button>
    </div>
  );
}

export default Demo;
