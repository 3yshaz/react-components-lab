// src/components/WeatherForecast/WeatherForecast.jsx
import React from 'react';
import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <WeatherData day={day} conditions={conditions} time={time} />
      <WeatherIcon img={img} imgAlt={imgAlt} />
    </div>
  );
};

export default WeatherForecast;
