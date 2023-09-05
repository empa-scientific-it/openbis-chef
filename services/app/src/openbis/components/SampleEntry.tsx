import { SampleType, DataType, Sample } from "@src/types/openbis";
import "./SampleDisplay.css";
import {
  mapDataTypeToInputType,
  addTypesToSampleEntry,
  prepareValueForDisplay,
  displayValue,
} from "@src/openbis/typeMappers";
import { useEffect } from "react";

type Props = {
  sample: Sample;
};

function displaySampleMetadata(sample: Sample | null) {
  const sampleMetadata = {
    Code: sample.code,
    Type: sample.type.code,
    "Creation date": new Date(sample.registrationDate).toLocaleDateString(),
    "Modification date": new Date(sample.modificationDate).toLocaleDateString(),
    Owner:
      sample?.registrator?.getFirstName() +
      " " +
      sample?.registrator?.getLastName(),
  };
  return (
    <div className="sample-container">
      <div className="properties-container">
        {Object.entries(sampleMetadata).map(([name, value], index) => {
          return (
            <div className="property-entry">
              <div className="property-label">{name}</div>
              <div className="property-value">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SampleEntry({ sample }: Props) {
  useEffect(() => {
    console.log("I was briefly rendered");
  })
  const transformedSample = addTypesToSampleEntry(sample);

  return (
    <div>
      {/* Show properties of the sample */}
      <div className="sample-container">
        <h2>Object: {sample?.code}</h2>
        <h3>Properties</h3>
        <div className="properties-container">
          {Object.entries(transformedSample?.properties).map(
            ([name, value], index) => {
              return (
                <div className="property-entry">
                  <div className="property-label">
                    {value.propertyType.label}
                  </div>
                  <div className="property-value">{displayValue(value)}</div>
                </div>
              );
            },
          )}
        </div>
        <h3>Metadata</h3>
        {sample !== null ? displaySampleMetadata(sample) : null}
      </div>
    </div>
  );
}

export default SampleEntry;
