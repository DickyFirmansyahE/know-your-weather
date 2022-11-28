import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function BottomNavBar() {
    const [value, setValue] = React.useState('');
  
    const handleLableChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation
        className="someClass"
        sx={{ display: "none", maxwidth: "100%", justifyContent: "space-between", position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#404258", color: "white"}} 
        value={value} 
        onChange={handleLableChange}>
        <BottomNavigationAction
          component={Link}
          to="/"
          sx={{ color: "white", "&:hover": { color: "#E14D2A" }, "&.Mui-selected": {
            color: "#E14D2A"
          } }}
          label="Home"
          value="Home"
          icon={<AiFillHome size={25} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/favorite"
          sx={{ color: "white", "&:hover": { color: "#E14D2A" }, "&.Mui-selected": {
            color: "#E14D2A"
          } }}
          label="Favorites"
          value="Favorites"
          icon={<MdFavorite size={25} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/aboutus"
          sx={{ color: "white", "&:hover": { color: "#E14D2A" }, "&.Mui-selected": {
            color: "#E14D2A"
          } }}
          label="About Us"
          value="About Us"
          icon={<BsFillPersonLinesFill size={25} />}
        />
      </BottomNavigation>
    );
  }