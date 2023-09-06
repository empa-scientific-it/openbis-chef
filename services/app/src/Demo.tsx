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
import { useList } from "./metagraph/useList";

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
      background: "white",
    },
  };
}

function Demo({ metagraph }: Props) {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getVisualisationNodes(metagraph)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(getEdges(metagraph));
  const onInit = (reactFlowInstance) => console.log("flow loaded:", nodes, edges);
  const [walk, setWalk] = useState(false);
  const visitedElements = useList<JSX.Element>([]);
  const [paused, setPaused] = useState(false); // New paused state
  const alreadyVisited = useList<String>([]); // New alreadyVisited state

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
      setNodes((prevNodes) => prevNodes.map((node) => setUnvisited(node)));
      visitedElements.clear();
      for (const node of nodes) {
        console.log(node);
        visitedElements.add(<li>{node.id}</li>);
        await pause(500);
        setNodes((prevNodes) => {
          return prevNodes.map((prevNode) => {
            if (prevNode.id === node.id) {
              alreadyVisited.add(node.id);
              return setVisiting(prevNode);
            } else if (alreadyVisited.list.includes(node.id)) {
              return setVisited(prevNode);
            } else {
              return prevNode;
            }
          });
        });
        await pause(500);
      }
      setNodes((prevNodes) => prevNodes.map((node) => setUnvisited(node)));
      visitedElements.clear();
      alreadyVisited.clear();
    }
    if (walk) {
      doWalk();
    }
    return () => {
      setNodes((prevNodes) => prevNodes.map((node) => setUnvisited(node)));
      visitedElements.clear();
    };
  }, [walk]);

  function handleWalk(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setWalk((old) => !old);
  }

  return (
    <main>
      <h1>Workflow graph</h1>
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
          attributionPosition="top-right"
          maxZoom={100}
          minZoom={0.1}
          fitView
        ></ReactFlow>
      </section>
      <section>
        <h2>Visited nodes</h2>
        <ul>{visitedElements.list}</ul>
      </section>
      <button onClick={handleWalk}>Walk</button>
    </main>
  );
}

export default Demo;
