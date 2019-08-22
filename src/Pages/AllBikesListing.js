import React from 'react';
import BikeListing from "../Layout/BikeListing";
import BikeData from "../DataFiles/BikeData";
import bikeHeroImage from "../Assets/Images/Bikes/BikesHero.jpg";

const data = BikeData;

const SworksBikeListing = () => (
  <BikeListing 
    data={data}
    title='Bikes'>
    <img 
      src={bikeHeroImage} 
      alt='bike cover'/>
  </BikeListing>
);

export default SworksBikeListing;
