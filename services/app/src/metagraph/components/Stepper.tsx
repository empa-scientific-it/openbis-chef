import { Children, useEffect, useState } from "react";
import "./Stepper.css";
import "@src/App.css";

import {
  Stepper as MaterialStepper,
  StepButton,
  StepContent,
  StepLabel,
} from "@material-ui/core";

type Props = {
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  handleMove: (index: number) => void;
  handleSubmit: () => void;
  currentStep: number;
  children: JSX.Element[];
};

type StepProps = {
  label: string;
  completed?: boolean;
  children?: JSX.Element;
  onClick?: () => void;
};

export function Step({ label, completed, children, onClick }: StepProps): JSX.Element {
  return (
    <div className="step">
      <div
        key={label}
        className={"step-indicator" + (completed ? " completed" : " active")}
        onClick={() => onClick()}
      ></div>
      {children}
    </div>
  );
}

export function Stepper({
  handleBack,
  handleNext,
  handleReset,
  currentStep,
  handleMove,
  handleSubmit,
  children,
}: Props): JSX.Element {
  const handleNextStep = () => {
    handleNext();
  };

  const handlePreviousStep = () => {
    handleBack();
  };

  const handleLocalMove = (index: number) => {
    handleMove(index);
  };

  return (
    <div className="stepper-container">
      <div className="stepper-status-container">
        <button
          className="clickable-button stepper-button"
          onClick={handlePreviousStep}
          disabled={currentStep < 0}
        >
          Previous step
        </button>

        <div className="step-indicators-container">
          {children.map((child, index) => child)}
        </div>

        <button
          className="clickable-button stepper-button"
          onClick={handleNextStep}
          disabled={currentStep > children.length - 1}
        >
          Next step
        </button>
      </div>

      <button className="clickable-button stepper-button" onClick={handleReset}>
        Reset
      </button>

      <button className="clickable-button stepper-button" onClick={handleSubmit}>
        Finish
      </button>
    </div>
  );
}
