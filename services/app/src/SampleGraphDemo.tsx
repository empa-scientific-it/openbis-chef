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
  SamplePermId,
  SpacePermId,
  SampleUpdate,
  SynchronousOperationExecutionOptions,
  SampleFetchOptions,
  UpdateSamplesOperation,
} from "./openbis/dto";
import { Facade } from "./openbis/api";

import { getDirectGraph, getDisplayGraph, getGraphToDepth } from "./openbis/sampleGraph";
import { fetchOptionsToDepth } from "./openbis/sampleGraph";
import ObjectGraph from "./metagraph/components/ObjectGraph";

import "./App.css";
import "./Demo.css";

function newSample() {
  const s1 = new SampleCreation();
  s1.typeId = new EntityTypePermId("PRODUCT");
  s1.projectId = new ProjectIdentifier("/DEFAULT/DEFAULT");
  s1.experimentId = new ExperimentIdentifier("/DEFAULT/DEFAULT/DEFAULT");
  s1.spaceId = new SpacePermId("DEFAULT");
  s1.properties = { $NAME: crypto.randomUUID() };
  return s1;
}

async function createTestSample(service: Facade): Promise<(typeof Sample)[]> {
  const s1 = [newSample(), newSample(), newSample(), newSample(), newSample()];
  const op = new CreateSamplesOperation(s1);
  const options = new SynchronousOperationExecutionOptions();
  const result = await service.executeOperations([op], options);
  const permIds: (typeof SamplePermId)[] = result.results.flatMap((r) => {
    if (r instanceof CreateSamplesOperationResult) {
      return r.objectIds;
    }
  });
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
  const bo = new SampleFetchOptions();
  bo.withProperties();
  const fo = fetchOptionsToDepth(5, bo);
  const res = await service.getSamples(permIds, fo);
  return Object.values(res);
}

function SampleGraphDemo() {
  const service = useLogin();
  const [sample, setSample] = useState({} as typeof Sample);
  const [allSamples, setAllSamples] = useState<(typeof Sample)[]>([]);
  const [sampleAvailable, setSampleAvailable] = useState(false);
  const [getSample, setGetSample] = useState(false);

  const onNodeClick = (event: React.MouseEvent, element: Node) => {
    event.preventDefault();
    console.log(element);
    const permId = element.id;
    console.log(permId);
    const bo = new SampleFetchOptions();
    bo.withProperties();
    const sc = fetchOptionsToDepth(5, bo);
    service.service.getSamples([new SamplePermId(permId)], sc).then((res) => {
      console.log(res);
      const sample = res[permId];
      setSample(sample);
    });
  };

  useEffect(() => {
    service.login("admin", "changeit");
    createTestSample(service.service).then((res) => {
      setSample(res[1]);
      setAllSamples(res);
      setSampleAvailable(true);
      console.log(res);
    });
  }, [getSample]);

  useEffect(() => {
    service.login("admin", "changeit");
    service.service.deleteSamples(allSamples.map((s) => s.permId));
  }, []);

  return (
    <div className="demo-container">
      <h1>Workflow graph</h1>
      <section
        className="flow"
        style={{
          width: "99%",
          height: "600px",
          overflow: "auto",
          fontFamily: "sans-serif",
        }}
      >
        {sampleAvailable ? (
          <ObjectGraph samples={[sample]} maxDepth={3} onNodeClick={onNodeClick} />
        ) : null}
        <button className="clickable-button" onClick={() => setGetSample((oldVal) => !oldVal)}>Get sample</button>
      </section>
    </div>
  );
}

export default SampleGraphDemo;
