import { useState } from "react";
import { Sample } from "@src/openbis/dto";
import { LoggerInterface } from "../useLog";
import WorkflowEnd from "./WorkflowEnd";
import { Stepper, Step } from "./Stepper";
import { useList } from "../useList";

function WorkflowPages({
  handleMove,
  handleSubmit,
  handlePreviousStep,
  handleNextStep,
  handleReset,
  children,
  logger,
  hierarchyRoot
}: {
  handleMove: (index: number) => void;
  handleSubmit: () => void;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  handleReset: () => void;
  children: JSX.Element[];
  logger: LoggerInterface;
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
    checkWorkflowFinished()
  };

  const checkWorkflowFinished = () => {
    if (visited.reduce((cur, sum) => sum && cur) && idx === children.length - 1) {
      setWorkflowFinished(() => true);
    }
  }

  const handleMoveToNext = () => {
    next();
    handleNextStep();
    setVisited(true, idx);
    checkWorkflowFinished();
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

  return (
    <>
      {workflowFinished
        ? WorkflowEnd(logger, childrenFinished, hierarchyRoot, handleSubmit)
        : getStepElement(idx)
      }
      <Stepper
        handleBack={handleMoveToPrevious}
        handleNext={handleMoveToNext}
        handleReset={handleLocalReset}
        handleMove={handleMoveTo}
        currentStep={idx}
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
    </>
  );
}

export default WorkflowPages;
