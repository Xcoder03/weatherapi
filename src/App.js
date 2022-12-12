import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
 
  const [data, setData] = useState({});
  const [location,setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=32fa52ae0be6a8074e9cf7731c9c4521`

  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
        setLocation('')
      })
    }
  }
 
 
 return (
    <div className="app">
       <input value={location} type="text" className=""
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"/>

       <div className="city">
          <h2>{data.name}</h2>
         {data.main ? <p>{data.main.temp} &#8457;</p> : null }
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
