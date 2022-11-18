import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorNotFound from '../pages/notFound-page';

export default function Router() {
  
  return (  
        <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='*' element={<ErrorNotFound />} />
        </Routes>
  );
}