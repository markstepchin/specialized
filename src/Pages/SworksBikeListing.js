import React from 'react';
import BikeListing from "./BikeListing";
import BikeData from "./BikeData";
import bikeHeroImage from "../Assets/Images/S-Works/SWorksHero.jpg";

const data = [
  BikeData[2]
];

const SworksBikeListing = () => (
  <BikeListing 
    data={data}
    title='S-Works'>
    <img 
      src={bikeHeroImage} 
      alt='bike cover'/>
  </BikeListing>
);

export default SworksBikeListing;
