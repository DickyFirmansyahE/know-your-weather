import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import Tooltip from '@mui/material/Tooltip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import profile from '../services/profile-data';

export default function AboutContent() {
  return (
    <div className="paper-container">
    <Paper 
        sx={{ padding: "14px 12px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", backgroundColor: "#ffffffbe", borderRadius: "20px", boxShadow: "1px 2px #00000063" }}>
    <h1 className="text-title">WHO W<span className='text-title2'>E ARE</span></h1>
    <Typography variant="body2" color="text.secondary" sx={{marginTop:"20px", fontSize:"18px", fontWeight:"bold"}}>Kami dari Tim Capstone C22-062 yang terbentuk karena sebuah tugas project akhir dari sebuah program Kampus Merdeka SIB Batch 3 dengan Mitra Dicoding. Dengan adanya website ini dapat membantu dan memfasilitasi pengguna agar mengetahui keadaan cuaca di daerah pengguna berada, sehingga dapat mengantisipasi keadaan untuk kedepannya.</Typography>
    <div className="AboutUs">
    {profile.map((profile) => (
    <Card 
      key={profile.id}
      sx={{ backgroundColor: '#00000046', borderRadius: "25px", padding: "20px 30px",  margin: "0 10px", marginTop: "20px"}}>
      <Grid display="flex" justifyContent="center" alignItems="center">
      <CardMedia sx={{borderRadius: "100px", maxWidth:"155px", marginTop:"30px !important"}}
        component="img"
        height="155"
        image= {profile.photo}
        alt=""
      />
      </Grid>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {profile.nama}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"15px", marginTop:"20px"}}>
        {profile.text}
        </Typography>
      </CardContent>
      <CardActions>
      <Grid container justifyContent="center">
      <Tooltip title="LinkedIn">
      <Link href={profile.socialMedia} target="_blank" rel="noopener">
      <IconButton> 
      <LinkedInIcon  sx={{ fontSize: 40 }} />
      </IconButton>
      </Link>
      </Tooltip>
      </Grid>
      </CardActions>
    </Card>
    ))}
    </div>
    </Paper>
    </div>
  );
}