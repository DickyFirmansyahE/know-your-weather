import React from "react";
import { formatToLocalTime } from "../../services/callWeatherAPI";

function LocationTime({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="time-location">
      <div className="time">
        <p>
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="location">
        <p>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default LocationTime;
