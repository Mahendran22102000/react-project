import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = 'fe84f24cd9227a968bca1ed337fb8253'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeather(data);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Get Weather</button>
      </form>
      {weather && (
        <div style={styles.weatherInfo}>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '50px',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    width: '200px',
  },
  button: {
    padding: '10px',
    fontSize: '1em',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  weatherInfo: {
    marginTop: '20px',
  },
};

export default WeatherApp;
