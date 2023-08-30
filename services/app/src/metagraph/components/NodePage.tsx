// Component for a LinkNode
import { useContext } from "react";
import {
  MetagraphComponentProps,
  MetagraphNode,
} from "@src/metagraph/metagraph";
import Entry from "./Entry";
import Select from "./Select";

function selectEntryType(node: MetagraphNode) {
  if (node.type === "entry") {
    return <Entry key={node.id} node={node} />;
  } else if (node.type === "select") {
    return <Select key={node.id} node={node} />;
  }
  // Handle other node types if needed
  return null;
}

const NodePage = ({ node }: MetagraphComponentProps) => {
  const child = selectEntryType(node);

  // Render input fields and link settings
  return (
    <div>
      <h1>Current step: {node.description}</h1>
      {child}
    </div>
  );
};

export default NodePage;
