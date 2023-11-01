import React, { useCallback, useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  OnConnect,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  Metagraph,
  getEdges,
  getVisualisationNodes,
  walkGraph,
  MetagraphNode,
  MetagraphNodeType,
  validateMetagraph,
  formatFailure,
} from "../metagraph";
import Button from "react-bootstrap/Button";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Popup from "@src/notification/components/Popup";
import { NotificationContext } from "@src/notification/NotificationContext";

type Props = {
  metagraph: Metagraph;
};

type ToolbarProps = {
  onAddNode: (node: MetagraphNode) => void;
  onLayout: () => void;
  onReset: () => void;
  onSave: () => void;
};

function Toolbar({ onAddNode, onLayout, onReset, onSave }: ToolbarProps) {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <NodeDropdown onSelect={onAddNode} />
        <Button onClick={() => onLayout()}>Auto Layout</Button>
        <Button onClick={() => onReset()}>Reset</Button>
        <Button onClick={()=> onSave()}>Save</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

function NodeDropdown({ onSelect }: { onSelect: (node: MetagraphNode) => void }) {
  const [nodeCount, setNodeCount] = useState(0);


  function addNode(nodeType: MetagraphNodeType) {
    setNodeCount((count) => count + 1);
    const name = `node ${nodeCount}`;
    const id = `node-${nodeCount}`;
    switch (nodeType) {
      case MetagraphNodeType.Select:
        const node: MetagraphNode = {
          id: id,
          type: MetagraphNodeType.Select,
          description: name,
          entityType: "Sample",
          collection: "/DEFAULT/DEFAULT/",
          dependencies: [],
        };
        onSelect(node);
        break;
      case MetagraphNodeType.Entry:
        const node2: MetagraphNode = {
          id: id,
          type: MetagraphNodeType.Entry,
          description: name,
          entityType: "Sample",
          collection: "/DEFAULT/DEFAULT/",
          dependencies: [],
        };
        onSelect(node2);
        break;
    }
  }
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Add Node</Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.values(MetagraphNodeType).map((nodeType) => (
          <Dropdown.Item onClick={() => addNode(nodeType)}>{nodeType}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

// function getEditor(node: MetagraphNode)

function GraphicalEditor({ metagraph }: Props) {
  const [localGraph, setLocalGraph] = useState(metagraph);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getVisualisationNodes(metagraph)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(getEdges(metagraph));
  const onInit = (reactFlowInstance) => console.log("flow loaded:", nodes, edges);

  const notificationManager = useContext(NotificationContext);

  function onConnect(params: Connection) {
    const newEdge = {
      id: `${params.source}-${params.target}`,
      source: params.source,
      target: params.target,
    };
    console.log("connect", params);
    setEdges((eds) => addEdge(params, eds));
    const newGraph = {
      ...localGraph,
      nodes: localGraph.nodes.map((node) => {
        if (node.id === params.target) {
          console.log("adding dependency", node.id, params.source);
          return {
            ...node,
            dependencies: [...node.dependencies, params.source],
          };
        } else {
          return node;
        }
      }),
    };
    console.log("new graph", newGraph);
    // updateGraph(newGraph);
  }

  function handleNewNode(node: MetagraphNode) {
    const newGraph = {
      ...localGraph,
      nodes: [...localGraph.nodes, node],
    };
    updateGraph(newGraph);
  }

  function updateGraph(graph: Metagraph) {
    setLocalGraph(graph);
    setNodes(getVisualisationNodes(graph));
    setEdges(getEdges(graph));
  }

  function handleLayout() {
    console.log("layout");
    console.log(localGraph);
    setNodes((nodes) => getVisualisationNodes(localGraph));
  }

  function onNodeDragStart(event: any, node: any) {
    console.log("drag start", node, event);
    const newNode = {
      ...node,
      position: {
        x: event.x,
        y: event.y,
      },
    };

    const newNodes = [
      ...nodes.filter((n) => {
        return n.id !== newNode.id;
      }),
      newNode,
    ];

    setNodes(newNodes);
  }

  function handleReset() {
    const firstNode = {
      id: "start",
      type: MetagraphNodeType.Entry,
      description: "Start node",
      entityType: "Entry",
      collection: "/DEFAULT/DEFAULT/",
      dependencies: [],
    };
    const newGraph = {
      ...localGraph,
      nodes: [firstNode],
    };
    setLocalGraph(newGraph);
    setNodes(getVisualisationNodes(newGraph));
    setEdges(getEdges(newGraph));
  }

  function handleSavingMetagraph(){
    console.log("saving metagraph", localGraph);
    const res = validateMetagraph(localGraph.nodes);
    console.log("validation result", res);
    if(res.valid){
        notificationManager.addNotification("Metagraph is valid", "success");
    }else{
        res.failures.map((f)=> notificationManager.addNotification(formatFailure(f), "error"));
    }

  }
  return (
    <div className="flow" style={{ width: "2000px", height: "800px" }}>
      <Toolbar onAddNode={handleNewNode} onLayout={handleLayout} onReset={handleReset} onSave={handleSavingMetagraph} />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onInit={onInit}
        nodesDraggable={true}
        attributionPosition="top-right"
        maxZoom={1}
        elementsSelectable={true}
        minZoom={0.2}
        fitView
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
      <Popup timeout={2000} />
    </div>
  );
}

export default GraphicalEditor;
