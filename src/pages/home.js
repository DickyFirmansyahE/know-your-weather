import React from "react";
// import { Link } from "react-router-dom";
import TopButtons from "../components/TopButtons";
import Inputs from "../components/Inputs";
import TimeAndLocation from "../components/TimeAndLocation";
import TemperatureAndDetails from "../components/TemperatureAndDetails";
import ForecastDaily from "../components/ForecastDaily";
import ForecastHour from "../components/ForecastHour";
import getFormattedWeatherData from "../services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Card from '@mui/material/Card';
import "react-toastify/dist/ReactToastify.css";

function HomePageWrapper() {
    const [query, setQuery] = useState({ q: "jakarta" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);
  
    useEffect(() => {
      const fetchWeather = async () => {
        const message = query.q ? query.q : "current location.";
  
        toast.info("Fetching weather for " + message);
  
        await getFormattedWeatherData({ ...query, units }).then((data) => {
          toast.success(
            `Successfully fetched weather for ${data.name}, ${data.country}.`
          );
  
          setWeather(data);
        });
      };
  
      fetchWeather();
    }, [query, units]);
  
    return (
      <div>
        <main>
        <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div className="main-content">
            <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 10px", marginBottom: "20px" }}>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} units={units} setUnits={setUnits} />
            </Card>
            <ForecastHour title="hourly forecast" items={weather.hourly} />
            <ForecastDaily title="daily forecast" items={weather.daily} />
          </div>
        )}
  </main>
        <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
      </div>
    );
  }

export default HomePageWrapper;