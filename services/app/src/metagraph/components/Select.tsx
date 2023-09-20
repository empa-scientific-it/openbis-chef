import React, { useState, useEffect, useContext, useMemo } from "react";
import { AuthContext } from "@src/openbis/AuthContext";
import { OperationContext } from "../OperationContext";
import {
  ExperimentFetchOptions,
  ExperimentSearchCriteria,
  SampleFetchOptions,
  SampleTypeFetchOptions,
  Sample,
  SampleSearchCriteria,
  CodeSearchCriteria,
  Experiment,
  AnyPropertySearchCriteria,
  SizeSearchCriteria,
  AnyStringPropertySearchCriteria,
  SampleSortOptions,
  Sorting,
} from "@src/openbis/dto";
import { MetagraphComponentProps } from "@src/metagraph/metagraph";
import SampleEntry from "@src/openbis/components/SampleEntry";
import "./Select.css";
import { on } from "process";
import { OpenBIS } from "@src/types/openbis";
import { Facade } from "@src/openbis/api";
import { as } from "fp-ts/lib/Option";

function sampleFetchOptionsComplete() {
  const sfo = new SampleFetchOptions();
  const sto: typeof SampleTypeFetchOptions = new SampleTypeFetchOptions();
  const sso: typeof SampleFetchOptions = new SampleFetchOptions();
  sto.withPropertyAssignments().withPropertyType().withVocabulary();
  sso.withProperties();
  sso.withTypeUsing(sto);
  sfo.withProperties();
  return sfo;
}

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
        <select
          id="select-sample"
          className="select-dropdown"
          value={selectedValue}
          onChange={localOnSelect}
        >
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

const SampleTable = ({
  samples,
  onSelectedSample,
  onSort,
}: {
  samples: (typeof Sample)[];
  onSelectedSample: (s: typeof Sample) => void;
  onSort: (s: { column: string; direction: "asc" | "desc" }) => void;
}) => {
  const props =
    [...new Set(samples?.flatMap((sample) => Object.keys(sample?.properties ?? {})))] ??
    [];
  const [sortColumn, setSortColumn] = useState(""); // Track the currently sorted column
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc"); // Track sorting direction

  const handleColumnHeaderClick = (column: string) => {
    // If the column is already sorted, reverse the direction, otherwise set the column and direction
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  useEffect(() => {
    onSort({ column: sortColumn, direction: sortDirection });
  }, [sortColumn, sortDirection]);

  // Function to render the sort indicator based on the current sorting state
  const renderSortIndicator = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        return <span>&uarr;</span>; // Up arrow for ascending
      } else {
        return <span>&darr;</span>; // Down arrow for descending
      }
    }
    return null;
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleColumnHeaderClick("Sample")}>
            Sample {renderSortIndicator("Sample")}
          </th>
          <th onClick={() => handleColumnHeaderClick("PermID")}>
            PermID {renderSortIndicator("PermID")}
          </th>
          <th onClick={() => handleColumnHeaderClick("Identifier")}>
            Identifier {renderSortIndicator("Identifier")}
          </th>
          {props?.map((prop) => (
            <th onClick={() => handleColumnHeaderClick(prop)}>
              {prop} {renderSortIndicator(prop)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {samples?.map((sample) => (
          <tr key={sample.identifier.identifier} onClick={() => onSelectedSample(sample)}>
            <td>{sample.code}</td>
            <td>{sample.permId.permId}</td>
            {props.map((prop) =>
              sample.properties[prop] ? <td>{sample.properties[prop]}</td> : <td></td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function createSearchCriteria(
  collection: string,
  objectType: string,
  searchTerm: string
) {
  const ssc = new SampleSearchCriteria();
  ssc.withExperiment().withIdentifier().thatEquals(collection);
  ssc.withType().withCode().thatEquals(objectType);

  ssc.withAnyProperty().thatContains(searchTerm);

  console.log(ssc);
  return ssc;
}

async function performSearch(
  collection: string,
  objectType: string,
  searchTerm: string,
  sfo: typeof SampleFetchOptions,
  service: Facade
) {
  const ssc = createSearchCriteria(collection, objectType, searchTerm);
  const result = await service.searchSamples(ssc, sfo);
  return result;
}

const Select = () => {
  const workflowOperations = useContext(OperationContext);
  const { loggedIn, service } = useContext(AuthContext);
  const [samples, setSamples] = useState(null as (typeof Sample)[]);
  const [currentSample, setSample] = useState(null as typeof Sample);
  const currentCollection = workflowOperations.currentOperation.collectionIdentifier;
  const [fetchOptions, setFetchOptions] = useState<typeof SampleFetchOptions>(
    sampleFetchOptionsComplete()
  ); // Track the currently sorted column
  const [searchTerm, setSearchTerm] = useState("");
  //Use one function to generate the fetch options
  useEffect(() => {
    if (loggedIn) {
      console.log(currentCollection);
      //Perform the search for all the objects in the experiment/collection
      performSearch(
        currentCollection,
        workflowOperations.currentOperation.objectType,
        searchTerm,
        fetchOptions,
        service
      ).then((res) => {
        if (res.totalCount > 0) {
          console.log(res);
          setSamples(() => res.objects);
        } else {
          setSamples(() => []);
        }
      });
    }
  }, [loggedIn, currentCollection, fetchOptions, searchTerm]);

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const foundSample = samples.find(
      (sample) => sample.identifier.identifier === event.target.value
    );
    console.log(foundSample);
    setSample(() => foundSample);
    workflowOperations.setIdentifier(foundSample?.identifier.identifier);
  };

  const startSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    setSearchTerm(() => searchTerm);
  };

  const handleSort = (s: { column: string; direction: "asc" | "desc" }) => {
    const sfo = sampleFetchOptionsComplete();
    const sb = new SampleSortOptions();
    const so = sb.property(s.column);
    if (s.direction === "desc") {
      so.asc = false;
    }
    console.log(s.direction, sb);
    sfo.sort = sb;

    setFetchOptions(sfo);
  };

  return (
    <div>
      <main>
        <div>
          <h3>Search objects</h3>
          <label htmlFor="property-search">Search any properties:</label>
          <input
            onChange={startSearch}
            id="property-search"
            aria-label="Search in object properties"
          ></input>
        </div>
        <SampleTable
          samples={samples}
          onSelectedSample={handleSelection}
          onSort={handleSort}
        />
        {/* <h3>Selected sample</h3> */}
        {/* <h3>{currentSample?.identifier?.identifier}</h3>
        {currentSample !== null ? <SampleEntry sample={currentSample} /> : null} */}
      </main>
    </div>
  );
};

export default Select;
