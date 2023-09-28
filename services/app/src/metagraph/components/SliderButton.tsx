import React, { useState, useEffect, useContext, useMemo } from "react";

import "./SliderButton.css";

type props = {
  onClick: (choice: string) => void;
  choices: string[];
  id: string;
};

function SliderButton({ onClick, choices, id }: props) {
  const [currentChoice, setCurrentChoice] = useState(choices[0]);

  const handleLocalClick = (choice: string) => {
    setCurrentChoice(choice);
    onClick(choice);
  }
  return (
    <div className="slider-buttons" id={id}>
      {choices.map((choice) => {
        return (
          <button key={choice} className={(currentChoice == choice ? "slider-chosen" : "slider-choice")} onClick={() => handleLocalClick(choice)}>
            {choice}
          </button>
        );
      })}
    </div>
  );
}

export default SliderButton;
