import { useState } from "react";
import "./Stepper.css";
import "@src/App.css";

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
      ev.preventDefault();
      handleMove(index);
      setLocalStep(index);
    };
  };

  return (
    <div className="stepper-container">
      <button className="clickable-button stepper-button" onClick={handlePreviousStep} disabled={localStep < 1}>
        Previous step
      </button>
      <button className="clickable-button stepper-button" onClick={handleNextStep} disabled={localStep >= maxSteps}>
        Next step
      </button>

      <div className="step-indicators-container">
        {Array.from({ length: maxSteps + 1 }, (value, index) => index).map(
          (index) => (
            <div
              key={index}
              className={"step-indicator" + (index < localStep ? " completed" : (index > localStep ? " inactive" : ""))}
              onClick={handleLocalMove(index)}
            />
          ),
        )}
      </div>
    </div>
  );
}
