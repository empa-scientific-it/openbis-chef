import React, { useState, useEffect, useContext } from "react";
import { SelectNode } from "@src/metagraph/metagraph";
import NodePage from "./NodePage";
import { AuthContext } from "@src/openbis/AuthContext";
import type { SampleType, Sample, Experiment } from "@src/types/openbis";
import {
  ExperimentSearchCriteria,
  ExperimentFetchOptions,
  SampleTypeFetchOptions,
  SampleFetchOptions,
} from "@src/openbis/dto";

import SampleEntry from "@src/openbis/components/SampleEntry";
import "./Node.css";

type Props = {
  node: SelectNode;
  index: number;
};

function NodePage({ node, index }: Props) {
    // Render input fields and link settings
    return (
        <div>
        <h1>Workflow Step {index}</h1>
        <div>{node.description}</div>
        </div>
    );
}
