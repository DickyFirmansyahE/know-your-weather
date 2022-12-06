/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function FormResetPassword() {

  const [email, setEmail] = useState("");
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
      <Typography component="h1" variant="h5" sx={{ fontSize: '1.5rem', fontWeight: '600' }}>Reset Password</Typography>
      <Box component="form" sx={{ mx: 0.5 }}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          label="Email"
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
        
        <Grid container textAlign="center">
          <Grid item xs={12}>
            <Button
              onClick={() => sendPasswordReset(email)}
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Request
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
            Don't have an account?
            <Link 
              className="click-here"
              to="/register" 
              variant="caption" 
              align="center"
            >
               {' Register here'}
            </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FormResetPassword;