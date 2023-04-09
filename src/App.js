import React, { useState } from 'react'
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function Form() {
  const [carNumber, setCarNumber] = useState({});

  useEffect(() => {
    getCarNumber();
    const interval = setInterval(() => {
      getCarNumber();
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  function getCarNumber() {
    axios.get(`http://127.0.0.1:5000/store/car-number-for-check`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        setCarNumber(resp.data)
      })
  }

  return (
    <form>
      <div className='car-number'>
        {carNumber}
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Может заезжать:</h1>
      <Form />
    </div>
  );
}

export default App;
