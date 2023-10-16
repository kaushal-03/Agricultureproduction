import React, { useEffect } from 'react'
import axios from 'axios';
const Optimal = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stats');
        // Assuming the response is JSON, you can access the data like this:
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Call the async function immediately
  }, []);
  
  return (
    <div>Optimal</div>
  )
}

export default Optimal