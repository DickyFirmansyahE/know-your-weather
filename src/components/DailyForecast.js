import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import Card from '@mui/material/Card';

function Daily({ title, items }) {
  return (
    <div>
      <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px", marginBottom: "20px" }}>
      <div className="hourly">
        <p>{title}</p>
        <hr/>
      </div>
      <div className="forecast-hour">
        {items.map((item, index) => (
          <div
            key={index}
          >
            <p>{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt=""
            />
            <p>{item.description}</p>
            <p>{`${item.temp.toFixed()}°`}/{`${item.tempmax?.toFixed()}°`}</p>
          </div>
        ))}
      </div>
      </Card>
    </div>
  );
}

export default Daily;
