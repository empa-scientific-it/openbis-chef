import { useState, useContext } from "react";
import { Metagraph } from "../metagraph";
import WorkflowEditor from "./WorkflowEditor";
import "./Workflow.css";
import "./WorkflowSelection.css";

function WorkflowSelection({
  workflows,
  onSelect,
  handleNewMetagraph,
  context
}: {
  workflows: Metagraph[];
  onSelect: (selectedWorkflow: Metagraph) => void;
  handleNewMetagraph: (mg: Metagraph) => void;
  context: React.Context<Metagraph>;
}) { 
  const [showWorkflowEditor, setShowWorkflowEditor] = useState(false);
  const currentWorkflow = useContext(context);
  const [workflowToEdit, setworkflowToEdit] = useState(currentWorkflow);

  const handleNew = () => {
    handleNewMetagraph(new Metagraph([], "This is a new workflow", "New workflow" + ` ${Date()}`));
  };

  const handleCopy = (mg: Metagraph) => {
    handleNewMetagraph({ ...structuredClone(mg), name: mg.name + ` copy ${Date()}` });
  };

  const toggleWorkflowEditor = (mg?: Metagraph) => {
    if (mg) {
      setworkflowToEdit(mg);
    }
    setShowWorkflowEditor(prev => !prev);
  };

  return (
    <>
      <div className="available-worflows-header">
        <h3 className="available-worflows-title">
          Available workflows:
        </h3>
        <button className="workflow-selection-item" style={{fontSize: "medium"}} onClick={handleNew}>
          Add workflow
        </button>
      </div>

      <table className="workflow-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map((workflow, index) => (
            <tr key={index} className={(currentWorkflow.name === workflow.name ? "clicked-table-attr" : "")}>
              <td
                className="clickable-table-attr"
                onClick={() => onSelect(workflow)}
              >
                {workflow.name}
              </td>
              <td
                className="clickable-table-attr"
                onClick={() => onSelect(workflow)}
              >
                {workflow.description}
              </td>
              <td>
                <button className="workflow-selection-item" onClick={() => toggleWorkflowEditor(workflow)}>Edit</button>
                <button className="workflow-selection-item" onClick={() => handleCopy(workflow)}>Copy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <WorkflowEditor
        initialValue={workflowToEdit}
        handleNewMetagraph={handleNewMetagraph}
        isOpen={showWorkflowEditor}
        handleClose={toggleWorkflowEditor}
      />
    </>
  );
}

export default WorkflowSelection;
