import React, { useState, useContext } from "react";
import { Metagraph, walkGraph, nodeToOperation } from "@src/metagraph/metagraph";
import { AuthContext } from "@src/openbis/AuthContext";
import { useList } from "../useList";
import Summary from "./Summary";
import "@src/App.css";
import "./Workflow.css";
import { useWorkflows } from "../useWorkflows";
import NodePage from "./NodePage";
import { Stepper } from "./Stepper";
import { OperationContext } from "../OperationContext";
import { useOperations } from "../useOperations";

type Props = {
  workflows: Metagraph[];
};

const Workflow = ({ workflows }: Props) => {
  // Get openbis service
  const { logout, service } = useContext(AuthContext);
  // Keep list of all available workflows
  const { currentWorkflow, selectWorkflow } = useWorkflows(workflows);
  // Keep track of the workflow selected
  const [workflowSelected, setWorkflowSelected] = useState(false);
  // Create the context to store the workflow operations an pass it down to the components
  const workflowOps = useOperations([]);
  // Store the start of the workflow
  const [start, setStart] = useState(false);
  // Store the selected workflow
  const [selected, setSelected] = useState("");

  const {
    elem: currentNode,
    next,
    previous,
    idx: nodeIndex,
    finished,
    move,
    set,
    list: nodes,
  } = useList(walkGraph(currentWorkflow, (node) => node));

  function handleLogout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    logout();
  }

  // Initialise one component for each graph node
  const nodeComponents = nodes.map((node, index) => (
    <div key={index} style={{ display: nodeIndex === index ? "block" : "none" }}>
      <NodePage key={node.id} node={node} />{" "}
    </div>
  ));

  // Run workflow function
  const runWorkflow = () => {
    // Use userInputs to perform workflow actions
    // Make API calls based on the metagraph and user inputs
  };

  const handleNextStep = () => {
    next();
    workflowOps.nextOperation();
  };

  const handlePreviousStep = () => {
    previous();
    workflowOps.previousOperation();
  };

  const handleSubmit = () => {
    runWorkflow();
  };

  const handleMove = (index: number) => {
    move(index);
    workflowOps.goToOperation(index);
  };

  const handleWorkflowSelection = (wf: Metagraph) => {
    setSelected(wf.name);
    selectWorkflow(wf.name);
    setWorkflowSelected(() => true);
    workflowOps.clearOperations();
    walkGraph(currentWorkflow, (node) =>
      nodeToOperation(node, service).then((op) => workflowOps.addOperation(op))
    );
    console.log(workflowOps.operations);
  };

  const WorkflowEnd = (handleSubmit: () => void) => {
    return (
      <div>
        <div>Finished workflow, review your steps before submitting</div>
        <button className="clickable" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  };

  function WorkflowPages({
    metagraph,
    handleSubmit,
    elem,
    idx,
    handleMove,
    handlePreviousStep,
    handleNextStep,
  }: {
    metagraph: Metagraph;
    handleSubmit: () => void;
    elem: JSX.Element[];
    idx: number;
    handleMove: (index: number) => void;
    handlePreviousStep: () => void;
    handleNextStep: () => void;
  }) {
    return (
      <div>
        {finished ? WorkflowEnd(handleSubmit) : elem}
        <Stepper
          handleBack={handlePreviousStep}
          handleNext={handleNextStep}
          handleReset={() => {}}
          handleMove={handleMove}
          currentStep={idx}
          maxSteps={metagraph.nodes.length}
        />
      </div>
    );
  }

  function WorkflowDescription({ metagraph }: { metagraph: Metagraph }) {
    return (
      <div className="workflow-list">
        {<h3>Workflow summary: {metagraph.name}</h3>}
        <Summary metagraph={metagraph} />
      </div>
    );
  }

  function WorkflowSelection({
    workflows,
    onSelect,
  }: {
    workflows: Metagraph[];
    onSelect: (selectedWorkflow: Metagraph) => void;
  }) {
    const [selectedWorkflow, setSelectedWorkflow] = useState<Metagraph | null>(null);

    const handleWorkflowSelect = (workflow: Metagraph) => {
      setSelectedWorkflow(workflow);
      onSelect(workflow);
    };

    return (
      <div>
        <h2>Available workflows:</h2>
        {workflows.map((workflow) => (
          <div
            key={workflow.name}
            id={workflow.name}
            onClick={() => handleWorkflowSelect(workflow)}
            className={
              "workflow-selection-item" +
              (selected === workflow.name ? " workflow-selection-item-selected" : "")
            }
          >
            {workflow.name}
          </div>
        ))}
      </div>
    );
  }

  function WorkflowEntry({
    metagraph,
    onSelect,
    onStart,
  }: {
    metagraph: Metagraph;
    onSelect: (metagraph: Metagraph) => void;
    onStart: (ev: React.MouseEvent<HTMLElement>) => void;
  }) {
    return (
      <div>
        <h1 className="container-title">Workflow Selection</h1>
        <div className="workflow-selection-container">
          <div className="workflow-selection-container-one">
            <WorkflowSelection workflows={workflows} onSelect={onSelect} />
          </div>
          <div className="workflow-selection-container-two">
            <WorkflowDescription metagraph={metagraph} />
          </div>
        </div>
        <button className="clickable-button" name="Start workflow" onClick={onStart}>
          Start workflow
        </button>
      </div>
    );
  }

  // When finished, it should show a summary of the inputs and allow the user to run the workflow
  return (
    <OperationContext.Provider value={workflowOps}>
      <div className="App">
        <div className="app-container">
          <button className="logout-button" name="Logout" onSubmit={() => handleLogout}>
            Logout
          </button>

          <div className="workflow-container">
            {!start ? (
              <WorkflowEntry
                metagraph={currentWorkflow}
                onSelect={handleWorkflowSelection}
                onStart={(ev: React.MouseEvent<HTMLElement>) => setStart(() => true)}
              />
            ) : workflowSelected && start ? (
                <WorkflowPages
                elem={nodeComponents}
                idx={nodeIndex}
                handleMove={handleMove}
                metagraph={currentWorkflow}
                handleSubmit={handleSubmit}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            
            ) : null}
          </div>
        </div>
      </div>
    </OperationContext.Provider>
  );
};

export default Workflow;
