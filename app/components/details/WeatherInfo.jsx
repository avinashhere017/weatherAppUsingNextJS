import React, { useState } from "react";
import moment from "moment";
import { FaCloud, FaSun, FaSnowflake, FaSmog, FaCloudRain } from "react-icons/fa";

const Weather = ({ currentWeather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const formatDateTime = (timestamp) => {
    return moment.unix(timestamp).format("dddd, MMMM D, YYYY HH:mm");
  };

  const getWeatherIcon = (weatherDescription) => {
    switch (weatherDescription.toLowerCase()) {
      case "clear sky":
        return <FaSun />;
      case "few clouds":
      case "scattered clouds":
      case "broken clouds":
        return <FaCloud />;
      case "rain":
        return <FaCloudRain />;
      case "snow":
        return <FaSnowflake />;
      case "mist":
      case "smoke":
      case "haze":
      case "dust":
      case "fog":
      case "sand":
      case "ash":
      case "squall":
      case "tornado":
        return <FaSmog />;
      default:
        return null;
    }
  };

  const convertTemperature = (temp) => {
    if (isCelsius) {
      return temp;
    } else {
      return (temp * 9) / 5 + 32;
    }
  };

  return (
     <div className="bg-gradient-to-b from-blue-900 to-blue-500 p-4 md:p-8 rounded-lg mb-8 text-white">
    <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-2">{currentWeather.name}</h2>
          <p className="text-base md:text-lg mb-2">{formatDateTime(currentWeather.dt)}</p>
          <p className="text-base md:text-lg mb-2">Humidity: {currentWeather.main.humidity}%</p>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            {getWeatherIcon(currentWeather.weather[0].description)}
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg">{currentWeather.weather[0].description}</p>
            <div className="flex items-center">
              <p className="text-sm md:text-base">
                High: {convertTemperature(currentWeather.main.temp_max).toFixed(1)}°{isCelsius ? "C" : "F"}
              </p>
              <p className="text-sm md:text-base ml-4">
                Low: {convertTemperature(currentWeather.main.temp_min).toFixed(1)}°{isCelsius ? "C" : "F"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded cursor-pointer w-full md:w-auto" onClick={toggleUnit}>
        {isCelsius ? "Switch to Fahrenheit" : "Switch to Celsius"}
      </button>
    </div>
  );
};

export default Weather;
