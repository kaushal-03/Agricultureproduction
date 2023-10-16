import React from "react";
import { useState } from "react";
const Slider = (props) => {
  const [angle, setAngle] = useState(1);
  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setAngle(newValue);
    props.getdataa(newValue, props.propName);
  };
  return (
    <div className="circular-slider">
      <label>{props.label}:</label>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={handleChange}
      />
      <div className="slider-value">{angle.toFixed(2)}</div>
    </div>
  );
};

export default Slider;
