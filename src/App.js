import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import AllBikesListing from "./Pages/AllBikesListing";
import TrailBikeListing from "./Pages/TrailBikeListing";
import DownhillBikeListing from "./Pages/DownhillBikeListing";
import SworksBikeListing from "./Pages/SworksBikeListing";
import ProductPage from "./Layout/ProductPage";
import Cart from "./Pages/Cart";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import CartContainer from "./CartContext";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <CartContainer>
          <Header />
          <div id="page-container">
            <Route exact path="/" component={() => <LandingPage />} />
            <Route path="/shop-bikes" component={() => <AllBikesListing />} />
            <Route path="/shop-trail" component={() => <TrailBikeListing />} />
            <Route
              path="/shop-downhill"
              component={() => <DownhillBikeListing />}
            />
            <Route path="/shop-sworks" component={() => <SworksBikeListing />} />
            <Route path="/shop/:id" component={() => <ProductPage />} />
            <Route path="/cart" component={() => <Cart />} />
          </div>
          <Footer />
        </CartContainer>
      </ScrollToTop>
    </Router>
  );
}

export default App;
