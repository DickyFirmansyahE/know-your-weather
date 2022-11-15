import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";


export default function MediaCard() {
  return (
    <Paper
        sx={{ p: "2px 4px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", backgroundColor: "#ffffffbe", borderRadius: "20px", marginRight: "20px", boxShadow: "1px 2px #00000063" }}>

    <h1 className="text-title">Who we are</h1>
    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className="AboutUs">
    <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px", marginBottom: "20px",  margin: "0 10px" }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Andi Paris Bachtiar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px", marginBottom: "20px", margin: "0 10px"  }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Azmiy Thuffail 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px", marginBottom: "20px", margin: "0 10px" }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dicky Firmansyah
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px", marginBottom: "20px", margin: "0 10px" }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Naufal Anas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>

    </div>
    </Paper>
  );
}