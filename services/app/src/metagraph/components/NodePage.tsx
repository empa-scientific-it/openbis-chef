// Component for a LinkNode
import React, {useState} from "react";
import { MetagraphComponentProps, MetagraphNode, MetagraphOperations } from "@src/metagraph/metagraph";
import Entry from "./Entry";
import Select from "./Select";
import "./Node.css" 




function selectEntryType(node: MetagraphNode) {
  if (node.type === 'entry') {
    return <Entry key={node.id} node={node}/>;
} else if (node.type === 'select') {
    return <Select key={node.id} node={node}/>;
}
// Handle other node types if needed
return null;
}



const NodePage = ({ node }:MetagraphComponentProps) => {

  const [localOperation, setLocalOperation] = useState({} as MetagraphOperations)

  const localOnFinished = (event: MetagraphOperations) => {
    // Update userInputs state
    setLocalOperation(event)
  }

  const handleFinish = () => {

  }

  const child = selectEntryType(node)
    // Render input fields and link settings
    return (
      <div>
        <h1>Current step: {node.description}</h1>
        <hr className="node-divider" />
        {child}
        <button className='clickable' onClick={handleFinish}>Save</button>
      </div>
    );
  };

export default NodePage;