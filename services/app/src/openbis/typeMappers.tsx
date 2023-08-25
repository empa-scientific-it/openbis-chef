import { DataType, Plugin, PropertyType, Sample } from "@src/types/openbis";
import "react";
import React from "react";

export function mapDataTypeToInputType(type: DataType) {
  switch (type) {
    case "BOOLEAN":
      return "checkbox";
    case "DATE":
      return "date";
    case "TIMESTAMP":
      return "datetime-local";
    case "REAL":
      return "number";
    case "INTEGER":
      return "number";
    case "VARCHAR":
      return "string";
    case "MULTILINE_VARCHAR":
      return "string";
    case "XML":
      return "string";
    case "HYPERLINK":
      return "url";
    default:
      return "string";
  }
}

export function prepareValueForDisplay(
  value: string,
  type: DataType,
): Boolean | string | Date | number {
  switch (type) {
    case "BOOLEAN":
      return value == "true";
    case "DATE":
      return new Date(value);
    case "TIMESTAMP":
      return new Date(value);
    case "REAL":
      return parseFloat(value);
    case "INTEGER":
      return parseInt(value);
    case "VARCHAR":
      return value;
    case "MULTILINE_VARCHAR":
      return value;
    case "XML":
      return value;
    case "HYPERLINK":
      return value;
    default:
      return value;
  }
}

interface PropertyWithType {
  value: string;
  type: DataType;
  plugin: Plugin;
  propertyType: PropertyType;
}

export interface SampleWithTypes {
  sample: Sample;
  properties: { [key: string]: PropertyWithType };
}

export function addTypesToSampleEntry(sampleEntry: Sample): SampleWithTypes {
  const mappedProperties = Object.fromEntries(
    Object.entries(sampleEntry.properties).map(([key, value]) => {
      const propType = sampleEntry.type.propertyAssignments.find(
        (ass) => ass.propertyType.code == key,
      );
      return [
        key,
        {
          value: value,
          type: propType.propertyType.dataType,
          plugin: propType.plugin,
          propertyType: propType.propertyType,
        },
      ];
    }),
  );
  return { sample: sampleEntry, properties: { ...mappedProperties } };
}

export function displayValue(entry: PropertyWithType): React.JSX.Element {
  switch (entry.type) {
    case "HYPERLINK":
      return <a href={entry.value}>{entry.value}</a>;
    case "MULTILINE_VARCHAR":
      const re = /(<body>(.*)<\/body>)/;
      const innerVal = entry.value.match(re);
      return innerVal[2] ? (
        <div dangerouslySetInnerHTML={{ __html: innerVal[2] }}></div>
      ) : (
        <div>{entry.value}</div>
      );
    default:
      return <div>{entry.value}</div>;
  }
}
