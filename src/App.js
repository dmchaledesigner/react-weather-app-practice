import React, { useState, useEffect } from 'react';


import Form from './components/Form';
import WeatherCard from './components/weathercard/WeatherCard';


import './styles/app.scss';


function App() {

  const [temp, setTemp] = useState();
  const [city, setCity] = useState('sydney');
  const [country, setCountry] = useState('');
  const [condition, setCondition] = useState('');
  const [input, setInput] = useState('');




  // set variables
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=`;
  const auth = "cd6a745855cce97c6801e9c658f5a8d3";



  //weather data fetch Function
  const weatherData = async () => {
    try {

      const request = await fetch(`${url}${auth}`, {
        method: 'GET',
        headers: {
          Accept: 'application.json',
        }
      })

      const resJson = await request.json()
      return resJson;

    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {

  }, [])





  return (
    <div className="app">



      <WeatherCard temp={temp} city={city} country={country} condition={condition} />
      <Form
        input={input}
        setInput={setInput}
        city={city}
        setCity={setCity}
        setCondition={setCondition}
        setCountry={setCountry}
        setTemp={setTemp}
        weatherData={weatherData}

      />
    </div>

  );
}

export default App;
