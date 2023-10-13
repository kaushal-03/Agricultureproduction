import React, { useState } from 'react';

function Findcrop() {
  const [angle, setAngle] = useState(1);
  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setAngle(newValue);
  };

  return (
    <div className="circular-slider">
      <input
        type="range"
        min="0"
        max="14"
        step="0.01"
        value={angle}
        onChange={handleChange}
      />
      <div className="slider-value">{angle.toFixed(2)}</div>
    </div>
  );
}

export default Findcrop;
