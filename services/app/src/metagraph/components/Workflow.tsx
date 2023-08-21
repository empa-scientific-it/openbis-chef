
import React, { useState, useContext, useEffect } from 'react';
import Entry from './Entry';
import Select from './Select';
import { Metagraph, walkGraph, MetagraphOperations, nodeToOperation } from '@src/metagraph/metagraph';
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
import { OperationContext } from '../OperationContext';


type Props = {
    workflows: Metagraph[]
}

const Workflow = ({ workflows }: Props) => {
    //Get openbis service
    const { token, setToken, loggedIn, setLoggedIn, login, service } = useContext(AuthContext)
    //Keep list of all available workflows
    const { currentWorkflow, selectWorkflow } = useWorkflows(workflows);
    const [workflowSelected, setWorkflowSelected] = useState(false)
    //Create the context to store the metagraph operations an pass it down to the components
    const workflowOps = useContext(OperationContext)






    // Initialize user inputs state based on metagraph nodes
    const initialNodeComponents = walkGraph(currentWorkflow, (node) => { return <NodePage key={node.id} node={node} />; });
    //Keep track of the position in the workflow
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
        move(index)
    }

    const handleWorkflowSelection = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Called")
        ev.preventDefault()
        workflowOps.clearOperations();
        const ops = walkGraph(currentWorkflow, (node) => node);
        ops.map((node, index) => nodeToOperation(node, service).then((op) => {
            workflowOps.addOperation(op);
            console.log(workflowOps.operations)
        }))
        setWorkflowSelected(() => true);
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


    function WorkflowPages({ metagraph, handleSubmit, elem }: { metagraph: Metagraph, handleSubmit: () => void, elem: JSX.Element }) {
        return (<div>
            <hr className="node-divider" />
            {finished ? WorkflowEnd(handleSubmit) : elem}
            <hr className="node-divider" />
            <Stepper handleBack={handlePreviousStep} handleNext={handleNextStep} handleReset={() => { }} handleMove={handleMove} currentStep={idx} maxSteps={metagraph.nodes.length} />
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


    function WorkflowEntry({ metagraph, onSelect }: { metagraph: Metagraph, onSelect: (ev: React.MouseEvent<HTMLElement>) => void }) {
        return (
            <div>
                <h1>Workflow Selection</h1>
                <div className="container">
                    <div className="one"> <WorkflowSelection workflows={workflows} onSelect={onSelect} /></div>
                    <div className="two"><WorkflowDescription metagraph={metagraph} /></div>
                </div>
                <hr className="node-divider" />
                <button className="clickable" onClick={() => setStart(true)}>Start workflow</button>
            </div>

        )
    }


    //When finished, it should show a summary of the inputs and allow the user to run the workflow

    return (
        <div className='node-container'>
            {(!start) ? <WorkflowEntry metagraph={currentWorkflow} onSelect={handleWorkflowSelection} /> : ((workflowSelected && start) ? <WorkflowPages elem={elem} metagraph={currentWorkflow} handleSubmit={handleSubmit} /> : null)}
        </div>

    );
};

export default Workflow;