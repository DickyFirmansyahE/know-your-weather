import React from 'react';
import Box from '@mui/material/Box';

export default function FooterApp() {
  
    return (
      <Box component="footer"
        sx={{
            padding: "30px 0",
            backgroundColor: "#E14D2A"
        }}>
        <p className="copyright">All data obtained from <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather</a></p>
      </Box>
    );
  }

