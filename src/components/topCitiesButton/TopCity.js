/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cities from "../../services/local-data";
import Stack from '@mui/material/Stack';

function TopCities({ setQuery }) {

  return (
    <Stack direction="row"
      className="top-cities"
      sx={{ marginTop: "20px" }}>
      {cities.map((city) => (
        <a
          className="top-button"
          key={city.id}
          onClick={() => setQuery({ q: city.title })}>{city.title}</a>
      ))}
    </Stack>
  );
}

export default TopCities;
