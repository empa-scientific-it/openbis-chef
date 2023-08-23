// Component for a LinkNode
import React, {useState} from "react";
import { MetagraphComponentProps, MetagraphNode, MetagraphOperations } from "@src/metagraph/metagraph";
import Entry from "./Entry";
import Select from "./Select";


function selectEntryType(node: MetagraphNode, handler: (event: MetagraphOperations) => void) {
  if (node.type === 'entry') {
    return <Entry key={node.id} node={node}  onFinished={handler}/>;
} else if (node.type === 'select') {
    return <Select key={node.id} node={node} onFinished={handler}/>;
}
// Handle other node types if needed
return null;
}



const NodePage = ({ node, onFinished }:MetagraphComponentProps) => {

  const [localOperation, setLocalOperation] = useState({} as MetagraphOperations)

  const localOnFinished = (event: MetagraphOperations) => {
    // Update userInputs state
    setLocalOperation(event)
  }

  const handleFinish = () => {
    onFinished(localOperation)
  }
  

  const child = selectEntryType(node, localOnFinished)
    // Render input fields and link settings
    return (
      <div>
        <h1>Current step: {node.description}</h1>
        {child}
        <button className='clickable' onClick={handleFinish}>Save</button>
      </div>
    );
  };

export default NodePage;