/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../src/styles/App.css";
import "../src/styles/responsive.css";
import Router from "./routes/routes-app";
import BottomNavBar from "./components/BottomNavigation";
import FooterApp from "./components/FooterApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import AppBarAfter from "./components/appHeader/AppBarAfter";
import AppBarBefore from "./components/appHeader/AppBarrBefore";

function App() {

  const [user] = useAuthState(auth);
  
  if (!user) {
    // sebelum login
  return (
    <div className="App">
        <AppBarBefore />
        <main>
          <Router />
        </main>
        <FooterApp />
        <BottomNavBar />
    </div>
  );
  }else{
  // sesudah login
  return (
    <div className="App">
        <AppBarAfter />
        <main>
          <Router />
        </main>
        <FooterApp />
        <BottomNavBar />
    </div>
  );
}
}

export default App;
