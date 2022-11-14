import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { FaSearchLocation } from "react-icons/fa";
import { RiCelsiusFill,RiFahrenheitFill } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6 top-main">
      <Paper
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400, backgroundColor: "#ffffffbe", borderRadius: "20px", marginRight: "20px", boxShadow: "1px 2px #00000063" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontWeight: "500",
            'input': {
            '&::placeholder': {
              color: 'black'
            }
          } }}
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          placeholder="search location.."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", backgroundColor: "#393E46", borderRadius: "20px" }}>
        <IconButton type="button" sx={{ p: "10px", "&:hover": { backgroundColor: "#f7f7f763"}, color: "#ffffff" }} aria-label="search" onClick={handleSearchClick}>
          <FaSearchLocation size={20} />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton sx={{ p: "10px", "&:hover": { backgroundColor: "#f7f7f763"}, color: "#ffffff" }} aria-label="directions" onClick={handleLocationClick}>
          <TbLocation
            size={20}
            className="get_loc-button"
            
          />
        </IconButton>
        </Paper>
      </Paper>

      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", backgroundColor: "#E14D2A", borderRadius: "20px", boxShadow: "1px 2px #00000063" }}>
        <IconButton
          type="button"
          sx={{ p: "10px", "&:hover": { backgroundColor: "#393e4665"}, color: "#ffffff" }}
          name="metric"
          onClick={handleUnitsChange}>
        <RiCelsiusFill
          size={20}
        />
        </IconButton>
        <Divider 
        sx={{ height: 28, m: 0.5 }} 
        orientation="vertical" />
        <IconButton 
          sx={{ p: "10px", "&:hover": { backgroundColor: "#393e4665"}, color: "#ffffff" }} 
          name="imperial"
          onClick={handleUnitsChange}>
        <RiFahrenheitFill
          size={20}
        />
        </IconButton>
        </Paper>
    </div>
  );
}

export default Inputs;
