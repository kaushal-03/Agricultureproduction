// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleAboutClick1 = () => {
    navigate("/findcrop");
  };

  const handleAboutClick2 = () => {
    navigate("/optimal");
  };

  return (
    <div className="main">
      <div className="landing">
        <div className="buttons">
          <button onClick={handleAboutClick} className="bb">
            About
          </button>
          <button onClick={handleAboutClick1} className="bb">
            Find Crop
          </button>
          <button onClick={handleAboutClick2} className="bb">
            Optimal Conditions
          </button>
        </div>
        <div className="title">
          <h1>groWise</h1>
        </div>
        <div className="about">
          <p>
            Are you a farmer or a gardener looking for the perfect crop to grow
            in your fields or garden? Look no further! Our innovative platform
            provides you with expert recommendations based on the nutritional
            needs of your soil and local environmental conditions.
          </p>
        </div>
        <div className='widgets'>
        <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
