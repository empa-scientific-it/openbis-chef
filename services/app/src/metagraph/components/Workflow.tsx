
import React, { useState, useContext } from 'react';
import Entry from './Entry';
import Select from './Select';
import { Metagraph, walkGraph } from '@src/metagraph/metagraph';
import { AuthContext } from '@src/openbis/AuthContext';
import { useList } from '../useList';
import Summary from './Summary';
import "./Node.css"
import NodePage from './NodePage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    metagraph: Metagraph
}

const Workflow = ({ metagraph }: Props) => {
    //Get openbis service
    const { token, setToken, loggedIn, setLoggedIn, login, service } = useContext(AuthContext)
    // Initialize user inputs state based on metagraph nodes


    // Construct components for each node type
    const nodeComponents = walkGraph(metagraph, (node) => { return <NodePage key={node.id} node={node} />; });

    const { elem, next, previous, idx, finished, move } = useList(nodeComponents)


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
        return (ev: Event) => {
            ev.preventDefault()
            move(index)
        }
    }

    const [start, setStart] = useState(false);

    function workflowPages() {
        return (<div>
            <h1>Workflow: {metagraph.name}</h1>
            <hr className="node-divider" />
            {!finished ? elem : <div>Finished workflow, review your steps before submitting</div>}
            <hr className="node-divider" />
            {idx > 0 ? <button onClick={handlePreviousStep}>Previous step</button> : null}
            {!finished ? <button onClick={handleNextStep}>Next step</button> : <button onClick={handleSubmit}>Submit</button>}
            <div>Step {idx + 1} of {metagraph.nodes.length}</div>
            {metagraph.nodes.map((nd, index) => <FontAwesomeIcon icon={(index > idx) ? "fa-regular fa-circle" : "fa-solid fa-circle"} onClick={handleMove(index)} />)}
        </div>)
    }

    function startPage() {
        return (<div>
            <h1>Workflow: {metagraph.name}</h1>
            <Summary metagraph={metagraph} />
            <hr className="node-divider" />
            <div>Click start to begin</div>
            <button onClick={() => setStart(true)}>Start</button>
        </div>)
    }

    //When finished, it should show a summary of the inputs and allow the user to run the workflow

    return (
        <div className='node-container'>
            {start ? workflowPages() : startPage()}
        </div>

    );
};

export default Workflow;