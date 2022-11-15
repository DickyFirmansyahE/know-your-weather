import React from 'react';
import Container from '@mui/material/Container';
import AppHeader from '../components/AppHeader';
import FormRegister from '../components/FormRegister';

function Register() {
  return (
    <>
      <AppHeader />
      <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
        <FormRegister />
      </Container>
    </>
  );
}

export default Register;