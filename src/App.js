import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
 // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=32fa52ae0be6a8074e9cf7731c9c4521`
  const [data, setData] = useState('')
 
 
 return (
    <div className="app">
       <input type="text" className="" placeholder="Enter Location" ></input>  
       <div className="city">
          <h2>City</h2>
          <p>Temp &#8457;</p>
          <p>Clouds</p>
       </div>

       <div className="container-props">
          <div className="props">
            <p>Temp &#8457;</p>
            <p>Feels Like</p>
          </div>

          <div className="props">
            <p>Temp &#8457;</p>
            <p>Humidity</p>
          </div>

          <div className="props">
            <p>Temp &#8457;</p>
            <p>Wind</p>
          </div>
       </div>
    </div>
  );
}

export default App;
