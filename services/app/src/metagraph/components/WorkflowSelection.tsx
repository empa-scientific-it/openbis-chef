import React, { useState, useContext } from "react";
import Entry from "./Entry";
import Select from "./Select";
import { Metagraph, walkGraph } from "@src/metagraph/metagraph";
import { AuthContext } from "@src/openbis/AuthContext";
import { useList } from "../useList";
import Summary from "./Summary";
import "./Node.css";
import NodePage from "./NodePage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  workflows: Metagraph[];
};

function WorkflowSelection({ workflows }: Props) {
  const [current, setCurrent] = useState(workflows[0]);
  return (
    <div>
      <h1>Workflow Selection</h1>
      <select>
        {workflows.map((workflow) => (
          <option key={workflow.name} value={workflow.name}>
            {workflow.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default WorkflowSelection;
