import { useState } from "react";
import { Metagraph } from "../metagraph";
import WorkflowEditor from "./WorkflowEditor";
import "./Workflow.css";
import "./WorkflowSelection.css";

function WorkflowSelection({
  workflows,
  onSelect,
  handleNewMetagraph,
  currentWofklow,
}: {
  workflows: Metagraph[];
  onSelect: (selectedWorkflow: Metagraph) => void;
  handleNewMetagraph: (mg: Metagraph) => void;
  currentWofklow: Metagraph;
}) {
  const [showNewWorkflow, setShowNewWorkflow] = useState(false);
  const [selected, setSelected] = useState(currentWofklow);

  const handleWorkflowSelect = (workflow: Metagraph) => {
    setSelected(currentWofklow);
    onSelect(workflow);
  };

  const handleNew = (mg: Metagraph) => {

    setShowNewWorkflow((old) => !old);
    handleNewMetagraph(mg);
  };

  const handleEdit = () => {
    setShowNewWorkflow((old) => !old);
  };

  const handleCopy = () => {
    handleNewMetagraph({ ...structuredClone(selected), name: selected.name + ` copy ${Date()}` });
  };

  const handleClose = () => {
    setShowNewWorkflow((old) => !old);
  }

  return (
    <div>
      <h3>Available workflows:</h3>
      <div className="workflow-actions-buttons">
        <button onClick={handleEdit}>Edit workflow</button>
        <button onClick={handleCopy}>Copy</button>
        <button className="workflow-selection-item" onClick={handleNew}>
          Add workflow
        </button>
      </div>
      <table className="workflow-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map((workflow) => (
            <tr
              onClick={() => handleWorkflowSelect(workflow)}
              className={
                "workflow-selection-item" +
                (selected.name === workflow.name
                  ? " workflow-selection-item-selected"
                  : "")
              }
            >
              <td>{workflow.name}</td>
              {/* <td>
                    {workflow.name === selected ? <div className="workflow-selection-item-selected-indicator"></div> : <div className="workflow-selection-item-unselected-indicator"></div>}
                </td> */}
              <td>{workflow.description}</td>
              {/* <button
                  key={workflow.name}
                  id={workflow.name}
                  onClick={() => handleWorkflowSelect(workflow)}

                >
                  {workflow.name}
                </button> */}
            </tr>
          ))}
        </tbody>
      </table>

      <WorkflowEditor
        initialValue={selected}
        handleNewMetagraph={handleNewMetagraph}
        isOpen={showNewWorkflow}
        handleClose={handleClose}
      />
    </div>
  );
}

export default WorkflowSelection;
