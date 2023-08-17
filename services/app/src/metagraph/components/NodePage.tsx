// Component for a LinkNode
import React from "react";
import { MetagraphNode } from "@src/metagraph/metagraph";
import Entry from "./Entry";
import Select from "./Select";
import "./Node.css" 


type Props = {
    node: MetagraphNode
  }


function selectEntryType(node: MetagraphNode) {
  if (node.type === 'entry') {
    return <Entry key={node.id} node={node} />;
} else if (node.type === 'select') {
    return <Select key={node.id} node={node} />;
}
// Handle other node types if needed
return null;
}



const NodePage = ({ node }:Props) => {

  const child = selectEntryType(node)
    // Render input fields and link settings
    return (
      <div>
        <div>Current step: {node.description}</div>
        <hr className="node-divider" />
        {child}
      </div>
    );
  };

export default NodePage;