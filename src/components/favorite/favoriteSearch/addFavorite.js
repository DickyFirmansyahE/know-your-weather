import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FaSearchLocation } from "react-icons/fa";

const AddFavorite = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  }

  function handleChange({ target }) {
    setQuery(target.value);
  }

  return (
    <div className="add-fav">
      <Paper className="addfav-bar"
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: "2px 4px", display: "flex", justifyContent: "center", alignItems: "center", width: 500, backgroundColor: "#ffffffbe", borderRadius: "20px", boxShadow: "1px 2px #00000063" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontWeight: "500",
            'input': {
            '&::placeholder': {
              color: 'black'
            }
          } }}
          value={query}
          onChange={handleChange}
          placeholder="search location.."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Paper
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", backgroundColor: "#393E46", borderRadius: "20px" }}>
        <IconButton type="submit" sx={{ p: "10px", "&:hover": { backgroundColor: "#f7f7f763"}, color: "#ffffff" }} aria-label="search">
          <FaSearchLocation size={20} />
        </IconButton>
        </Paper>
      </Paper>
    </div>
  );
};

AddFavorite.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddFavorite;
