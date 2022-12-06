import React from "react";
import { formatToLocalTime, weatherIconUrl } from "../../services/callWeatherAPI";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { RiTempHotLine } from "react-icons/ri";

import { IoWater } from "react-icons/io5";
import { TbWind } from "react-icons/tb";
import { FiSunrise, FiSunset } from "react-icons/fi";

import Paper from '@mui/material/Card';

export default function WeatherDetails({
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
  const unitLogo2 = units === "metric" ? "m/s" : "mph";

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
            <RiTempHotLine size={20} />
            <p className="items">
              Real feel:
              <span>{` ${feels_like.toFixed()}°${unitLogo}`}</span>
            </p>
          </div>

          <div className="real-feel">
            <IoWater size={20} />
            <p className="items">
              Humidity:
              <span>{` ${humidity}%`}</span>
            </p>
          </div>
          <div className="real-feel">
            <TbWind size={20} />
            <p className="items">
              Wind:
              <span>{` ${speed.toFixed()} ${unitLogo2}`}</span>
            </p>
          </div>
        </div>
      </div>

      <Paper className="bottom-detail-drawer" style={{ backgroundColor: '#f0f8ff00', boxShadow: "0px 0px #f0f8ff00" }}>
      <div className="bottom-detail">
        <div className="little-detail">
          <FiSunrise size={20} />
          <p className="small-details">
            {`Rise: `}
            <span>
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>

        <div className="little-detail">
          <FiSunset size={20} />
          <p className="small-details">
            {`Set: `}
            <span>
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>

        <div className="little-detail">
          <FaTemperatureHigh size={20} />
          <p className="small-details">
            {`High: `}
            <span>{`${temp_max.toFixed()}°${unitLogo}`}</span>
          </p>
        </div>
        <div className="little-detail">
          <FaTemperatureLow size={20} />
          <p className="small-details">
            {`Low: `}
            <span>{`${temp_min.toFixed()}°${unitLogo}`}</span>
          </p>
        </div>
      </div>
      </Paper>
    </div>
  );
}
