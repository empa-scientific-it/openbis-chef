import { Sample } from "@src/openbis/dto";
import { Metagraph } from "../metagraph";
import { LoggerInterface } from "../useLog";
// import { Stepper } from "./Stepper";
import WorkflowEnd from "./WorkflowEnd";
import React, { useEffect, useState } from "react";

import { Stepper, Step } from "./Stepper";
import { useList } from "../useList";
import { Button } from "@material-ui/core";

function WorkflowPages({
  handleSubmit,
  children,
  handleMove,
  handlePreviousStep,
  handleNextStep,
  handleReset,
  logger,
  finished,
  hierarchyRoot,
}: {
  children: JSX.Element[];
  handleMove: (index: number) => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  handleReset: () => void;
  handleSubmit: () => void;
  logger: LoggerInterface;
  finished: boolean;
  hierarchyRoot: typeof Sample;
}) {
  const {
    elem: currentChild,
    move,
    next,
    previous,
    finished: childrenFinished,
    idx,
  } = useList(children);

  const {
    elem: currentVisite,
    list: visited,
    set: setVisited,
    clear: resetVisited,
    move: moveVisited,
    setList: setVisitedlist,
  } = useList(children.map((val, el) => false));

  const [workflowFinished, setWorkflowFinished] = useState(false);

  const handleMoveTo = (index: number) => {
    move(index);
    console.log("moved");
    handleMove(index);
    setVisited(true, index);
  };

  const handleMoveToNext = () => {
    next();
    handleNextStep();
    setVisited(true, idx);
  };

  const handleMoveToPrevious = () => {
    previous();
    setWorkflowFinished(() => false)
    handlePreviousStep();
  };

  const handleLocalReset = () => {
    handleReset();
    move(0);
    resetVisited();
    setVisitedlist(children.map((_a, _b) => false));
    setWorkflowFinished(() => false)
  };

  function getStepElement(step: number): JSX.Element {
    return children[step];
  }

  const handleFinish = () => {
    if (visited.reduce((cur, sum) => sum)) {
      setWorkflowFinished(true);
    }
  };

  

  return (
    <div>
      {workflowFinished
        ? WorkflowEnd(logger, childrenFinished, hierarchyRoot)
        : getStepElement(idx)}

      <Stepper
        handleBack={handleMoveToPrevious}
        handleNext={handleMoveToNext}
        handleReset={handleLocalReset}
        handleMove={handleMoveTo}
        currentStep={idx}
        handleSubmit={handleFinish}
      >
        {children.map((child, index) => (
          <Step
            label={child.props.label}
            completed={visited[index]}
            key={index}
            onClick={() => handleMoveTo(index)}
          >
            <div>{index}</div>
          </Step>
        ))}
      </Stepper>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default WorkflowPages;
