import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  InputBase,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LoginRounded, Search, Place, SyncRounded, DeleteRounded } from "@mui/icons-material";

export default function FavoritePage() {
  const [authed, setAuthed] = useState(true);
  const [search, setSearch] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});
  const dummyData = [{
    id: 1,
    city: "Cimahi", 
    region: "ID",
    temp: 32,
    status: "Rain"
  },{
    id: 2,
    city: "Bandung", 
    region: "ID", 
    temp: 36, 
    status: "Cloud"
  },{
    id: 3,
    city: "Garut", 
    region: "ID", 
    temp: 33, 
    status: "Rain"
  },{
    id: 4,
    city: "Jakarta", 
    region: "ID", 
    temp: 40, 
    status: "Rain"
  }];
  const mobile = useMediaQuery("(max-width:400px)");

  // unauthed user
  if (!authed) {
    return (
      <Container maxWidth='md' sx={{ minHeight: "100vh" }}>
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: 300,
            },
            mt: "25vh",
            mr: "auto",
            ml: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <CardContent>
            <Typography
              variant='h5'
              sx={{ mb: 1.5, textAlign: "left", color: "white" }}
              component='div'
            >
              Please login
            </Typography>
            <Typography
              variant='body1'
              sx={{ mb: 1.5, textAlign: "left", color: "white" }}
            >
              To save your favorite location
            </Typography>
          </CardContent>
          <CardActions>
            <LinkRouter to='/login'>
              <Link
                component='button'
                underline='none'
                variant='body1'
                sx={{ ml: "8px", color: "white", display: "flex" }}
              >
                <Box component='span'>Login</Box>
                <Box component='span' sx={{ ml: "10px" }}>
                  <LoginRounded />
                </Box>
              </Link>
            </LinkRouter>
          </CardActions>
        </Card>
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth='md' sx={{ minHeight: "100vh", mt: "15vh" }}>
        <Stack
          direction='row'
          spacing={0}
          justifyContent='center'
          alignItems='center'
          sx={{
            mb: "25px",
          }}
        >
          <Paper
            component='form'
            sx={{
              p: "4px",
              display: "flex",
              alignItems: "center",
              width: 300,
              backgroundColor: "white",
              borderRadius: "50px",
            }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder={
                mobile ? "Find location" : "Find your favorite location"
              }
              inputProps={{ "aria-label": "search favorite location" }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(e.target.value);
              }}
            />
          </Paper>
          <Box component='span' sx={{ m: 0 }}>
            <IconButton
              aria-label='search-location'
              size='large'
              sx={{ color: "white" }}
              onClick={(e) => {
                console.log(search);
              }}
            >
              <Search />
            </IconButton>
          </Box>
          <Box component='span' sx={{ m: 0 }}>
            <IconButton
              aria-label='current-location'
              size='large'
              sx={{ color: "white" }}
              onClick={(e) => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition((position) => {
                    let lat = position.coords.latitude;
                    let long = position.coords.longitude;

                    setCurrentLocation({ lat, long });
                  });
                }

                console.log(currentLocation);
              }}
            >
              <Place />
            </IconButton>
          </Box>
        </Stack>

        {dummyData.length < 1 ? (
          <Card
            sx={{
              width: "100%",
              mr: "auto",
              ml: "auto",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <CardContent>
              <Typography
                variant='h6'
                sx={{ my: 1.5, textAlign: "center", color: "white" }}
                component='div'
              >
                Your favorite location is empty
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
              {dummyData.map(value => (
                <Grid item xs={2} sm={4} md={4} key={value.id}>
                  <Card
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      display: "flex",
                      flexDirection: "row", 
                      justifyContent: "space-between", 
                      minHeight: {
                        xs: "125px",
                        sm: "150px", 
                        md: "150px"
                      }
                    }}
                  >
                    <CardContent
                      sx={{
                        alignItems: "center", 
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,  
                        justifyContent: "space-evenly", 
                        paddingRight: "8px",
                        width: "100%"
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ mb: 1.5, textAlign: "center", color: "white" }}
                        component='div'
                      >
                        {value.city}, {value.region}
                      </Typography>
                      <Box component='div' sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Typography
                          variant='h6'
                          sx={{
                            textAlign: "center", 
                            color: "white", 
                            fontSize: "1.4rem", 
                            fontWeight: "bold" 
                          }}
                          component='div'
                        >
                          {value.temp}°C
                        </Typography>
                        <Typography
                          variant='h6'
                          sx={{ 
                            textAlign: "center", 
                            color: "white", 
                            fontSize: "1rem", 
                            fontWeight: "normal" 
                          }}
                          component='div'
                        >
                          {value.status}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        p: 0
                      }}
                    >
                      <Box component='div' sx={{ 
                        alignItems: "center",
                        backgroundColor: "rgba(0, 200, 247, 1)",
                        display: "flex",
                        flexBasis: "50%",
                        justifyContent: "center", 
                        m: 0,
                        ml: "8px", 
                       }}
                      >
                        <IconButton
                          aria-label='synchronize-location'
                          size='small'
                          sx={{ color: "white" }}
                          onClick={(e) => {
                            console.log("synchronize");
                            console.log(value);
                          }}
                        >
                          <SyncRounded />
                        </IconButton>
                      </Box>
                      <Box component='div' sx={{
                        alignItems: "center", 
                        display: "flex", 
                        backgroundColor: "rgba(255, 150, 0, 1)",
                        flexBasis: "50%",
                        justifyContent: "center", 
                        m: 0,
                       }}
                      >
                        <IconButton
                          aria-label='delete-location'
                          size='small'
                          sx={{ color: "white" }}
                          onClick={(e) => {
                            console.log("delete");
                            console.log(value);
                          }}
                        >
                          <DeleteRounded />
                        </IconButton>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Container>
    </>
  );
}
