import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, weatherIconUrl } from "../services/callWeatherAPI";
import Paper from '@mui/material/Card';

export default function TempDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
  units,
  setUnits,
}) {
  const handleUnitsLogoChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const unitLogo = units === "metric" ? "C" : "F";

  return (
    <div>
      <div className="temp-detail">
        <div className="detail-icon">
          <p>{details}</p>
          <img src={weatherIconUrl(icon)} alt=""/>
        </div>

        <div className="temp-units">
          <p
            onChange={handleUnitsLogoChange}
          >{`${temp.toFixed()}°${unitLogo}`}</p>
        </div>
        <div className="right-detail">
          <div className="real-feel">
            <UilTemperature size={20} />
            <p className="items">
              Real feel:
              <span>{` ${feels_like.toFixed()}°`}</span>
            </p>
          </div>

          <div className="real-feel">
            <UilTear size={20} />
            <p className="items">
              Humidity:
              <span>{` ${humidity.toFixed()}%`}</span>
            </p>
          </div>
          <div className="real-feel">
            <UilWind size={20} />
            <p className="items">
              Wind:
              <span>{` ${speed.toFixed()} km/h`}</span>
            </p>
          </div>
        </div>
      </div>

      <Paper className="bottom-detail-drawer" style={{ backgroundColor: '#f0f8ff00', boxShadow: "0px 0px #f0f8ff00" }}>
      <div className="bottom-detail">
        <div className="little-detail">
          <UilSun />
          <p>
            Rise:{" "}
            <span>
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>

        <div className="little-detail">
          <UilSunset />
          <p>
            Set:{" "}
            <span>
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>

        <div className="little-detail">
          <UilSun />
          <p>
            High:{" "}
            <span>{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <div className="little-detail">
          <UilSun />
          <p className="font-light">
            Low:{" "}
            <span>{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
      </Paper>
    </div>
  );
}
