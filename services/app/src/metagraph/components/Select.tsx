import React, { useState, useEffect, useContext, useMemo } from "react";
import { AuthContext } from "@src/openbis/AuthContext";
import { OperationContext } from "../OperationContext";
import { Experiment } from "@src/types/openbis";
import {
  ExperimentFetchOptions,
  ExperimentSearchCriteria,
  SampleFetchOptions,
  SampleTypeFetchOptions,
  Sample,
  SampleSearchCriteria,
  CodeSearchCriteria,
} from "@src/openbis/dto";
import { MetagraphComponentProps } from "@src/metagraph/metagraph";
import SampleEntry from "@src/openbis/components/SampleEntry";
import "./Select.css";

const SampleSelector = ({
  samples,
  onSelect,
}: {
  samples: (typeof Sample)[] | null;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  function localOnSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(() => event.target.value);
    onSelect(event);
  }
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <form className="selection-form">
      {/* <div>Experiment: {experiment.identifier.identifier}</div> */}
      <label htmlFor="select-sample">Select sample:</label>
      {samples !== undefined ? (
        <select id="select-sample" className="select-dropdown" value={selectedValue} onChange={localOnSelect}>
          {samples?.map((sample) => (
            <option
              key={sample.identifier.identifier}
              value={sample.identifier.identifier}
            >
              {sample.identifier.identifier}
            </option>
          ))}
        </select>
      ) : (
        <h3>No Samples</h3>
      )}
    </form>
  );
};

const Select = () => {
  const workflowOperations = useContext(OperationContext);
  const { loggedIn, service } = useContext(AuthContext);
  const [samples, setSamples] = useState(null as (typeof Sample)[]);
  const [currentSample, setSample] = useState(null as typeof Sample);
  const currentCollection = workflowOperations.currentOperation.collectionIdentifier;

  useEffect(() => {
    if (loggedIn) {
      console.log(currentCollection);
      //Perform the search for all the objects in the experiment/collection
      const ssc = new SampleSearchCriteria();
      ssc
        .withExperiment()
        .withIdentifier()
        .thatEquals(workflowOperations.currentOperation.collectionIdentifier);
      ssc
        .withType()
        .withCode()
        .thatEquals(workflowOperations.currentOperation.objectType);
      const sfo = new SampleFetchOptions();
      const sto: typeof SampleTypeFetchOptions = new SampleTypeFetchOptions();
      const sso: typeof SampleFetchOptions = new SampleFetchOptions();
      sto.withPropertyAssignments().withPropertyType();
      sso.withProperties();
      sso.withTypeUsing(sto);

      service.searchSamples(ssc, sfo).then((res) => {
        if (res.totalCount > 0) {
          setSamples(() => res.objects);
        }
      });
    }
  }, [loggedIn, currentCollection]);

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const foundSample = samples.find(
      (sample) => sample.identifier.identifier === event.target.value
    );
    console.log(foundSample);
    setSample(() => foundSample);
    workflowOperations.setIdentifier(foundSample?.identifier.identifier);
  };

  const ui = useMemo(() => {
    return <SampleSelector samples={samples} onSelect={handleSelection} />;
  }, [samples]);

  return (
    <div>
      <main>
        {ui}
        {/* <h3>Selected sample</h3> */}
        <h3>{currentSample?.identifier?.identifier}</h3>
        {currentSample !== null ? <SampleEntry sample={currentSample} /> : null}
      </main>
    </div>
  );
};

export default Select;
