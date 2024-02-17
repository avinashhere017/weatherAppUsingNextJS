"use client"
import React, { useEffect, useState } from "react";
import Weather from "../components/details/WeatherInfo";
import Link from 'next/link';
import Forecast from "../components/details/Forecast";

export default function DetailPage({ searchParams: { city }}) {
  // console.log(city);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [errorAlert, setErrorAlert] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = async (city) => {
    const apikey = "939479a9847a86a7404158ce2ac427ac";
    const commonUrl = "https://api.openweathermap.org/data/2.5";
    const weatherUrl = `${commonUrl}/weather?q=${city}&appid=${apikey}&units=metric`;
    const forecastUrl = `${commonUrl}/forecast?q=${city}&appid=${apikey}&units=metric`;

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(weatherUrl),
        fetch(forecastUrl),
      ]);

      if (weatherResponse.ok && forecastResponse.ok) {
        const weatherData = await weatherResponse.json();
        setCurrentWeather(weatherData);

        const forecastData = await forecastResponse.json();
        setForecastData(forecastData.list.slice(0, 5 * 8));

        setErrorAlert(null);
      } else {
        setErrorAlert("Invalid city name.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setErrorAlert("An error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="text-center">
        <h1 className="text-3xl font-bold mb-4">YOUR ARE IN THE DETAIL PAGE! </h1>
        {errorAlert && <div className="text-red-500 m-4">{errorAlert}</div>}
        {currentWeather && (
          <div>
            <Weather currentWeather={currentWeather} />
            {forecastData && <Forecast forecastData={forecastData} />}
          </div>
        )}
      </main>
      <footer className="text-center mt-8">
        <Link href="/search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Search Page
        </Link>
      </footer>
    </div>
  );
}
