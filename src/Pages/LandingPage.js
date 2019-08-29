import React from "react";
import { Link } from "react-router-dom";
import instaLogo from "../Assets/Images/Landing/IGLogo.png";
import verifiedLink from "../Assets/Icons&Logos/IG/Verified.svg";

const LandingPage = () => (
  <>
    <div id="hero">
      <div id="hero-text">
        <h1>
          We have <br />
          the works
        </h1>
        <h3>Its all fun and games until you catch too much air...</h3>
        <Link to='shop-bikes'><button>shop</button></Link>
      </div>
    </div>
    <section id="story">
      <h2>SPECIALIZED MTB</h2>
      <p>
        We are riders—that fact has guided our every decision since 1974. When
        quality tires weren't around, we strove to make the best. When people
        wanted to ride cruisers in the dirt, we made the first production
        mountain bike. When roadies wanted to go faster, we doubled-down on
        carbon and built our own wind tunnel. And when we saw kids struggling to
        focus in school, we started the Specialized Foundation to help them
        through cycling.
      </p>
    </section>
    <section id="categories">
      <h3>explore our bikes</h3>
      <ul>
        <li>
          <Link to="shop-trail">
            <div id="trail-bike-link" />
            <span>Trail</span>
          </Link>
        </li>
        <li>
          <Link to="shop-downhill">
            <div id="downhill-bike-link" />
            <span>Downhill</span>
          </Link>
        </li>
        <li>
          <Link to="shop-sworks">
            <div id="sworks-bike-link" />
            <span>s-works</span>
          </Link>
        </li>
      </ul>
    </section>
    <section id="large-image">
      <div>
        <h2>Finn</h2>
        <h2>Iles</h2>
      </div>
      <div>
        <span>
          Duis aute irure dolor in reprehenderit <br />
          in voluptate velit esse cillum dolore eu
        </span>
        <br />
        <span>
          <b> fugiat nulla pariatur.</b>
        </span>
      </div>
    </section>
    <section id="video">
      <h2>The all new stuntjumper</h2>
      <div>
        <iframe
          title="stuntjumper video"
          width="80%"
          height="90%"
          src="https://www.youtube.com/embed/yiNyUvYb7AM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <section id="instagram">
      <h2>Follow us on Instagram</h2>
      <a
        href="https://www.instagram.com/iamspecialized_mtb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="logo" src={instaLogo} alt="instagram logo" />
        <span>iamspecialized_mtb</span>
        <img id="verified" src={verifiedLink} alt="verified icon" />
      </a>
      <ul>
        <li>
          <div id="img1" />
        </li>
        <li>
          <div id="img2" />
        </li>
        <li>
          <div id="img3" />
        </li>
      </ul>
      <ul>
        <li>
          <div id="img4" />
        </li>
        <li>
          <div id="img5" />
        </li>
        <li>
          <div id="img6" />
        </li>
      </ul>
    </section>
  </>
);

export default LandingPage;
