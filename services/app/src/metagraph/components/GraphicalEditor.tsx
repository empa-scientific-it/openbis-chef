import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
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
  Handle,
  Position,
  Node,
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
import "./GraphicalEditor.css";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Popup from "@src/notification/components/Popup";
import { NotificationContext } from "@src/notification/NotificationContext";
import Modal from "react-bootstrap/Modal";

import { NodeProps } from "reactflow";

type NoteContextProps = {
  show: boolean;
  onHide: () => void;
};
function NodeContextMenu({show, onHide}: NoteContextProps) {
  return <div hidden={!show}>Context menu</div>;
}

export type CounterData = {
  initialCount?: number;
};

function CounterNode(props: NodeProps<CounterData>) {
  const [count, setCount] = useState(props.data?.initialCount ?? 0);
  const [showContextMenu, setShowContextMenu] = useState(false);
  function handleNodeClick(event: React.MouseEvent<Element, MouseEvent>) {
    console.log("node click", event, showContextMenu);
    setShowContextMenu((old) => !old);
  }
  return (
    <div onClick={handleNodeClick}>
      <Handle type="target" position={Position.Top} />
      <p>Count: {count}</p>
      <button className="nodrag" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <NodeContextMenu show={showContextMenu} onHide={() => 1}/>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

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
    <div className="toolbar">
      <ButtonToolbar>
        <ButtonGroup>
          <NodeDropdown onSelect={onAddNode} />
          <Button onClick={() => onLayout()}>Auto Layout</Button>
          <Button onClick={() => onReset()}>Reset</Button>
          <Button onClick={() => onSave()}>Save</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

type NodeEditorProps = {
  node: MetagraphNode;
  show: boolean;
  onHide: () => void;
  onSave: (node: MetagraphNode) => void;
};

type EditableProperty = "name" | "description" | "entityType" | "collection";

function NodeEditor({ node, show, onHide, onSave }: NodeEditorProps) {
  const [localNode, setLocalNode] = useState(node);

  useEffect(() => {
    console.log("setting local node", node);
    setLocalNode(node);
  }, [node]);

  function handlePropertyChange(property: EditableProperty, value: any) {
    setLocalNode((old) => {
      return {
        ...old,
        [property]: value,
      };
    });
  }

  function handleLocalSave() {
    console.log("local save", localNode);
    onSave(localNode);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} backdrop={false}>
      <Modal.Header closeButton>
        <Modal.Title>Node: {localNode.id}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <label htmlFor="nameInput">Node name</label>
          <input
            id="nameInput"
            type="text"
            value={localNode.name}
            onChange={(event) =>
              handlePropertyChange("name", event.target.value)
            }
          />
          <label htmlFor="descriptionInput">Node description</label>
          <input
            id="descriptionInput"
            type="text"
            value={localNode.description}
            onChange={(event) =>
              handlePropertyChange("description", event.target.value)
            }
          />
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLocalSave}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function NodeDropdown({
  onSelect,
}: {
  onSelect: (node: MetagraphNode) => void;
}) {
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
          name: name,
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
          name: name,
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
          <Dropdown.Item onClick={() => addNode(nodeType)}>
            {nodeType}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

function ContextMenu({ node }: { node: MetagraphNode }) {
  return <div>Context menu</div>;
}

function getDisplayNodes(nodes: Metagraph) {
  return getVisualisationNodes(nodes, { type: "counterNode" });
}

function GraphicalEditor({ metagraph }: Props) {
  const initialgraph = metagraph;
  const [localGraph, setLocalGraph] = useState(metagraph);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getDisplayNodes(localGraph)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(getEdges(localGraph));
  const onInit = (reactFlowInstance) =>
    console.log("flow loaded:", nodes, edges);

  const notificationManager = useContext(NotificationContext);

  const [showEditor, setShowEditor] = useState(false);

  const [currentNode, setCurrentNode] = useState<MetagraphNode | null>(
    localGraph.nodes[0]
  );

  const nodeTypes = useMemo(() => ({ counterNode: CounterNode }), []);

  const [showContextMenu, setShowContextMenu] = useState(false);

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
    updateGraph(newGraph);
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
    setNodes(() => getDisplayNodes(graph));
    setEdges(() => getEdges(graph));
    console.log("updating graph", graph);
  }

  function handleLayout() {
    console.log("layout");
    console.log(localGraph);
    setNodes((nodes) => getDisplayNodes(localGraph));
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
    setLocalGraph(initialgraph);
    setNodes(getVisualisationNodes(initialgraph));
    setEdges(getEdges(initialgraph));
  }

  function handleSavingMetagraph() {
    console.log("saving metagraph", localGraph);
    const res = validateMetagraph(localGraph.nodes);
    console.log("validation result", res);
    if (res.valid) {
      notificationManager.addNotification("Metagraph is valid", "success");
    } else {
      res.failures.map((f) =>
        notificationManager.addNotification(formatFailure(f), "error")
      );
    }
  }

  function handleNodeClick(
    event: React.MouseEvent<Element, MouseEvent>,
    node: MetagraphNode
  ) {
    console.log("node click", event, showEditor, node);
    setShowContextMenu((old) => !old);
    // setCurrentNode(localGraph.nodes.find((n) => n.id === node.id));
    // setShowEditor((old) => !old);
  }

  function handleNodeDoubleClick(node: MetagraphNode) {
    console.log("node double click", node);
    setCurrentNode(localGraph.nodes.find((n) => n.id === node.id));
    setShowContextMenu(true);
  }

  function handleCloseModal() {
    setShowEditor(false);
  }

  function handleNodeSave(node: MetagraphNode) {
    console.log("node save", node);
    const newGraph = {
      ...localGraph,
      nodes: localGraph.nodes.map((n) => {
        //If we  change the id, this is going to fail
        if (n.id === node.id) {
          console.log("updating node", node);
          return {
            ...n,
            id: node.id,
            description: node.description,
          };
        } else {
          return n;
        }
      }),
    };
    console.log("new graph", newGraph);
    updateGraph(newGraph);
  }

  return (
    <div className="flow" style={{ width: "2000px", height: "800px" }}>
      <Toolbar
        onAddNode={handleNewNode}
        onLayout={handleLayout}
        onReset={handleReset}
        onSave={handleSavingMetagraph}
      />
      <NodeEditor
        node={currentNode}
        show={showEditor}
        onHide={handleCloseModal}
        onSave={handleNodeSave}
      />

      <ContextMenu node={currentNode} />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodeClick={(event, node) => handleNodeClick(event, node)}
        onInit={onInit}
        nodesDraggable={true}
        attributionPosition="top-right"
        maxZoom={1}
        elementsSelectable={true}
        minZoom={0.2}
        fitView
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
      <Popup timeout={2000} />
    </div>
  );
}

export default GraphicalEditor;
