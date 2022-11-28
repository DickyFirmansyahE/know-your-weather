import React, { useEffect } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
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
import { auth, logout } from "../firebase";

export default function FavoritePage() {
  const [user, loading ] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  // unauthed user
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
          <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
        </Card>
      </Container>
    );
}
