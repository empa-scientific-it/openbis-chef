
import React, { useState, useContext } from 'react';
import Entry from './Entry';
import Select from './Select';
import { Metagraph, walkGraph, MetagraphOperations } from '@src/metagraph/metagraph';
import { AuthContext } from '@src/openbis/AuthContext';
import { useList } from '../useList';
import Summary from './Summary';
import "@src/App.css"
import "./Node.css"
import "./Workflow.css"
import { useWorkflows } from '../useWorkflows';

import NodePage from './NodePage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Me } from '@src/types/openbis';

import { Stepper } from './Stepper';


type Props = {
    workflows: Metagraph[]
}

const Workflow = ({ workflows }: Props) => {
    //Get openbis service
    const { token, setToken, loggedIn, setLoggedIn, login, service } = useContext(AuthContext)
    //Keep list of all available workflows
    const { currentWorkflow, selectWorkflow } = useWorkflows(workflows);
    const [workflowSelected, setWorkflowSelected] = useState(false)

    // Initialize user inputs state based on metagraph nodes
    const nodeComponents = walkGraph(currentWorkflow, (node) => { return <NodePage key={node.id} node={node} />; });
    //Keep track of the position in the workflow
    const { elem, next, previous, idx, finished, move } = useList(nodeComponents)


    
    //Initialise the list of workflowsteps
    const {elem:workflowAction, set:setWorkflowAction} = useList(walkGraph(currentWorkflow, (node) => { return {} as MetagraphOperations }))




    // Run workflow function
    const runWorkflow = () => {
        // Use userInputs to perform workflow actions
        // Make API calls based on the metagraph and user inputs
    };

    const handleNextStep = () => {
        setWorkflowAction( {} as MetagraphOperations, idx)
        next()
    };
    const handlePreviousStep = () => {
        previous()
    };


    const handleSubmit = () => {
        runWorkflow()
    };

    const handleMove = (index: number) => {
        move(index)
    }

    const handleWorkflowSelection = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        ev.preventDefault()
        console.log("handleWorkflowSelection")
        console.log(ev)
        selectWorkflow(ev.target.textContent)
        console.log(currentWorkflow)
        setWorkflowSelected(() => true)
    }



    const [start, setStart] = useState(false);


    const WorkflowEnd = (handleSubmit: () => void) => {
        return (
            <div>
                <hr className="node-divider" />
                <div>Finished workflow, review your steps before submitting</div>
                <button className="clickable" onClick={handleSubmit}>Submit</button>
                <hr className="node-divider" />
            </div>

        )

    }


    function WorkflowPages({ metagraph }: { metagraph: Metagraph }) {
        return (<div>
            <hr className="node-divider" />
            {finished ? WorkflowEnd(handleSubmit) : elem}
            <hr className="node-divider" />
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
                {<h3>Workflow summary</h3>}
                {<h4>{metagraph.name}</h4>}
                <Summary metagraph={metagraph} />
            </div>
        </div>)
    }

    function WorkflowSelection({ workflows, onSelect }: { workflows: Metagraph[], onSelect: (ev: React.MouseEvent<HTMLElement>) => void }) {

        return (
            <div className="workflow-list">
                <h3>Available workflows</h3>
                <ul>
                    {workflows.map((workflow) => <li key={workflow.name} value={workflow.name} onClick={event => onSelect(event)} className={("currentWorkflow.name" == workflow.name) ? "clickable" : "empty"}>{workflow.name}</li>)}
                </ul>
            </div>
        )

    }


    function WorkflowEntry({ metagraph }: { metagraph: Metagraph, onSelect: (ev: React.MouseEvent<HTMLElement>) => void }) {
        return (
            <div>
                <h1>Workflow Selection</h1>
                <div className="container">
                    <div className="one"> <WorkflowSelection workflows={workflows} onSelect={handleWorkflowSelection} /></div>
                    <div className="two"><WorkflowDescription metagraph={currentWorkflow} /></div>
                </div>
                <hr className="node-divider" />
                <button className="clickable" onClick={() => setStart(true)}>Start workflow</button>
            </div>

        )
    }


    //When finished, it should show a summary of the inputs and allow the user to run the workflow

    return (
        <div className='node-container'>

            {(!start) ? <WorkflowEntry metagraph={currentWorkflow} onSelect={handleWorkflowSelection} /> : ((workflowSelected && start) ? <WorkflowPages metagraph={currentWorkflow} /> : null)}

        </div>

    );
};

export default Workflow;