import React from 'react';
import './App.scss';
import LandingPage from "./Pages/LandingPage";
import HeaderTop from "./Layout/HeaderTop";
import Footer from "./Layout/Footer";


function App() {
  return (
    <>
      <HeaderTop />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
