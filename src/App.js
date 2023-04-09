import React, { useState } from 'react'
import './App.css';
import axios from 'axios';

function Form() {
  const [carNumber, setCarNumber] = useState();
  function getCarNumber() {
    axios.get(`http://127.0.0.1:5000/store/car-number-for-check/`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        setCarNumber(resp.data)
      })
  }

  getCarNumber();
  setInterval(getCarNumber, 60000);

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
