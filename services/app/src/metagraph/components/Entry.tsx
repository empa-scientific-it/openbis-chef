import React, { useState, useContext, useEffect, useMemo } from "react";
import { AuthContext } from "@src/openbis/AuthContext";
import OpenBisEntry, { ObjectEntry } from "@src/openbis/components/OpenBisEntry";
import { SampleType } from "@src/openbis/dto";
import { OperationContext } from "../OperationContext";
import "./Select.css";
import { performSampleTypeSearch } from "@src/openbis/openbisService";

function Entry() {
  const { loggedIn, service } = useContext(AuthContext);
  const [entity, setEntity] = useState({} as typeof SampleType);
  const [entityAvailable, setEntityAvailable] = useState(false);
  const workflowOperations = useContext(OperationContext);

  const [properties, setProperties] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (workflowOperations.currentOperation.type == "create") {
      setProperties(() => workflowOperations.currentOperation?.objectProperties);
    }
  });

  function handleEntry(objectEntry: ObjectEntry) {
    setProperties((currentProperties) => {
      return { ...currentProperties, ...objectEntry.properties };
    });
    const newEntity = {
      ...entity,
      properties: objectEntry.properties,
    };
    setEntity(newEntity);
  }

  function handleSave(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    workflowOperations?.setProperties(properties);
  }

  useMemo(() => {
    if (loggedIn) {
      performSampleTypeSearch(
        workflowOperations?.currentOperation?.objectType,
        service
      ).then((res) => {
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
