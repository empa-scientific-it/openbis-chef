import React, { useState, useContext, useEffect, useMemo } from "react";
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

function Entry() {
  const { loggedIn, service } = useContext(AuthContext);
  const [entity, setEntity] = useState({} as typeof SampleType);
  const [entityAvailable, setEntityAvailable] = useState(false);
  const workflowOperations = useContext(OperationContext);

  const [properties, setProperties] = useState<{ [key: string]: string }>(workflowOperations.currentOperation.type == "create" ? workflowOperations.currentOperation.objectProperties : {});

  // useEffect(() => {
  //   console.log("Entry", workflowOperations.currentOperation)
  //   setProperties(workflowOperations.currentOperation?.objectProperties)});

  function handleEntry(objectEntry: ObjectEntry) {
    console.log("handleEntry", objectEntry);
    setProperties(objectEntry.properties);
    
    const newEntity = {
      ...entity,
      properties: objectEntry.properties,
        }
      setEntity(newEntity);
      console.log(newEntity)
  }

  function handleSave(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    workflowOperations.setProperties(properties);
  }

  useEffect(() => {
    const ssc = new SampleTypeSearchCriteria();
    ssc.withCode().thatEquals(workflowOperations.currentOperation.objectType);
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
  }, [workflowOperations.currentOperation.objectType, loggedIn]);

  // Render input fields and entity settings
  const ui = useMemo( () => { return (
    <div>
      <div>
        This step will create a new sample of type{" "}
        {workflowOperations.currentOperation.objectType} in collection{" "}
        {workflowOperations.currentOperation.collectionIdentifier}
      </div>
      {entityAvailable ? (
        <OpenBisEntry objectType={entity} onEntry={handleEntry} />
      ) : null}
      <button onClick={handleSave}>Save</button>
    </div>
  );}, [entity]);
  return ui;
}

export default Entry;
