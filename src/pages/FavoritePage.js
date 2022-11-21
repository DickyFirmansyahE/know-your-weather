import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  InputBase,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LoginRounded, Search, Place } from "@mui/icons-material";

export default function FavoritePage() {
  const [authed, setAuthed] = useState(true);
  const [search, setSearch] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});
  const dummyData = [];
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
          "Has data"
        )}
      </Container>
    </>
  );
}
