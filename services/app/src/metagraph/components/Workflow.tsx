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
  const [completedEntries, setCompletedEntries] = useState(new Set() as Set<string>);
  const [entryFinished, setEntryFinished] = useState(false);
  // Create the context to store the workflow operations an pass it down to the components
  const workflowOps = useOperations([]);
  // Store the start of the workflow
  const [start, setStart] = useState(false);
  // Store the selected workflow
  const [selected, setSelected] = useState<string>("");
  // Store the sample created by running the workflow
  const [sample, setSample] = useState<Sample[] | null>(null as Sample[]);

  const logger = useLog();

  function handleLogout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    logout();
  }

  function activateComponent(graph: Metagraph, currentIndex: number) {
    return graph.nodes.map((node, index) => {
      return (
        <div key={index}>
          <NodePage key={node.id} node={node} />
        </div>
      );
    });
  }

  const {
    elem: nodeComponents,
    next,
    previous,
    idx: nodeIndex,
    finished,
    move,
    setList: setNodeComponents,
  } = useList([] as JSX.Element[]);

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
      const parentIds = node.dependencies.flatMap((dep) => {
        //The dependencies of the current node
        const depOp = operationResults.find((op) => op.operation === dep);
        return depOp?.objects.map((obj) => obj);
      });
      console.log("Current operation", currentOp, "Parent ids", parentIds);
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
    setWorkflowCompleted(() => true);
    // Get the created objects
    const bo = new SampleFetchOptions()
    bo.withProperties()
    const fo = fetchOptionsToDepth(5, bo);
    const res1 = await service.getSamples(permIds, fo);
    const sample = Object.values(res1);
    setSample(sample);
  };

  const handleNextStep = () => {
    workflowOps.nextOperation();
    next();
    console.log(nodeIndex);
    setCompletedEntries((prev) => prev.add(nodeIndex.toString()));
  };

  const handlePreviousStep = () => {
    workflowOps.previousOperation();
    previous();
  };

  const handleSubmit = () => {
    runWorkflow();
    setEntryFinished(() => true);
  };

  const handleMove = (index: number) => {
    workflowOps.goToOperation(index);
    move(index);
    setCompletedEntries((prev) => prev.add(nodeIndex.toString()));
  };

  useEffect(() => {
    if (completedEntries.size === currentWorkflow.nodes.length) {
      setEntryFinished(() => true);
    }
  }, [completedEntries]);

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
    setSelected(wf.name);
    setWorkflowSelected(() => true);
  };

  const handleReset = () => {
    setStart(() => false);
    setWorkflowSelected(() => false);
    setSelected("");
    workflowOps.clearOperations();
    setNodeComponents([]);
    setWorkflowCompleted(() => false);
    setEntryFinished(() => false);
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
      setNodeComponents(activateComponent(currentWorkflow, nodeIndex));
    }

    console.log("Operations", workflowOps);
  }, [workflowSelected]);

  const OperationInfo = (op: MetagraphOperations) => {
    const CreationInfo = (op: CreateOperation) => {
      return (
        <ul>
          <li><u>Operation type:</u> {op.type}</li>
          <li><u>Collection:</u> {op.collectionIdentifier}</li>
          <li><u>Object type:</u> {op.objectType}</li>
          <li>
            <u>Object properties:</u>
            <ul>
              {Object.entries(op.objectProperties).map((prop, index) => (
                <li key={index}>{prop}</li>
              ))}
            </ul>
          </li>
        </ul>
      );
    };

    const LinkInfo = (op: LinkOperation) => {
      return (
        <ul>
          <li><u>Operation type:</u> {op.type}</li>
          <li><u>Collection:</u> {op.collectionIdentifier}</li>
          <li><u>Selected entity:</u> {op.objectIdentifier}</li>
        </ul>
      );
    };
  
    return <>{op.type === "create" ? CreationInfo(op) : LinkInfo(op)}</>;
  };

  const WorkflowEnd = (handleSubmit: () => void, logger: LoggerInterface) => {
    const ops = useContext(OperationContext);
    const entries = logger.logEntries();
    return (
      <>
        <h1 className="container-title">Finished workflow </h1>
        <main>
          <h3>Here are the operations that will be performed:</h3>
          <div>
            {ops.operations.map((op) => (
              <div className="operations-list" key={op.operationId}>{OperationInfo(op)}</div>
            ))}
          </div>
          <div className="operations-log">
            <h3>OpenBIS log:</h3>
            <Log entries={entries} />
          </div>

          {entryFinished && sample ? (
            <WorkflowResults sample={sample} handleReset={handleReset} />
          ) : null}
        </main>
      </>
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
    elem: JSX.Element[];
    idx: number;
    handleMove: (index: number) => void;
    handlePreviousStep: () => void;
    handleNextStep: () => void;
    handleReset: () => void;
    handleSubmit: () => void;
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
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }

  function WorkflowDescription({ metagraph }: { metagraph: Metagraph }) {
    return (
      <>
        {<h3>Workflow summary: {metagraph.name}</h3>}
        <div className="workflow-graph">
          <Summary metagraph={metagraph} />
        </div>
      </>
    );
  }

  function WorkflowResults({
    sample,
    handleReset,
  }: {
    sample: Sample;
    handleReset: () => void;
  }) {
    return (
      <div className="workflow-graph-container">
        <h2>Workflow results:</h2>
        {sample ? (
          <ObjectGraph samples={sample} maxDepth={3} onNodeClick={() => {}} />
        ) : null}
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
    const handleWorkflowSelect = (workflow: Metagraph) => {
      setSelected(workflow.name);
      onSelect(workflow);
    };

    const [showNewWorkflow, setShowNewWorkflow] = useState(false);

    return (
      <div>
        <h3>Available workflows:</h3>
        {workflows.map((workflow) => (
          <button
            key={workflow.name}
            id={workflow.name}
            onClick={() => handleWorkflowSelect(workflow)}
            className={
              "workflow-selection-item" +
              (selected === workflow.name ? " workflow-selection-item-selected" : "")
            }
          >
            {workflow.name}
          </button>
        ))}
        <button
          className="workflow-selection-item"
          onClick={(event)=>setShowNewWorkflow(() => true)}
        >
          Add workflow
        </button>
      </div>
    );
  }


  function WorkflowCreation(){
    return (
      <div>
        <h3>Workflow creation</h3>
      </div>
    )
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
            ) : null}
          </div>
        </div>
      </div>
    </OperationContext.Provider>
  );
};

export default Workflow;
