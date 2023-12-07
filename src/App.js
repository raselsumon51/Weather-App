import React, { useState } from "react";
import './App.css'

function App() {
  const apiKey = 'b52d59311b1bebf2d687f5356604ea89';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data => setWeatherData(data)
          // console.log(data)
          // // setCity("")
        )
    }
  }

  return (
    <div className="container">
      <h1>Weather Details</h1>
      <input
        className="input"
        placeholder="Enter City Name"
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div className="">
          <p className="hints">Welcome to weather app! Enter in a city to get the weather of.</p>
        </div >
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{weatherData.main.temp} F</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )
      }

    </div>
  );
}

export default App;
