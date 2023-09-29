import React, { useContext, useState } from "react";
import { SampleType, DataType, Sample, PropertyType } from "@src/types/openbis";
import "./EntryForm.css";
import { mapDataTypeToInputType } from "@src/openbis/typeMappers";
import { elementForType } from "./PropertyEditor";

export interface ObjectEntry {
  type: SampleType;
  properties: { [key: string]: string };
}

type Props = {
  objectType: SampleType;
  onEntry: (objectEntry: ObjectEntry) => void;
  properties: { [key: string]: string };
};

function OpenBisEntry({ objectType, properties, onEntry }: Props) {
  // const workflowOperations = useContext(OperationContext);
  // const [currentObject, setCurrentObject] = useState(workflowOperations.currentOperation.originObject);
  const [objectEntry, setObjectEntry] = useState(objectType);
  // const [properties, setProperties] = useState<{ [key: string]: string }>({});

  function handleInput(propertyCode: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const property = objectType.propertyAssignments.find(
        (el) => el.propertyType.code == propertyCode,
      );
      if (property) {
        const newObjectEntry = {
          type: objectType,
          properties: { ...properties, [propertyCode]: value },
        } as ObjectEntry;
        // setProperties(newObjectEntry.properties);
        onEntry(newObjectEntry);
      }
    };
  }

  return (
    <div>
      <form className="form-container">
        {objectEntry.propertyAssignments.map((el, index) => {
          return (
            <div key={index}>
              <label
                htmlFor="openbis-entry-input"
                className="form-label"
                key={el.propertyType.label}
              >
                {el.propertyType.label}  
              </label>
              {elementForType(el.propertyType.dataType, false)(el.propertyType.code, properties[el.propertyType.code], handleInput)}
              {/* <input
                id="openbis-entry-input"
                className="form-input"
                type={mapDataTypeToInputType(el.propertyType.dataType)}
                onInput={handleInput(el.propertyType.code)}
                value={properties[el.propertyType.code]}
              /> */}
              <br/>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default OpenBisEntry;
