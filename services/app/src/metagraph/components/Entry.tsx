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
  Sample,
} from "@src/openbis/dto";
import { OperationContext } from "../OperationContext";
import { OpenBIS } from "@src/types/openbis";
import "./Select.css";

function Entry() {
  const { loggedIn, service } = useContext(AuthContext);
  const [entity, setEntity] = useState({} as typeof SampleType);
  const [entityAvailable, setEntityAvailable] = useState(false);
  const workflowOperations = useContext(OperationContext);

  const [properties, setProperties] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    console.log("Entry", workflowOperations.currentOperation);
    if (workflowOperations.currentOperation.type == "create") {
      setProperties(() => workflowOperations.currentOperation?.objectProperties);
    }
  }, []);

  function handleEntry(objectEntry: ObjectEntry) {
    console.log("handleEntry", objectEntry);
    setProperties((currentProperties) => {
      return { ...currentProperties, ...objectEntry.properties };
    });
    console.log("properties", properties);
    const newEntity = {
      ...entity,
      properties: objectEntry.properties,
    };
    setEntity(newEntity);
    console.log(newEntity);
  }

  function handleSave(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    workflowOperations?.setProperties(properties);
  }

  useMemo(() => {
    const ssc = new SampleTypeSearchCriteria();
    ssc.withCode().thatEquals(workflowOperations?.currentOperation?.objectType);
    const sfo = new SampleTypeFetchOptions();
    sfo.withPropertyAssignments().withPropertyType().withVocabulary().withTerms();
    if (loggedIn) {
      console.log(service);
      service.searchSampleTypes(ssc, sfo).then((res) => {
        if (res.totalCount > 0) {
          setEntity(() => res.objects[0]);
          setEntityAvailable(true);
        }
      });
    }
  }, [workflowOperations?.currentOperation?.objectType]);

  // Render input fields and entity settings
  const ui = useMemo(() => {
    return (
      <div className="selection-form">
        <p>
          This step will create a new sample of type{" "}
          {workflowOperations?.currentOperation?.objectType} in collection{" "}
          {workflowOperations?.currentOperation?.collectionIdentifier}
        </p>
        {entityAvailable ? (
          <OpenBisEntry
            properties={properties}
            objectType={entity}
            onEntry={handleEntry}
          />
        ) : null}
        <button className="clickable-button" onClick={handleSave}>
          Save
        </button>
      </div>
    );
  }, [entity, properties]);
  return ui;
}

export default Entry;
