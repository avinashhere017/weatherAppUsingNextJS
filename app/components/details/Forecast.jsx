
import React from "react";
import moment from "moment";

const Forecast = ({ forecastData }) => {

  const currentDate = moment().format("YYYY-MM-DD");
  const filteredForecastData = forecastData.filter(entry => moment(entry.dt_txt).format("YYYY-MM-DD") !== currentDate);


  const dailyForecastData = filteredForecastData.filter((entry, index, self) =>
    index === self.findIndex((t) => (
      moment(entry.dt_txt).format("YYYY-MM-DD") === moment(t.dt_txt).format("YYYY-MM-DD")
    ))
  );

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {dailyForecastData.map((dailyEntry, index) => (
          <div key={index} className="p-4 md:p-8 rounded-lg shadow-md bg-gray-100 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">{moment(dailyEntry.dt_txt).format("DD/MM/YYYY")}</h3>
            <p className="text-base">{dailyEntry.weather[0].description}</p>
            <p className="text-lg font-bold">{dailyEntry.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
