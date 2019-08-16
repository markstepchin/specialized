import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import BikeListing from "./Pages/BikeListing";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import './App.scss';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact path='/' component={() => <LandingPage />}/>
        <Route path='/shop/bikes' component={() => <BikeListing />}/>
      </Router>
      <Footer />
    </>
  );
}

export default App;
