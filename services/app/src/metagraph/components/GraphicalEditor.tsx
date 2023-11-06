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
  Edge,
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
  LayoutConfig,
} from "../metagraph";
import Button from "react-bootstrap/Button";
import "./GraphicalEditor.css";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Popup from "@src/notification/components/Popup";
import { NotificationContext } from "@src/notification/NotificationContext";
import Modal from "react-bootstrap/Modal";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import { NodeProps } from "reactflow";
import WorkflowEditor from "./WorkflowEditor";
import { Me } from "v3api/V3API.esm";

type NoteContextProps = {
  show: boolean;
  onHide: () => void;
};

function NodeContextMenu({ show, onHide }: NoteContextProps) {
  return <div hidden={!show}>Context menu</div>;
}

export type EditableNodeProps = {
  type: "editableNode";
  metagraphNode: MetagraphNode;
  onEdit: (node: MetagraphNode) => void;
  onDelete: (node: MetagraphNode) => void;
};

function EditableNode({ data }: NodeProps<EditableNodeProps>) {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  function handleNodeClick(event: React.MouseEvent<Element, MouseEvent>) {
    event.stopPropagation();
    setShowContextMenu((old) => !old);
  }
  function handleLocalEdit(event) {
    event.stopPropagation();
    setShowEditor((old) => !old);
  }
  function handleLocalDelete(event) {
    event.stopPropagation();
    data.onDelete(data.metagraphNode);
  }
  function handleLocalSave(node: MetagraphNode) {
    setShowEditor((old) => false);
    setShowContextMenu((old) => false);
    data.onEdit(node);
  }

  function handleLocalClose() {
    setShowContextMenu((old) => false);
    setShowEditor((old) => false);
  }

  function handleCloseContextMenu() {
    setShowContextMenu(false);
  }

  return (
    <div onClick={handleNodeClick}>
      <Handle type="target" position={Position.Top} />
      <Button>
        <p>{data.metagraphNode.name}</p>
        <DropdownMenu show={showContextMenu}>
          <Dropdown.Header>Node Actions</Dropdown.Header>
          <Dropdown.Item onClick={handleLocalEdit}>Edit node</Dropdown.Item>
          <Dropdown.Item onClick={handleLocalDelete}>Delete node</Dropdown.Item>
          <Dropdown.Item onClick={handleCloseContextMenu}>
            Clone node
          </Dropdown.Item>
        </DropdownMenu>
      </Button>

      <NodeEditor
        node={data.metagraphNode}
        show={showEditor}
        onSave={handleLocalSave}
        onHide={handleLocalClose}
      />
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
  onEdit: () => void;
};

function Toolbar({
  onAddNode,
  onLayout,
  onReset,
  onSave,
  onEdit,
}: ToolbarProps) {
  return (
    <div className="toolbar">
      <ButtonToolbar>
        <ButtonGroup>
          <NodeDropdown onSelect={onAddNode} />
          <Button onClick={() => onLayout()}>Auto Layout</Button>
          <Button onClick={() => onReset()}>Reset</Button>
          <Button onClick={() => onSave()}>Save</Button>
          <Button onClick={() => onEdit()}>Edit JSON</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

type MetagraphPropertiesEditorProps = {
  metagraph: Metagraph;
};
function MetagraphPropertiesEditor({ metagraph }: MetagraphPropertiesEditorProps) {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Metagraph name</Form.Label>
          <Form.Control type="text" placeholder={metagraph.name} />
        </Form.Group>
      </Form>
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

function getDisplayNodes(
  nodes: Metagraph,
  config: Partial<LayoutConfig> = {},
  onEdit: (node: MetagraphNode) => void,
  onDelete: (node: MetagraphNode) => void
) {
  return getVisualisationNodes(nodes, config, (node) => {
    return {
      type: "editableNode",
      metagraphNode: node,
      onEdit: onEdit,
      onDelete: onDelete,
    };
  });
}

type GraphicalEditorProps = {
  metagraph: Metagraph;
  width: number | undefined;
  height: number | undefined;
  nodeWidth: number | undefined;
  nodeHeight: number | undefined;
};

function GraphicalEditor({
  metagraph,
  width = 800,
  height = 800,
  nodeWidth = 100,
  nodeHeight = 100,
}: GraphicalEditorProps) {
  const [localGraph, setLocalGraph] = useState(metagraph);

  const getNode = useCallback(
    (metagraph: Metagraph) => {
      return getDisplayNodes(
        metagraph,
        { width: nodeWidth, height: nodeHeight },
        (node) => console.log("edit", node),
        (node) => handleNodeDeletion(node)
      );
    },
    [localGraph]
  );
  const initialgraph = metagraph;
  const [nodes, setNodes, onNodesChange] = useNodesState(getNode(localGraph));
  const [edges, setEdges, onEdgesChange] = useEdgesState(getEdges(localGraph));
  const onInit = (reactFlowInstance) =>
    console.log("flow loaded:", nodes, edges);

  const [selectedEdge, setSelectedEdge] = useState<Edge<any> | null>(null);
  const [selectedNode, setSelectedNode] = useState<MetagraphNode | null>(null);

  const notificationManager = useContext(NotificationContext);

  const [showEditor, setShowEditor] = useState(false);

  const [currentNode, setCurrentNode] = useState<MetagraphNode | null>(
    localGraph.nodes[0]
  );

  const nodeTypes = useMemo(() => ({ editableNode: EditableNode }), []);

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
    setNodes((nodes) => getNode(graph));
    setEdges((nodes) => getEdges(graph));
    console.log("updating graph", graph);
    setLocalGraph(() => graph);
  }

  function handleLayout() {
    console.log("layout");
    console.log(localGraph);
    setNodes((nodes) => getNode(localGraph));
  }

  function onNodeDragStart(event: any, node: any) {
    console.log("drag start", node.position, event);
    const newNode = {
      ...node,
      position: {
        x: node.position.x,
        y: node.position.y,
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
    setNodes(getNode(initialgraph));
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
    setShowContextMenu((old) => !old);
    setSelectedNode(node);
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
    console.log("local graph", localGraph);
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

  function handleEdgeClick(
    event: React.MouseEvent<Element, MouseEvent>,
    edge: Edge<any>
  ) {
    setSelectedEdge(edge);
  }

  function handleNodeDeletion(node: MetagraphNode) {
    console.log("deleting node", node);
    console.log("local graph", localGraph);
    const newGraph = {
      ...localGraph,
      nodes: localGraph.nodes.filter((n) => n.id !== node.id),
    };

    const filteredGraph = {
      ...newGraph,
      nodes: newGraph.nodes.map((n) => {
        return {
          ...n,
          dependencies: n.dependencies.filter((dep) => dep !== node.id),
        };
      }),
    };
    console.log("new graph", filteredGraph);
    updateGraph(filteredGraph);
  }

  function handleEdgeDelete(edge: Edge<any>) {
    console.log("deleting edge", edge);
    const newGraph = {
      ...localGraph,
      nodes: localGraph.nodes.map((node) => {
        if (node.id === edge.target) {
          return {
            ...node,
            dependencies: node.dependencies.filter(
              (dep) => dep !== edge.source
            ),
          };
        } else {
          return node;
        }
      }),
    };
    updateGraph(newGraph);
  }

  function handkeKeyDown(event: React.KeyboardEvent<Element>) {
    if (event.key === "Delete") {
      if (selectedEdge) {
        handleEdgeDelete(selectedEdge);
      }
      if (selectedNode) {
        handleNodeDeletion(selectedNode);
      }
    }
  }

  function handleNewMetagraph(metagraph: Metagraph) {
    console.log("new metagraph", metagraph);
    updateGraph(metagraph);
  }

  return (
    <div className="sideBySide">
      <div
        className="flow"
        style={{ width: `${width}px`, height: `${height}px` }}
        onKeyDown={handkeKeyDown}
      >
        <Toolbar
          onAddNode={handleNewNode}
          onLayout={handleLayout}
          onReset={handleReset}
          onSave={handleSavingMetagraph}
          onEdit={() => setShowEditor(true)}
        />
        <MetagraphPropertiesEditor metagraph={localGraph}/>

        <ContextMenu node={currentNode} />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodeClick={(event, node) => handleNodeClick(event, node)}
          onInit={onInit}
          onNodeDrag={onNodeDragStart}
          nodesDraggable={true}
          onEdgeClick={(event, edge) => handleEdgeClick(event, edge)}
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
      </div>
      <div>
        <WorkflowEditor
          initialValue={localGraph}
          isOpen={showEditor}
          handleClose={() => setShowEditor(false)}
          handleNewMetagraph={handleNewMetagraph}
        />
      </div>
      <Popup timeout={2000} />
    </div>
  );
}

export default GraphicalEditor;
