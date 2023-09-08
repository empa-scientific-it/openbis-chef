import React, { useState, useContext, useEffect } from "react";
import {
  Metagraph,
  walkGraph,
  nodeToOperation,
  MetagraphOperations,
  MetagraphNode,
  CreateOperation,
  LinkOperation,
} from "@src/metagraph/metagraph";
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
import {
  AsynchronousOperationExecutionOptions,
  CreateSamplesOperation,
  EntityTypePermId,
  ExperimentIdentifier,
  SampleCreation,
  SampleFetchOptions,
  SampleSearchCriteria,
  SearchSamplesOperation,
  CreateObjectsOperationResult,
  CreateSamplesOperationResult,
  SearchSamplesOperationResult,
  SynchronousOperationExecutionOptions,
  UpdateObjectsOperation,
  RelationshipUpdate,
  SampleUpdate,
  UpdateSamplesOperation,
} from "@src/openbis/dto";
import { getProjectId, getSpaceId } from "@src/openbis/identifiers";
import {
  CreateSampleTypesOperationResult,
  Sample,
  SamplePermId,
} from "@src/types/openbis";
import { LoggerInterface, useLog } from "../useLog";
import Log from "./Log";
import ObjectGraph from "./ObjectGraph";
import { fetchOptionsToDepth } from "@src/openbis/sampleGraph";

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
  // Keep track of the workflow completion
  const [workflowCompleted, setWorkflowCompleted] = useState(false);
  // Create the context to store the workflow operations an pass it down to the components
  const workflowOps = useOperations([]);
  // Store the start of the workflow
  const [start, setStart] = useState(false);
  // Store the selected workflow
  //Store the sample created by running the workflow
  const [sample, setSample] = useState({} as Sample);

  const logger = useLog();

  const {
    elem: currentNode,
    next,
    previous,
    idx: nodeIndex,
    finished,
    move,
    setList: setNodes,
    list: nodes,
  } = useList([] as MetagraphNode[]);

  function handleLogout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    logout();
  }

  function currentComponent(node: MetagraphNode, currentIndex: number, index: number) {
    return (
      <div key={index} style={{ display: currentIndex === index ? "block" : "none" }}>
        <NodePage key={node.id} node={node} />
      </div>
    );
  }

  const [nodeComponents, setNodeComponents] = useState([] as JSX.Element[]);

  // Run workflow function
  const runWorkflow = async () => {
    // Use userInputs to perform workflow actions
    // Make API calls based on the metagraph and user inputs
    const operations = workflowOps.operations;
    logger.append("Starting workflow");
    // Create a list of promises to be executed
    const promises = operations.map((op) => {
      logger.append(`Adding operation ${op.operationId}`);
      if (op.type === "create") {
        const sampleCreation = new SampleCreation();
        sampleCreation.setTypeId(new EntityTypePermId(op.objectType));
        sampleCreation.setProperties(op.objectProperties);
        const collectionId = new ExperimentIdentifier(op.collectionIdentifier);
        sampleCreation.setExperimentId(collectionId);
        sampleCreation.setProjectId(getProjectId(collectionId));
        sampleCreation.setSpaceId(getSpaceId(collectionId));
        return new CreateSamplesOperation([sampleCreation]);
      } else if (op.type === "link") {
        const sc = new SampleSearchCriteria();
        sc.withIdentifier().thatEquals(op.objectIdentifier);
        const sfo = new SampleFetchOptions();
        const objectSearch = new SearchSamplesOperation(sc, sfo);
        return objectSearch;
      }
    });
    // When the operations are performed, get the ids of the created objects and assign
    // them to the corresponding operations
    const opts = new SynchronousOperationExecutionOptions();
    opts.executeInOrder = true;
    logger.append("Performing object creations");
    const res = await service.executeOperations(promises, opts);
    logger.append("Object creations finished, the operations are:");
    res.results.flatMap((it) => logger.append(it?.message));

    const resultWithOperations = res.results.map((result, index) => {
      return { result: result, operation: operations[index] };
    });

    const operationResults = resultWithOperations.map(({ result, operation }) => {
      if (result instanceof SearchSamplesOperationResult) {
        return {
          operation: operation.operationId,
          objects: result.searchResult
            .getObjects()
            .flatMap((sample: Sample) => sample.permId),
        };
      } else if (result instanceof CreateSamplesOperationResult) {
        return {
          operation: operation.operationId,
          objects: (result as CreateSampleTypesOperationResult).objectIds,
        };
      }
    });
    //Now that we have the pair [operations, created ids], we can create the links by walking the graph
    logger.append("Performing linking");
    const linkOps = walkGraph(currentWorkflow, (node) => {
      //The operation that created the current node
      const currentOp = operationResults.find((op) => op.operation === node.id);
      console.log(node.id);
      const parentIds = node.dependencies.flatMap((dep) => {
        //The dependencies of the current node
        const depOp = operationResults.find((op) => op.operation === dep);
        return depOp?.objects.map((obj) => obj);
      });
      //Create the links
      if (currentOp && parentIds.length > 0) {
        const currentObjectUpdate = new SampleUpdate();
        currentObjectUpdate.sampleId = currentOp.objects[0];
        currentObjectUpdate.parentIds.add(parentIds);
        return new UpdateSamplesOperation([currentObjectUpdate]);
      }
    });
    const linkResult = await service.executeOperations(linkOps, opts);
    linkResult.results.flatMap((it) => logger.append(it?.message));
    const permIds = operationResults.flatMap((result) => {
      return result.objects;
    });
    setWorkflowCompleted(true);
    // Get the created objects
    const fo = fetchOptionsToDepth(5);
    const res1 = await service.getSamples(permIds, fo);
    const sample = Object.values(res1)[0];
    setSample(sample);
  };

  const handleNextStep = () => {
    workflowOps.nextOperation();
    next();
    console.log(finished);
  };

  const handlePreviousStep = () => {
    workflowOps.previousOperation();
    previous();
  };

  const handleSubmit = () => {
    runWorkflow();
  };

  const handleMove = (index: number) => {
    workflowOps.goToOperation(index);
    move(index);
  };

  const handleWorkflowStart = () => {
    if (!currentWorkflow) {
      alert("Please select a workflow");
    } else {
      setStart(() => true);
      logger.reset();
    }
  };

  const handleWorkflowSelection = (wf: Metagraph) => {
    selectWorkflow(wf.name);
    setWorkflowSelected(() => true);
  };

  const handleReset = () => {
    setWorkflowSelected(() => false);
    setStart(() => false);
    setNodes([]);
    setWorkflowSelected(() => false);
    workflowOps.clearOperations();
    setNodeComponents([]);
  };

  //Re-render the components when the workflow changes
  useEffect(() => {
    console.log(currentWorkflow);
    if (currentWorkflow) {
      const operations = walkGraph(currentWorkflow, (node) => {
        return nodeToOperation(node);
      });
      console.log("Operations", workflowOps);
      workflowOps.setOperations(operations);
      workflowOps.goToOperation(0);

      setNodeComponents(() =>
        currentWorkflow.nodes.map((node, index) =>
          currentComponent(node, nodeIndex, index)
        )
      );
    }

    console.log("Operations", workflowOps);
  }, [workflowSelected]);

  //Re-render the components when the node index changes
  useEffect(() => {
    console.log(workflowOps.operations);

    setNodeComponents(() =>
      currentWorkflow.nodes.map((node, index) => currentComponent(node, nodeIndex, index))
    );
  }, [nodeIndex]);

  const OperationInfo = (op: MetagraphOperations) => {
    const CreationInfo = (op: CreateOperation) => {
      return (
        <ul>
          <li>Operation type: {op.type}</li>
          <li>Collection: {op.collectionIdentifier}</li>
          <li>Object type: {op.objectType}</li>
          <li>
            Object properties:{" "}
            <ul>
              {Object.entries(op.objectProperties).map((prop) => (
                <li>{prop}</li>
              ))}
            </ul>
          </li>
        </ul>
      );
    };
    const LinkInfo = (op: LinkOperation) => {
      return (
        <ul>
          <li>Operation type: {op.type}</li>
          <li>Collection: {op.collectionIdentifier}</li>
          <li>selected entity: {op.objectIdentifier}</li>
        </ul>
      );
    };
    return <ul>{op.type === "create" ? CreationInfo(op) : LinkInfo(op)}</ul>;
  };

  const WorkflowEnd = (handleSubmit: () => void, logger: LoggerInterface) => {
    const ops = useContext(OperationContext);
    const entries = logger.logEntries();
    const [submitted, setSubmitted] = useState(false);
    function handleSubmitLocal() {
      setSubmitted(() => true);
      handleSubmit();
    }
    return (
      <div className="operations-summary">
        <div hidden={submitted}>
          <h3 className="container-title">
            Finished workflow, here are the current steps
          </h3>
          <ul>
            {ops.operations.map((op) => (
              <li>{OperationInfo(op)}</li>
            ))}
          </ul>
        </div>

        <button className="clickable-button submit-button" onClick={handleSubmitLocal}>
          Submit
        </button>
        <h3>Log</h3>
        <Log entries={entries} />
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
    handleReset,
    logger,
    finished,
  }: {
    metagraph: Metagraph;
    handleSubmit: () => void;
    elem: JSX.Element[];
    idx: number;
    handleMove: (index: number) => void;
    handlePreviousStep: () => void;
    handleNextStep: () => void;
    handleReset: () => void;
    logger: LoggerInterface;
    finished: boolean;
  }) {
    return (
      <div>
        {finished ? WorkflowEnd(handleSubmit, logger) : elem}
        <Stepper
          handleBack={handlePreviousStep}
          handleNext={handleNextStep}
          handleReset={handleReset}
          handleMove={handleMove}
          currentStep={idx}
          maxSteps={metagraph.nodes.length}
        />
      </div>
    );
  }

  function WorkflowDescription({ metagraph }: { metagraph: Metagraph }) {
    return (
      <div className="workflow-graph">
        {<h3>Workflow summary: {metagraph.name}</h3>}
        <Summary metagraph={metagraph} />
      </div>
    );
  }

  function WorkflowResults({ sample }: { sample: Sample }) {
    return (
      <main>
        <h2>Workflow results:</h2>
        <ObjectGraph sample={sample} maxDepth={3} onNodeClick={() => {}} />
      </main>
    );
  }

  function WorkflowSelection({
    workflows,
    onSelect,
  }: {
    workflows: Metagraph[];
    onSelect: (selectedWorkflow: Metagraph) => void;
  }) {
    const [selected, setSelected] = useState<string>("");
    const handleWorkflowSelect = (workflow: Metagraph) => {
      setSelected(() => workflow.name);
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
    disabled,
  }: {
    metagraph: Metagraph;
    onSelect: (metagraph: Metagraph) => void;
    onStart: (ev: React.MouseEvent<HTMLElement>) => void;
    disabled: boolean;
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
        <button
          className="clickable-button"
          name="Start workflow"
          onClick={onStart}
          disabled={disabled}
        >
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
                onStart={handleWorkflowStart}
                disabled={!workflowSelected}
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
                handleReset={handleReset}
                logger={logger}
                finished={finished}
              />
            ) : workflowCompleted ? (
              WorkflowResults({ sample: {} })
            ) : null}
          </div>
        </div>
      </div>
    </OperationContext.Provider>
  );
};

export default Workflow;
