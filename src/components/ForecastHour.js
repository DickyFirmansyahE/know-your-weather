import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import Card from '@mui/material/Card';

function ForecastHour({ title, items }) {
  console.log(items);
  return (
    <div>
      <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px" }}>
      <div className="hourly">
        <p className="">{title}</p>
        <hr className="my-2" />
      </div>
      <div className="forecast-hour">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{item.description}</p>
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
      </Card>
    </div>
  );
}

export default ForecastHour;
