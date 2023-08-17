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
    const [nodes, setNodes] = useNodesState(getVisualisationNodes(metagraph, 400));
    const [edges, setEdges] = useEdgesState(getEdges(metagraph));
    const onConnect = useCallback((params) => console.log("not possible"), []);
    const onInit = (reactFlowInstance) => console.log('flow loaded:', nodes, edges);
    const nodeTypes = nodes.map(node => node.type)

    return (
        <div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                onInit={onInit}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="top-right"
            >
                <MiniMap zoomable pannable />
                <Controls />
            </ReactFlow>
        </div>

    );

}

export default Summary;