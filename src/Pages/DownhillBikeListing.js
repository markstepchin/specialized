import React from 'react';
import BikeListing from "./BikeListing";
import BikeData from "./BikeData";
import bikeHeroImage from "../Assets/Images/Downhill/DownHillHero.jpg";

const data = [
  BikeData[1]
];

const DownHillBikeListing = () => (
  <BikeListing 
    data={data}
    title='Downhill'>
    <img 
      src={bikeHeroImage} 
      alt='bike cover'/>
  </BikeListing>
);

export default DownHillBikeListing;
