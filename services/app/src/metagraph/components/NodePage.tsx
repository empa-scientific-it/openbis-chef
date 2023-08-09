// Component for a LinkNode
import React from "react";
import { MetagraphNode } from "@src/metagraph/metagraph";
import "./Node.css" 


type Props = {
    node: MetagraphNode
  }

const NodePage = ({ node }:Props) => {
    // Render input fields and link settings
    return (
      <div>
        <h1>Workflow Step</h1>
        <hr className="node-divider" />
        <div>{node.description}</div>
      </div>
    );
  };

export default NodePage;