import React from 'react';
import Container from '@mui/material/Container';
import AppHeader from '../components/AppHeader';
import FormLogin from '../components/FormLogin';

function Login() {
  return (
    <>
      <AppHeader />
      <Container component="main" maxWidth="xs" sx={{ mt: 16 }}>
        <FormLogin />
      </Container>
    </>
  );
}

export default Login;