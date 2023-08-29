import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Stepper.css";

type Props = {
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  handleMove: (index: number) => void;
  currentStep: number;
  maxSteps: number;
};

export function Stepper({
  handleBack,
  handleNext,
  handleReset,
  currentStep,
  maxSteps,
  handleMove,
}: Props): JSX.Element {
  const [localStep, setLocalStep] = useState(currentStep);

  const handleNextStep = () => {
    handleNext();
    setLocalStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    handleBack();
    setLocalStep((prev) => prev - 1);
  };

  const handleLocalMove = (index: number) => {
    return (ev: Event) => {
      console.log(index);
      ev.preventDefault();
      console.log("handleLocalMove");
      handleMove(index);
      setLocalStep(index);
    };
  };

  return (
    <div className="step-container">
      {localStep > 0 ? (
        <button className="clickable" onClick={handlePreviousStep}>
          Previous step
        </button>
      ) : null}
      {localStep < maxSteps ? (
        <button className="clickable" onClick={handleNextStep}>
          Next step
        </button>
      ) : null}
      <div className="step-indicators">
        {Array.from({ length: maxSteps }, (value, index) => index).map(
          (index) => (
            <div
              key={index}
              className={`step-indicator clickable ${
                index <= localStep ? "completed" : "inactive"
              }`}
              onClick={handleLocalMove(index)}
            />
          ),
        )}
      </div>
      <div className="step-info">
        Step {currentStep + 1} of {maxSteps}
      </div>
    </div>
  );
}
