import React, { useState } from 'react';
import { getAxiosInstance } from '../axiosInstance';

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const axiosInstance = await getAxiosInstance();
      const response = await axiosInstance.get('/');
      setData(response.data);
      console.log('Data fetched:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Test Env</h1>
      <button onClick={fetchData}>Load Data</button>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Click the button to load data</p>}
    </div>
  );
};

export default App;