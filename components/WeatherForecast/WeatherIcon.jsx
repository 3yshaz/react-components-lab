// src/components/WeatherForecast/WeatherIcon.jsx
import React from 'react';

const WeatherIcon = ({ img, imgAlt }) => {
  return <img src={img} alt={imgAlt} />;
};

export default WeatherIcon;
