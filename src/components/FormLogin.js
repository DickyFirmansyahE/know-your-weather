/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import { MdLockOutline } from 'react-icons/md';

function FormLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/favorite");
  }, [user, loading]);

  return (
    <Box
      sx={{
        px: 1,
        py: 3,
        borderRadius: '25px',
        boxShadow: '0 15px 25px rgba(129, 124, 124, 0.2)',
        backgroundColor: '#00000046',
        color: '#fff',
      }}
    >
      <Typography component="h1" variant="h5" sx={{ fontSize: '1.5rem', fontWeight: '600' }}>Login</Typography>
      <Box component="form" sx={{ mx: 0.5 }}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          label="Email or Username"
          autoComplete="email"
          variant="standard"
          margin="normal"
          color="warning"
          required
          autoFocus
          fullWidth
          InputLabelProps={{
            style: { color: '#fff' }
          }}
          sx={{ input: { color: '#fff' } }}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          label="Password"
          autoComplete="current-password"
          variant="standard"
          color="warning"
          margin="normal"
          required
          fullWidth
          InputLabelProps={{
            style: { color: '#fff' }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MdLockOutline />
              </InputAdornment>
            )
          }}
          sx={{ input: { color: '#fff' } }}
        />
        
        <Grid container textAlign="center">
          <Grid item xs={12}>
            <Button
              onClick={() => logInWithEmailAndPassword(email, password)}
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link 
              to="/register" 
              variant="caption" 
              align="center" 
              sx={{ color: '#fff' }}
            >
              {"Don't have an account? Register here"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FormLogin;