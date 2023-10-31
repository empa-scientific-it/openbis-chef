import React, { useState, useContext, useEffect } from "react";
import { Metagraph, walkGraph, nodeToOperation } from "@src/metagraph/metagraph";
import { AuthContext } from "@src/openbis/AuthContext";
import { useList } from "../useList";
import Summary from "./Summary";
import "@src/App.css";
import "./Workflow.css";
import { useWorkflows } from "../useWorkflows";
import NodePage from "./NodePage";
import { OperationContext } from "../OperationContext";
import { useOperations } from "../useOperations";
import {
  CreateSamplesOperation,
  EntityTypePermId,
  ExperimentIdentifier,
  SampleCreation,
  SampleFetchOptions,
  SampleSearchCriteria,
  SearchSamplesOperation,
  CreateSamplesOperationResult,
  SearchSamplesOperationResult,
  SynchronousOperationExecutionOptions,
  SampleUpdate,
  UpdateSamplesOperation,
} from "@src/openbis/dto";
import { getProjectId, getSpaceId } from "@src/openbis/identifiers";
import { CreateSampleTypesOperationResult, Sample } from "@src/types/openbis";
import { useLog } from "../useLog";
import { fetchOptionsToDepth } from "@src/openbis/sampleGraph";
import WorkflowSelection from "./WorkflowSelection";
import { Navigate } from "react-router-dom";
import WorkflowPages from "./WorkflowPages";
import Popup from "@src/notification/components/Popup";

type Props = {
  workflows: Metagraph[];
};

const Workflow = ({ workflows }: Props) => {
  // Get openbis service
  const { logout, service } = useContext(AuthContext);
  // Keep list of all available workflows
  const {
    currentWorkflow,
    setCurrentWorkflow,
    addOrReplaceWorkflow,
    workflows: allWorkflows,
    currentWorkflowContext,
  } = useWorkflows(workflows);
  // Keep track of the workflow selected
  const [workflowSelected, setWorkflowSelected] = useState(false);
  // Keep track of the workflow completion
  // const [workflowCompleted, setWorkflowCompleted] = useState(false);
  const [completedEntries, setCompletedEntries] = useState(new Set() as Set<string>);
  // const [entryFinished, setEntryFinished] = useState(false);
  // Create the context to store the workflow operations and pass it down to the components
  const workflowOps = useOperations([]);
  // Store the start of the workflow
  const [start, setStart] = useState(false);
  // Store the sample created by running the workflow
  const [sample, setSample] = useState<Sample[] | null>(null as Sample[]);
  const logger = useLog();

  function handleLogout(event: React.FormEvent<MouseEvent>) {
    event.preventDefault();
    logout().then(() => {
      console.log("logged out");
      <Navigate
        to="/login"
        replace // <-- redirect
        state={{ path: location.pathname }}
      />;
    });
  }

  function activateComponent(graph: Metagraph) {
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
    list: nodeList,
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
    // setWorkflowCompleted(() => true);
    // Get the created objects
    const bo = new SampleFetchOptions();
    bo.withProperties();
    const fo = fetchOptionsToDepth(5, bo);
    const res1 = await service.getSamples(permIds, fo);
    const sample = Object.values(res1);
    setSample(sample);
  };

  const handleNextStep = () => {
    workflowOps.nextOperation();
    setCompletedEntries((prev) => prev.add(nodeIndex.toString()));
  };

  const handlePreviousStep = () => {
    workflowOps.previousOperation();
  };

  const handleSubmit = () => {
    runWorkflow();
    // setEntryFinished(() => true);
  };

  const handleMove = (index: number) => {
    workflowOps.goToOperation(index);
    setCompletedEntries((prev) => prev.add(nodeIndex.toString()));
  };

  useEffect(() => {
    if (completedEntries.size === currentWorkflow.nodes.length) {
      // setEntryFinished(() => true);
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
    setCurrentWorkflow(wf);
    setWorkflowSelected(() => true);
  };

  const handleReset = () => {
    setStart(() => false);
    setWorkflowSelected(() => false);
    workflowOps.clearOperations();
    setNodeComponents([]);
    // setWorkflowCompleted(() => false);
    // setEntryFinished(() => false);
  };

  const handleNewMetagraph = (mg: Metagraph) => {
    addOrReplaceWorkflow(mg);
  };

  //Re-render the components when the workflow changes
  useEffect(() => {
    if (currentWorkflow) {
      const operations = walkGraph(currentWorkflow, (node) => {
        return nodeToOperation(node);
      });
      workflowOps.setOperations(operations);
      setNodeComponents(activateComponent(currentWorkflow));
    }
  }, [workflowSelected]);

  // Contains the graph representation of the selected workflow
  function WorkflowDescription({ metagraph }: { metagraph: Metagraph }) {
    return (
      <>
        <h3>Workflow summary: {metagraph.name}</h3>
        <div className="workflow-graph">
          <Summary metagraph={metagraph} />
        </div>
      </>
    );
  }

  // Shows the list of available workflows, along with each one's graph of the side
  function WorkflowEntry({
    metagraph,
    onSelect,
    onStart,
    disabled,
    onNewWorkflow,
  }: {
    metagraph: Metagraph;
    onSelect: (metagraph: Metagraph) => void;
    onStart: (ev: React.MouseEvent<HTMLElement>) => void;
    onNewWorkflow: (metagraph: Metagraph) => void;
    disabled: boolean;
  }) {
    return (
      <div>
        <h1 className="container-title">Workflow Selection</h1>
        <div className="workflow-selection-container">
          <div className="workflow-selection-container-one">
            <currentWorkflowContext.Provider value={metagraph}>
              <WorkflowSelection
                workflows={allWorkflows}
                onSelect={onSelect}
                handleNewMetagraph={onNewWorkflow}
                context={currentWorkflowContext}
              />
            </currentWorkflowContext.Provider>
          </div>
          <div className="workflow-selection-container-two">
            {metagraph !== null && <WorkflowDescription metagraph={metagraph} />}
          </div>
        </div>
        <div className="workflow-footer-buttons">
          <button
            className="clickable-button"
            name="Start workflow"
            onClick={onStart}
            disabled={disabled}
          >
            Start Workflow
          </button>
        </div>
      </div>
    );
  }

  return (
    <OperationContext.Provider value={workflowOps}>
      <div className="App">
        <div className="app-container">
          <button className="logout-button" name="Logout" onClick={handleLogout}>
            Logout
          </button>

          <div className="workflow-container">
            {!start ? (
              <WorkflowEntry
                metagraph={currentWorkflow}
                onSelect={handleWorkflowSelection}
                onStart={handleWorkflowStart}
                disabled={!workflowSelected}
                onNewWorkflow={handleNewMetagraph}
              />
            ) : workflowSelected && start ? (
              <WorkflowPages
                handleMove={handleMove}
                handleSubmit={handleSubmit}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                handleReset={handleReset}
                children={nodeList}
                logger={logger}
                hierarchyRoot={sample ? sample[0] : null}
              />
            ) : null}
          </div>
        </div>
        <Popup timeout={2000} />
      </div>

    </OperationContext.Provider>
  );
};

export default Workflow;
