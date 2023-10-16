import React, { useState,useEffect } from 'react';
import Slider from './Slider';
import axios from 'axios';
function Findcrop() {
  const [responseData, setResponseData] = useState({});
  const [values, setValues] = useState({
    value1: 1,
    value2: 1,
    value3: 1,
    value4: 1,
    value5: 1,
    value6: 1,
    value7: 1})
  const getdata = (newValue, propertyName) => {
    setValues((prevValues) => ({
      ...prevValues,
      [propertyName]: newValue,
    }));
  };
  useEffect(() => {
    console.log(values);
  }, [values]);

  const getthecrop = async () => {
    const valuesArray = Object.values(values);
    try {
      const response = await axios.post('http://localhost:5000/prediction',valuesArray);
      // Assuming the response is JSON, you can access the data like this:
      const data = response.data;
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
      <Slider label="N" min="0" max="100" step="0.01" getdataa={getdata}  propName="value1"/>
      <Slider label="P" min="0" max="100" step="0.01" getdataa={getdata}  propName="value2"/>
      <Slider label="K" min="0" max="100" step="0.01" getdataa={getdata}  propName="value3"/>
      <Slider label="temperature" min="0" max="100" step="0.01" getdataa={getdata}  propName="value4"/>
      <Slider label="humidity"min="0" max="100" step="0.01" getdataa={getdata}  propName="value5"/>
      <Slider label="PH" min="0" max="14" step="0.5" getdataa={getdata}  propName="value6"/>
      <Slider label="rainfall" getdataa={getdata}  propName="value7"/>
      <button onClick={getthecrop}>
            Find Your crop
      </button>
    </div>
  );
}		

export default Findcrop;
