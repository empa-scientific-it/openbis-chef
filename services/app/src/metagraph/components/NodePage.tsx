// Component for a LinkNode
import React, { useContext, useState } from "react";
import {
  MetagraphComponentProps,
  MetagraphNode,
  MetagraphOperations,
} from "@src/metagraph/metagraph";
import Entry from "./Entry";
import Select from "./Select";
import "./Node.css";
import { OperationContext } from "../OperationContext";

function selectEntryType(node: MetagraphNode) {
  if (node.type === "entry") {
    return <Entry key={node.id} node={node} />;
  } else if (node.type === "select") {
    return <Select key={node.id}/>;
  }
  // Handle other node types if needed
  return null;
}

const NodePage = ({ node }: MetagraphComponentProps) => {
  const workflowOperations = useContext(OperationContext);

  const child = selectEntryType(node);
  // Render input fields and link settings
  return (
    <div>
      <h1>Current step: {node.description}</h1>
      <hr className="node-divider" />
      {child}
    </div>
  );
};

export default NodePage;
