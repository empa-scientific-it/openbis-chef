// Component for a LinkNode
import React, { useState, useEffect, useContext } from "react";
import { MetagraphComponentProps, MetagraphOperations, SelectNode } from "@src/metagraph/metagraph";
import NodePage from "./NodePage";
import { AuthContext } from "@src/openbis/AuthContext";
import type { SampleType, Sample, Experiment } from "@src/types/openbis";
import { ExperimentSearchCriteria, ExperimentFetchOptions, SampleTypeFetchOptions, SampleFetchOptions } from "@src/openbis/dto";

import SampleEntry from "@src/openbis/components/SampleEntry";
import "./Node.css"

type SelectNodeProps = MetagraphComponentProps & {
  node: SelectNode
}



const SampleSelector = ({ experiment, onSelect }: { experiment: Experiment, onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void }) => {
  return (
    <div>
      <div>Experiment: {experiment.identifier.identifier}</div>

      <label>Select sample:</label>
      <select onChange={onSelect}>
        {experiment.samples.map((sample: Sample) => <option key={sample.identifier.identifier} value={sample.identifier.identifier}>{sample.identifier.identifier}</option>)}
      </select>

    </div>
  )
}

const Select = ({ node }: SelectNodeProps) => {
  // Render input fields and link settings
  const { token, setToken, loggedIn, setLoggedIn, login, service, loginAndThen, logout } = useContext(AuthContext)
  const [inputValue, setInputValue] = useState('');
  const [experiment, setExperiment] = useState({} as Experiment);
  const [experimentAvailable, setExperimentAvailable] = useState(false);
  const [sampleAvailable, setSampleAvailable] = useState(false);
  const [sample, setSample] = useState({} as Sample);
  const [currentCollection, setCurrentCollection] = useState(node.collection)



  useEffect(() => {
    const ssc = new ExperimentSearchCriteria()
    ssc.withIdentifier().thatEquals(currentCollection)
    const sfo: ExperimentFetchOptions = new ExperimentFetchOptions()
    const sto: SampleTypeFetchOptions = new SampleTypeFetchOptions()
    sto.withPropertyAssignments().withPropertyType()
    const sso = new SampleFetchOptions()
    sso.withProperties()
    sso.withTypeUsing(sto)
    sfo.withSamplesUsing(sso)
    if (loggedIn) {
      service.searchExperiments(ssc, sfo).then((res) => {
        if (res.totalCount > 0) {
          setExperiment(() => res.objects[0])
          setExperimentAvailable(true)
        }
      }
      )
    }
  }, [node.collection, loggedIn])

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    const foundSample = experiment.samples.find((sample: Sample) => sample.identifier.identifier === event.target.value)
    const op = { operationId: node.id, source: foundSample.identifier.identifier } as MetagraphOperations
    console.log(foundSample)
    setSample(() => foundSample)
    setSampleAvailable(() => true)
  }




  return (
    <div>
      <div>Select an existing object</div>
      {experimentAvailable ? <SampleSelector experiment={experiment} onSelect={handleSelection} /> : null}
      <hr className="node-divider" />
      {sampleAvailable ? <SampleEntry sample={sample} /> : null}
    </div>
  );
};

export default Select;