import React from "react";
import { weatherIconUrl } from "../services/callWeatherAPI";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Card';

function Hourly({ title, items, units, setUnits }) {

  const handleUnitsLogoChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const unitLogo = units === "metric" ? "C" : "F";

  return (
      <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px", marginBottom: "20px" }}>
      <div className="hourly">
        <p>{title}</p>
        <hr/>
      </div>
      <Paper className="hour-drawer" style={{ backgroundColor: '#f0f8ff00', boxShadow: "0px 0px #f0f8ff00" }}>
      <div className="forecast-hour">
        {items.map((item, index) => (
          <div
            className="hourCard"
            key={index}
          >
            <p>{item.title}</p>
            <img
              src={weatherIconUrl(item.icon)}
              alt=""
            />
            <p>{item.description}</p>
            <p onChange={handleUnitsLogoChange}>{`${item.temp.toFixed()}°${unitLogo}`}</p>
          </div>
        ))}
      </div>
      </Paper>
      </Card>
  );
}

export default Hourly;
