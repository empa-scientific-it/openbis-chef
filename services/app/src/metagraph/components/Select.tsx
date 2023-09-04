import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "@src/openbis/AuthContext";
import { OperationContext } from "../OperationContext";
import { Experiment } from "@src/types/openbis";
import {
  ExperimentFetchOptions,
  ExperimentSearchCriteria,
  SampleFetchOptions,
  SampleTypeFetchOptions,
  Sample,
} from "@src/openbis/dto";
import { MetagraphComponentProps } from "@src/metagraph/metagraph";
import SampleEntry from "@src/openbis/components/SampleEntry";

const SampleSelector = ({
  experiment,
  onSelect,
}: {
  experiment: Experiment;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div>
      {/* <div>Experiment: {experiment.identifier.identifier}</div> */}
      <label>Select sample:</label>
      <select onChange={onSelect}>
        {experiment.samples?.map((sample) => (
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
  const [currentSample, setSample] = useState(null);
  const [sampleComponent, setSampleComponent] = useState(<div>Your sample will appear here</div>);

  useEffect(() => {    
    if (loggedIn && service && workflowOperations?.currentOperation?.type === "link") {
      //Perform the search for all the objects in the experiment/collection
      const ssc = new ExperimentSearchCriteria();
      ssc
        .withIdentifier()
        .thatEquals(workflowOperations.currentOperation.collectionIdentifier);
      const sfo: typeof ExperimentFetchOptions = new ExperimentFetchOptions();
      const sto: typeof SampleTypeFetchOptions = new SampleTypeFetchOptions();
      const sso: typeof SampleFetchOptions = new SampleFetchOptions();
      sto.withPropertyAssignments().withPropertyType();
      sso.withProperties();
      sso.withTypeUsing(sto);
      sfo.withSamplesUsing(sso);
      service.searchExperiments(ssc, sfo).then((res) => {
        if (res.totalCount > 0) {
          setExperiment(() => res.objects[0]);
        }
      });
    }
  }, [loggedIn, service]);

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const foundSample = experiment.samples.find(
      (sample) => sample.identifier.identifier === event.target.value
    );
    setSample(foundSample);
    workflowOperations.setIdentifier(foundSample?.identifier.identifier);
    if (foundSample){
      console.log (foundSample)
      // setSampleComponent(() => <SampleEntry sample={foundSample} />);
    }
  };

  // useEffect(() => {
  //   console.log(currentSample)
  //   if (currentSample) {
  //     console.log(currentSample);
  //     setSampleComponent(<SampleEntry sample={currentSample} />);
  //   }
  // }, [currentSample]);

  return (
    <div>
      <div>Select an existing object</div>
      {<SampleSelector experiment={experiment} onSelect={handleSelection} />}
      <h2>Selected sample</h2>
      <h2>{currentSample?.identifier?.identifier}</h2>
      {sampleComponent}
    </div>
  );
};

export default Select;
