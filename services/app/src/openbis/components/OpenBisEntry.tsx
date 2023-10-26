import React from "react";
import { SampleType, PropertyType } from "@src/types/openbis";
import "./EntryForm.css";
import { elementForType } from "./PropertyEditor";

export interface ObjectEntry {
  type: SampleType;
  properties: { [key: string]: string };
}

type Props = {
  objectType: SampleType;
  properties: { [key: string]: string };
};

function renderPropertyInput(
  property: PropertyType, // Assuming PropertyType contains dataType and code
  value: string,
  className: string,
  readOnly?: boolean,
  choices?: string[]
): React.ReactNode {
  const props = {
    name: property.code,
    value: value,
    className: className,
    ...(readOnly
      ? { readOnly: true }
      : { onChange: () => {} }),
    ...(choices ? { choices: choices } : {}), // Include choices if provided
  };
  return elementForType(property.dataType, false)({ ...props });
}

function OpenBisEntry({ objectType, properties }: Props) {

  return (
    <form className="form-container">
      {objectType.propertyAssignments.map((el, index) => {
        return (
          <div key={index}>
            <label
              htmlFor="openbis-entry-input"
              className="form-label"
              key={el.propertyType.label}
            >
              {el.propertyType.label}
            </label>
            {renderPropertyInput(
              el.propertyType,
              properties[el.propertyType.code],
              "form-input",
              false,
              el.propertyType?.vocabulary?.terms?.map((term) => term.code) ?? []
            )}
            <br />
          </div>
        );
      })}
    </form>
  );
}

export default OpenBisEntry;
