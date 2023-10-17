import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "@src/openbis/AuthContext";
import { OperationContext } from "../OperationContext";
import {
  SampleFetchOptions,
  Sample,
  SampleSortOptions,
} from "@src/openbis/dto";
import "./Select.css";

import "./Select.css";
import { performSampleSearch, sampleFetchOptionsComplete } from "@src/openbis/openbisService";



interface batchEvent {
  column: string;
  direction: "asc" | "desc";
}

const SampleTable = ({
  samples,
  onSelectedSample,
  onSort,
  batchSize,
  onScroll,
}: {
  samples: (typeof Sample)[];
  onSelectedSample: (s: typeof Sample) => void;
  onSort: (s: batchEvent) => void;
  batchSize?: number;
  onScroll: (batch: number) => void;
}) => {
  const props =
    [...new Set(samples?.flatMap((sample) => Object.keys(sample?.properties ?? {})))] ??
    [];
  const [sortColumn, setSortColumn] = useState(""); // Track the currently sorted column
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc"); // Track sorting direction

  const [currentBatch, setCurrentBatch] = useState(0);

  const [localSample, setLocalSample] = useState(null as typeof Sample);

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

  const handleSelection = (sample: typeof Sample) => {
    setLocalSample(() => sample);
    onSelectedSample(sample);
  };

  function getRowStyle(sample: typeof Sample) {
    if (sample === localSample) {
      return "selected-row";
    } else {
      return "unselected-row";
    }
  }

  function handleScroll(event: React.UIEvent<HTMLTableSectionElement, UIEvent>) {
    event.preventDefault();
    const { scrollTop, scrollHeight, clientHeight } =
      event.target as HTMLTableSectionElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setCurrentBatch((current) => current + batchSize);
      onScroll(currentBatch + batchSize);
    }
  }

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
      <tbody onScroll={handleScroll}>
        {samples?.map((sample, index) => (
          <tr
            key={sample.permId.permId}
            id={`$index`}
            className={getRowStyle(sample)}
            onClick={() => handleSelection(sample)}
          >
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


const Select = () => {
  const workflowOperations = useContext(OperationContext);
  const { loggedIn, service } = useContext(AuthContext);
  const [samples, setSamples] = useState(null as (typeof Sample)[]);
  const [currentSample, setSample] = useState(null as typeof Sample);
  const currentCollection = workflowOperations.currentOperation.collectionIdentifier;
  const batchSize = 50;

  const [fetchOptions, setFetchOptions] = useState<typeof SampleFetchOptions>(
    sampleFetchOptionsComplete(batchSize)
  ); // Track the currently sorted column
  const [sortColumn, setSortColumn] = useState("permId"); // Track the currently sorted column
  const [searchTerm, setSearchTerm] = useState("");

  const [currentBatch, setCurrentBatch] = useState(0);
  //Use one function to generate the fetch options
  useEffect(() => {
    if (loggedIn) {
      console.log(currentCollection);
      //Perform the search for all the objects in the experiment/collection
      performSampleSearch(
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
  }, [loggedIn, currentCollection, fetchOptions, searchTerm, currentBatch]);

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
    const sfo = sampleFetchOptionsComplete(batchSize);
    const sb = new SampleSortOptions();
    const so = sb.property(s.column);
    if (s.direction === "desc") {
      so.asc = false;
    }
    console.log(s.direction, sb);
    sfo.sort = sb;

    setFetchOptions(sfo);
  };

  useEffect(() => {
    console.log(fetchOptions);
  }, [fetchOptions]);

  const onScroll = (batch: number) => {
    setFetchOptions((oldOptions) => {
      const newOptions = oldOptions;
      const op = newOptions.from(batch);
      op.count = batchSize;
      return op;
    });
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
          onScroll={onScroll}
          batchSize={batchSize}
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
