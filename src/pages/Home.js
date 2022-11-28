import React from "react";
// import { Link } from "react-router-dom";
import TopCities from "../components/TopCity";
import SearchLocation from "../components/SearchLocation";
import LocationTime from "../components/LocaTIme";
import TempDetails from "../components/TempDetails";
import Daily from "../components/DailyForecast";
import Hourly from "../components/HourlyForecast";
import getWeatherData from "../services/callWeatherAPI";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import "react-toastify/dist/ReactToastify.css";

function Home() {
    const [query, setQuery] = useState({ q: "jakarta" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);
  
    useEffect(() => {
      const fetchWeather = async () => {
  
        await getWeatherData({ ...query, units }).then((data) => {
  
          setWeather(data);
        });
      };
  
      fetchWeather();
    }, [query, units]);
  
    return (
      <div className="main">
          <TopCities setQuery={setQuery} />
          <SearchLocation setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div className="main-content">
            <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 10px", marginBottom: "20px" }}>
            <LocationTime weather={weather} />
            <TempDetails weather={weather} units={units} setUnits={setUnits} />
            </Card>
            <Hourly title="hourly forecast" items={weather.hourly} />
            <Daily title="daily forecast" items={weather.daily} />
          </div>
        )}
      </div>
    );
  }

export default Home;