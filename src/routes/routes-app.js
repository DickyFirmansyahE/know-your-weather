import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FavoritePage from "../pages/FavoritePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import ErrorNotFound from "../pages/notFound-page";
import AboutUs from "../pages/AboutUs";

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/favorite' element={<FavoritePage />} />
      <Route exact path='/aboutus' element={<AboutUs />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route path='/reset' element={<ResetPassword />} />
      <Route path='*' element={<ErrorNotFound />} />
    </Routes>
  );
}
