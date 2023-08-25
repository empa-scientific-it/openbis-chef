import React, { useState, useContext, useEffect } from "react";
import Entry from "./Entry";
import Select from "./Select";
import {
  Metagraph,
  walkGraph,
  MetagraphOperations,
  nodeToOperation,
} from "@src/metagraph/metagraph";
import { AuthContext } from "@src/openbis/AuthContext";
import { useList } from "../useList";
import Summary from "./Summary";
import "@src/App.css";
import "./Node.css";
import "./Workflow.css";
import { useWorkflows } from "../useWorkflows";

import NodePage from "./NodePage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Me } from "@src/types/openbis";

import { Stepper } from "./Stepper";
import { OperationContext } from "../OperationContext";
import { useOperations } from "../useOperations";

type Props = {
  workflows: Metagraph[];
};

const Workflow = ({ workflows }: Props) => {
  //Get openbis service
  const { token, setToken, loggedIn, setLoggedIn, login, service } =
    useContext(AuthContext);
  //Keep list of all available workflows
  const { currentWorkflow, selectWorkflow } = useWorkflows(workflows);
  //Keep track of the workflow selected
  const [workflowSelected, setWorkflowSelected] = useState(false);
  //Create the context to store the workflow operations an pass it down to the components
  const workflowOps = useOperations([]);

  //Store the start of the workflow
  const [start, setStart] = useState(false);

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

  // Initialise one component for each graph node
  const nodeComponents = nodes.map((node, index) => (
    <div
      key={index}
      style={{ display: nodeIndex === index ? "block" : "none" }}
    >
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
    selectWorkflow(wf.name);
    setWorkflowSelected(() => true);
    workflowOps.clearOperations();
    walkGraph(currentWorkflow, (node) =>
      nodeToOperation(node, service).then((op) => workflowOps.addOperation(op)),
    );
    console.log(workflowOps.operations);
  };

  const WorkflowEnd = (handleSubmit: () => void) => {
    return (
      <div>
        <hr className="node-divider" />
        <div>Finished workflow, review your steps before submitting</div>
        <button className="clickable" onClick={handleSubmit}>
          Submit
        </button>
        <hr className="node-divider" />
      </div>
    );
  };

  function WorkflowPages({
    metagraph,
    handleSubmit,
    elem,
    idx,
    handleMove,
  }: {
    metagraph: Metagraph;
    handleSubmit: () => void;
    elem: JSX.Element;
    idx: number;
    handleMove: (index: number) => void;
  }) {
    return (
      <div>
        <hr className="node-divider" />
        {finished ? WorkflowEnd(handleSubmit) : elem}
        <hr className="node-divider" />
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
      <div>
        <div className="workflow-list">
          {<h3>Workflow summary</h3>}
          {<h4>{metagraph.name}</h4>}
          <Summary metagraph={metagraph} />
        </div>
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
    const [selectedWorkflow, setSelectedWorkflow] = useState<Metagraph | null>(
      null,
    );

    const handleWorkflowSelect = (workflow: Metagraph) => {
      setSelectedWorkflow(workflow);
      onSelect(workflow);
    };

    return (
      <div className="workflow-list">
        <h3>Available workflows</h3>
        <ul>
          {workflows.map((workflow) => (
            <li
              key={workflow.name}
              value={workflow.name}
              onClick={() => handleWorkflowSelect(workflow)}
              className={
                selectedWorkflow?.name === workflow.name ? "clickable" : "empty"
              }
            >
              {workflow.name}
            </li>
          ))}
        </ul>
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
      <section>
        <header>
          <h1>Workflow Selection</h1>
        </header>
        <main>
          <div className="container">
            <div className="one">
              <WorkflowSelection workflows={workflows} onSelect={onSelect} />
            </div>
            <div className="two">
              <WorkflowDescription metagraph={metagraph} />
            </div>
          </div>
        </main>
        <hr className="node-divider" />
        <button className="clickable" onClick={onStart}>
          Start workflow
        </button>
      </section>
    );
  }

  //When finished, it should show a summary of the inputs and allow the user to run the workflow

  return (
    <OperationContext.Provider value={workflowOps}>
      <div className="node-container">
        {!start ? (
          <WorkflowEntry
            metagraph={currentWorkflow}
            onSelect={handleWorkflowSelection}
            onStart={(ev: React.MouseEvent<HTMLElement>) =>
              setStart(() => true)
            }
          />
        ) : workflowSelected && start ? (
          <WorkflowPages
            elem={nodeComponents}
            idx={nodeIndex}
            handleMove={handleMove}
            metagraph={currentWorkflow}
            handleSubmit={handleSubmit}
          />
        ) : null}
      </div>
    </OperationContext.Provider>
  );
};

export default Workflow;
