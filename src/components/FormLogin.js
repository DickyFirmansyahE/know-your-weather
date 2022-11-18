import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import { MdLockOutline } from 'react-icons/md';

function FormLogin() {
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
              type="submit"
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link 
              href="#" 
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