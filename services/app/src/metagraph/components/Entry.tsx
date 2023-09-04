import React, { useState, useContext, useEffect } from "react";
import {
  EntryNode,
  MetagraphComponentProps,
  MetagraphOperations,
} from "@src/metagraph/metagraph";
import { AuthContext } from "@src/openbis/AuthContext";
import OpenBisEntry, { ObjectEntry } from "@src/openbis/components/OpenBisEntry";
import {
  SampleTypeSearchCriteria,
  SampleTypeFetchOptions,
  EntityTypePermId,
  ExperimentIdentifier,
  SampleCreation,
  SampleType,
} from "@src/openbis/dto";
import { OperationContext } from "../OperationContext";

type EntryNodeProps = MetagraphComponentProps & {
  node: EntryNode;
};

function Entry({ node }: EntryNodeProps) {
  const { loggedIn, service } = useContext(AuthContext);
  const [entity, setEntity] = useState({} as typeof SampleType);
  const [entityAvailable, setEntityAvailable] = useState(false);
  const [properties, setProperties] = useState<{ [key: string]: string }>({});

  const workflowOperations = useContext(OperationContext);

  function handleEntry(objectEntry: ObjectEntry) {
    console.log("handleEntry", objectEntry);
    setProperties(objectEntry.properties);
  }

  function handleSave(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    workflowOperations.setProperties(properties);
  }

  useEffect(() => {
    console.log("Node change");
    const ssc = new SampleTypeSearchCriteria();
    ssc.withCode().thatEquals(node.entityType);
    const sfo = new SampleTypeFetchOptions();
    sfo.withPropertyAssignments().withPropertyType();
    if (loggedIn) {
      service.searchSampleTypes(ssc, sfo).then((res) => {
        if (res.totalCount > 0) {
          setEntity(() => res.objects[0]);
          setEntityAvailable(true);
        }
      });
    }
  }, [node.entityType, loggedIn]);

  // Render input fields and entity settings
  return (
    <div>
      <div>
        This step will create a new sample of type {node.entityType} in collection{" "}
        {node.collection}
      </div>
      {entityAvailable ? (
        <OpenBisEntry objectType={entity} onEntry={handleEntry} />
      ) : null}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Entry;
