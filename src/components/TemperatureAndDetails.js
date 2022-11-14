import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

export default function TemperatureAndDetailsTemperatureAndDetails({
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
  units, setUnits
})

{

  const handleUnitsLogoChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const unitLogo = units === 'metric' ? 'C' : 'F';

  return (
      <div>
        <div className="temp-detail">
      <div className="detail-icon">
        <p>{details}</p>
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
      </div>

      <div className="temp-units">
        <p className="text-5xl" onChange={handleUnitsLogoChange}>{`${temp.toFixed()}°${unitLogo}`}</p>
        </div>
        <div className="real-feel">
          <p className="items">
            <UilTemperature size={20} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{` ${feels_like.toFixed()}°`}</span>
          </p>
          <p className="items">
            <UilTear size={20} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{` ${humidity.toFixed()}%`}</span>
          </p>
          <p className="items">
            <UilWind size={20} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{` ${speed.toFixed()} km/h`}</span>
          </p>
        </div>
      
      </div>

      <div className="bottom-detail">
      <div className="little-detail">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        </div>
        
        <div className="little-detail">
        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        </div>
        
        <div className="little-detail">
        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        </div>
        <div className="little-detail">
        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
        </div>
      </div>
    </div>
  );
}
