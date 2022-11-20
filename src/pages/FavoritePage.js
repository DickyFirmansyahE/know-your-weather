import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

export default function FavoritePage() {
  const [authed, setAuthed] = useState(false);

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
              For save your favorite place
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
                  <LoginRoundedIcon />
                </Box>
              </Link>
            </LinkRouter>
          </CardActions>
        </Card>
      </Container>
    );
  }
}
