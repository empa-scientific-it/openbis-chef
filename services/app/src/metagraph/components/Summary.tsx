import React, { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'reactflow';


import { Metagraph, getEdges, getVisualisationNodes } from '../metagraph';

type Props = {
    metagraph: Metagraph
}

function Summary({ metagraph }: Props) {
    const [nodes, setNodes] = useNodesState(getVisualisationNodes(metagraph, 5));
    const [edges, setEdges] = useEdgesState(getEdges(metagraph));
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
    const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

    return (
        <div style={{ height: 800 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                onInit={onInit}
                fitView
                attributionPosition="top-right"
            >
            </ReactFlow>
        </div>

    );

}

export default Summary;