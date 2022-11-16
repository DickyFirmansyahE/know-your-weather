import React from 'react';
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
          sx={{ color: "white", "&:hover": { color: "#E14D2A !important" } }}
          label="Home"
          value="Home"
          icon={<AiFillHome size={20} />}
        />
        <BottomNavigationAction
          sx={{ color: "white", "&:hover": { color: "#E14D2A !important" } }}
          label="Favorites"
          value="Favorites"
          icon={<MdFavorite size={20} />}
        />
        <BottomNavigationAction
          sx={{ color: "white", "&:hover": { color: "#E14D2A !important" } }}
          label="About Us"
          value="About Us"
          icon={<BsFillPersonLinesFill size={20} />}
        />
      </BottomNavigation>
    );
  }