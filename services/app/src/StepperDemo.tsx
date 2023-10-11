import React, { useEffect, useState } from "react";

import { useList } from "./metagraph/useList";
import { Step, Stepper } from "./metagraph/components/Stepper";

function StepperDemo(): JSX.Element {
  const children = Array.from({ length: 5 }, (_, i) => <div>Element {i}</div>);

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

  const handleMoveTo = (index: number) => {
    move(index);
    setVisited(true, index);
  };

  const handleMoveToNext = () => {
    setVisited(true, idx);
    next();
  };

  const handleMoveToPrevious = () => {
    previous();
  };

  const handleLocalReset = () => {
    move(0);
    resetVisited();
    setVisitedlist(children.map((_a, _b) => false));
  };

  function getStepElement(step: number): JSX.Element {
    return children[step];
  }

  function handleSubmit() {
    console.log("submit");
  }

  return (
    <div>
      {getStepElement(idx)}
      <Stepper
        handleBack={handleMoveToPrevious}
        handleNext={handleMoveToNext}
        handleReset={handleLocalReset}
        handleMove={handleMoveTo}
        currentStep={idx}
        handleSubmit={handleSubmit}
      >
        {children.map((child, index) => (
          <Step
            label={child.props.label}
            completed={visited[index]}
            key={index}
            onClick={() => handleMoveTo(index)}
          >
            <div>Step {index}</div>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default StepperDemo;
