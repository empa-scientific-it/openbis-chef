import React, { useEffect, useState } from "react";

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import "./Demo.css";
import {
  Metagraph,
  VisualisationNode,
  getEdges,
  getVisualisationNodes,
  walkGraph,
} from "@src/metagraph/metagraph";
import { useList } from "./metagraph/useList";
import { useLogin } from "./openbis/hooks/useLogin";
import {
  CreateSamplesOperation,
  CreateSamplesOperationResult,
  EntityTypePermId,
  ExperimentIdentifier,
  IOperationResult,
  ProjectIdentifier,
  Sample,
  SampleCreation,
  SampleFetchOptions,
  SamplePermId,
  SpacePermId,
  SampleUpdate,
  SynchronousOperationExecutionOptions,
} from "./openbis/dto";
import { Facade } from "./openbis/api";
import { UpdateSamplesOperation } from "v3api/V3API.esm";
import { getDirectGraph, getDisplayGraph, getGraphToDepth } from "./openbis/sampleGraph";

function newSample() {
  const s1 = new SampleCreation();
  s1.typeId = new EntityTypePermId("ENTRY");
  s1.projectId = new ProjectIdentifier("/DEFAULT/DEFAULT");
  s1.experimentId = new ExperimentIdentifier("/DEFAULT/DEFAULT/DEFAULT");
  s1.spaceId = new SpacePermId("DEFAULT");
  return s1;
}

async function createTestSample(service: Facade): Promise<typeof Sample> {
  const s1 = [newSample(), newSample(), newSample()];
  const op = new CreateSamplesOperation(s1);
  const options = new SynchronousOperationExecutionOptions();
  const result = await service.executeOperations([op], options);
  const permIds: (typeof SamplePermId)[] = result.results.flatMap((r) => {
    if (r instanceof CreateSamplesOperationResult) {
      return r.objectIds;
    }
  });
  console.log(permIds);
  const ops = permIds.reduce((prev, curr, index, array) => {
    const update = new SampleUpdate();
    update.sampleId = curr;
    if (index > 0) {
      // If not the first element, set the previous sample as the parent
      update.parentIds.add([array[index - 1]]);
    }
    return prev.concat([update]);
  }, [] as (typeof SampleUpdate)[]);
  const updateRes = await service.executeOperations(
    new UpdateSamplesOperation(ops),
    options
  );
  const fo = new SampleFetchOptions();
  fo.withChildrenUsing(new SampleFetchOptions());
  fo.withParentsUsing(new SampleFetchOptions());
  const res = await service.getSamples(permIds, fo);
  return res[permIds[1].permId];
}

function SampleGraphDemo() {
  const service = useLogin();
  const [sample, setSample] = useState({} as typeof Sample);
  const [sampleAvailable, setSampleAvailable] = useState(false);
  const [getSample, setGetSample] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    service.login("admin", "changeit");
    createTestSample(service.service).then((res) => {
      setSample(res);
      setSampleAvailable(true);
    });
  }, [getSample]);

  useEffect(() => {
    if (!sampleAvailable) {
      return;
    }
    const { nodes, edges } = getDisplayGraph(getDirectGraph(sample));
    console.log(nodes, edges);
    setNodes(nodes);
    setEdges(edges);
  }, [sampleAvailable, sample]);

  // const [nodes, setNodes, onNodesChange] = useNodesState(
  //     getVisualisationNodes(metagraph)
  // )

  return (
    <main>
      <h1>Workflow graph</h1>
      <section
        className="flow"
        style={{
          width: "500px",
          height: "500px",
          overflow: "auto",
          fontFamily: "Virgil",
        }}
      >
        {sampleAvailable? <ReactFlow
          nodes={nodes}
          edges={edges}
          attributionPosition="top-right"
          maxZoom={100}
          minZoom={0.1}
          fitView
        ></ReactFlow>: null}
        <button onClick={() => setGetSample((oldVal) => !oldVal)}>Get sample</button>
      </section>
    </main>
  );
}

export default SampleGraphDemo;
