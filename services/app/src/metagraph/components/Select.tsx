// Component for a LinkNode
import React, { useState, useEffect, useContext } from "react";
import { SelectNode } from "@src/metagraph/metagraph";
import NodePage from "./NodePage";
import { AuthContext } from "@src/openbis/AuthContext";
import { SampleType, Sample, Experiment } from "@src/types/openbis";
import { ExperimentSearchCriteria, ExperimentFetchOptions,  SampleTypeFetchOptions, SampleFetchOptions} from "@src/openbis/dto";

import SampleEntry from "@src/openbis/components/SampleEntry";
import "./Node.css"

type Props = {
  node: SelectNode
}



const SampleSelector = ({ experiment, onSelect }) => {
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

const Select = ({ node }: Props) => {
  // Render input fields and link settings
  const { token, setToken, loggedIn, setLoggedIn, login, service, loginAndThen, logout } = useContext(AuthContext)
  const [inputValue, setInputValue] = useState('');
  const [experiment, setExperiment] = useState({} as Experiment);
  const [experimentAvailable, setExperimentAvailable] = useState(false);
  const [sampleAvailable, setSampleAvailable] = useState(false);

  const [sample, setSample] = useState({} as Sample);




  useEffect(() => {
    const ssc = new ExperimentSearchCriteria()
    ssc.withIdentifier().thatEquals(node.collection)
    const sfo = new ExperimentFetchOptions()
    const sto = new SampleTypeFetchOptions()
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
    const sample = experiment.samples.find((sample: Sample) => sample.identifier.identifier === event.target.value)
    console.log(sample)
    setSample(() => sample)
    setSampleAvailable(() => true)
  }

  return (
    <div>
      {experimentAvailable ? <SampleSelector experiment={experiment} onSelect={handleSelection} /> : null}
      <hr className="node-divider" />
      {sampleAvailable ? <SampleEntry sample={sample} /> : null}
     
    </div>
  );
};

export default Select;