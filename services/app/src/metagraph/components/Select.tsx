import React, { useState, useEffect, useContext } from "react";
import SampleEntry from "@src/openbis/components/SampleEntry";
import { AuthContext } from "@src/openbis/AuthContext";
import { OperationContext } from "../OperationContext";
import { Experiment } from "@src/types/openbis";
import { ExperimentFetchOptions, ExperimentSearchCriteria, SampleFetchOptions, SampleTypeFetchOptions } from "@src/openbis/dto";

const SampleSelector = ({ experiment, onSelect }: {experiment: Experiment }) => {
  return (
    <div>
      <div>Experiment: {experiment.identifier.identifier}</div>
      <label>Select sample:</label>
      <select onChange={onSelect}>
        {experiment.samples.map((sample) => (
          <option key={sample.identifier.identifier} value={sample.identifier.identifier}>
            {sample.identifier.identifier}
          </option>
        ))}
      </select>
    </div>
  );
};

const Select = () => {
  const workflowOperations = useContext(OperationContext);
  const { loggedIn, service } = useContext(AuthContext);
  const [experiment, setExperiment] = useState({} as Experiment);
  const currentSample = workflowOperations.currentOperation.originObject;

  useEffect(() => {
    if (loggedIn) {
      const ssc = new ExperimentSearchCriteria();
      ssc.withIdentifier().thatEquals(workflowOperations.currentOperation.collection);
      const sfo: ExperimentFetchOptions = new ExperimentFetchOptions();
      const sto: SampleTypeFetchOptions = new SampleTypeFetchOptions();
      sto.withPropertyAssignments().withPropertyType();
      const sso = new SampleFetchOptions();
      sso.withProperties();
      sso.withTypeUsing(sto);
      sfo.withSamplesUsing(sso);
      service.searchExperiments(ssc, sfo).then((res) => {
        if (res.totalCount > 0) {
          console.log(res.objects[0]);
          setExperiment(res.objects[0]);
        }
      });
    }
  }, [loggedIn, service, workflowOperations.currentOperation]);

  const handleSelection = (event) => {
    event.preventDefault();
    const foundSample = experiment.samples.find(
      (sample) => sample.identifier.identifier === event.target.value 
    );
    workflowOperations.updateOperationOriginObject(foundSample);
  };

  return (
    <div>
      <div>Select an existing object</div>
      {(
        <SampleSelector experiment={experiment} onSelect={handleSelection} />
      )}
      <hr className="node-divider" />
      {/* {currentSample && <SampleEntry sample={currentSample} />} */}
    </div>
  );
};

export default Select;