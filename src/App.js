import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import BikeListing from "./Pages/BikeListing";
import TrailBikeListing from "./Pages/TrailBikeListing";
import DownhillBikeListing from "./Pages/DownhillBikeListing";
import SworksBikeListing from "./Pages/SworksBikeListing";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import './App.scss';


function App() {
  return (
    <>
      <Router>
        <Header />

        <Route exact path='/' component={() => <LandingPage />}/>
        <Route path='/shop/bikes' component={() => <BikeListing />}/>
        <Route path='/shop/trail' component={() => <TrailBikeListing />}/>
        <Route path='/shop/downhill' component={() => <DownhillBikeListing />}/>
        <Route path='/shop/s-works' component={() => <SworksBikeListing />}/>

        <Footer />
      </Router>
    </>
  );
}

export default App;
