
import React, { useState, useContext } from 'react';
import { Metagraph, walkGraph, MetagraphOperations } from '@src/metagraph/metagraph';
import { AuthContext } from '@src/openbis/AuthContext';
import { useList } from '../useList';
import Summary from './Summary';
import "@src/App.css"
import "./Workflow.css"
import { useWorkflows } from '../useWorkflows';
import NodePage from './NodePage';
import { Stepper } from './Stepper';

type Props = {
    workflows: Metagraph[]
}

const Workflow = ({ workflows }: Props) => {
    //Get openbis service
    const { logout } = useContext(AuthContext)
    //Keep list of all available workflows
    const { currentWorkflow, selectWorkflow } = useWorkflows(workflows);
    const [workflowSelected, setWorkflowSelected] = useState(false)

    function handleLogout(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        logout()

    }

    //Initialise the list of workflowsteps
    const { elem: workflowAction, set: setWorkflowAction, idx: workflowStepIndex, list: workflowSteps } = useList(walkGraph(currentWorkflow, (node) => { return {} as MetagraphOperations }))

    const handleWorkflowStep = (event: MetagraphOperations) => {
        // Move to next step
        next()
        // Update userInputs state
        console.log(event, idx)
        setWorkflowAction(event, idx)
        console.log(event, workflowSteps)
    };

    // Initialize user inputs state based on metagraph nodes
    const initialNodeComponents = walkGraph(currentWorkflow, (node) => { return <NodePage key={node.id} node={node} onFinished={handleWorkflowStep} />; });
    // Keep track of the position in the workflow
    const { elem, next, previous, idx, finished, move, set, list: nodeComponents } = useList(initialNodeComponents)

    // Run workflow function
    const runWorkflow = () => {
        // Use userInputs to perform workflow actions
        // Make API calls based on the metagraph and user inputs
    };

    const handleNextStep = () => {
        next()
    };

    const handlePreviousStep = () => {
        previous()
    };

    const handleSubmit = () => {
        runWorkflow()
    };

    const handleMove = (index: number) => {
        setWorkflowAction({} as MetagraphOperations, index)
        move(index)
    }

    const [selected, setSelected] = useState('');

    const handleWorkflowSelection = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        ev.preventDefault()
        console.log("handleWorkflowSelection")
        console.log(ev)
        console.log(ev.target.id);
        setSelected(ev.target.id);
        selectWorkflow(ev.target.textContent)
        console.log(currentWorkflow)
        setWorkflowSelected(() => true)
    }

    const [start, setStart] = useState(false);

    const WorkflowEnd = (handleSubmit: () => void) => {
        return (
            <div>
                <div>Finished workflow, review your steps before submitting</div>
                <button className="clickable" onClick={handleSubmit}>Submit</button>
            </div>
        )
    }

    function WorkflowPages({ metagraph, handleSubmit, elem }: { metagraph: Metagraph, handleSubmit: () => void, elem: JSX.Element }) {
        return (<div>
            {finished ? WorkflowEnd(handleSubmit) : elem}
            <Stepper handleBack={handlePreviousStep} handleNext={handleNextStep} handleReset={() => { }} handleMove={handleMove} currentStep={idx} maxSteps={metagraph.nodes.length} />
            {/* {idx > 0 ? <button className="clickable" onClick={handlePreviousStep}>Previous step</button> : null}
            {!finished ? <button className="clickable" onClick={handleNextStep}>Next step</button> : <button className="clickable" onClick={handleSubmit}>Submit</button>}
            <div>Step {idx + 1} of {metagraph.nodes.length}</div>
            <button className="clickable" onClick={() => setStart(false)}>Restart</button>
            <div>{metagraph.nodes.map((nd, index) => <FontAwesomeIcon icon={(index > idx) ? "fa-regular fa-circle" : "fa-solid fa-circle"} onClick={handleMove(index)} />)}</div> */}
        </div>)
    }

    function WorkflowDescription({ metagraph }: { metagraph: Metagraph }) {
        return (<div>
            <div className="workflow-list">
                {<h3>Workflow summary: {metagraph.name}</h3>}
                <Summary metagraph={metagraph} />
            </div>
        </div>)
    }

    function WorkflowSelection({ workflows, onSelect }: { workflows: Metagraph[], onSelect: (ev: React.MouseEvent<HTMLElement>) => void }) {
        return (
            <div>
                <h2>Available workflows:</h2>
                {
                    workflows.map((workflow) =>
                        <div
                            className={"workflow-selection-item" + (selected === workflow.name ? " workflow-selection-item-selected" : "")}
                            key={workflow.name}
                            id={workflow.name}
                            onClick={event => {onSelect(event)}}
                        >
                            {workflow.name}
                        </div>
                    )
                }
            </div>
        )
    }

    function WorkflowEntry({ metagraph }: { metagraph: Metagraph, onSelect: (ev: React.MouseEvent<HTMLElement>) => void }) {
        return (
            <div>
                <h1 className="container-title">Workflow Selection</h1>
                <div className="workflow-selection-container">
                    <div className="workflow-selection-container-one">
                        <WorkflowSelection workflows={workflows} onSelect={handleWorkflowSelection} />
                    </div>
                    <div className="workflow-selection-container-two">
                        <WorkflowDescription metagraph={metagraph} />
                    </div>
                </div>
                <button className="clickable-button" name="Start workflow" onClick={() => setStart(true)}>Start workflow</button>
            </div>
        )
    }

    // When finished, it should show a summary of the inputs and allow the user to run the workflow
    return (
        <div className="App">        
            <div className="app-container">
                <button className="logout-button" name="Logout" onSubmit={() => handleLogout}>Logout</button>

                <div className="workflow-container">
                    {
                        !start ? 
                            <WorkflowEntry metagraph={currentWorkflow} onSelect={handleWorkflowSelection} /> 
                        : (
                            (workflowSelected && start) ? 
                                <WorkflowPages elem={elem} metagraph={currentWorkflow} handleSubmit={handleSubmit} />
                            : null
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Workflow;
