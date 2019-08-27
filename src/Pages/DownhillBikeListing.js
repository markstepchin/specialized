import React from 'react';
import BikeListing from "../Layout/BikeListing";
import BikeData from "../DataFiles/BikeData";

const data = [
  BikeData[1]
];

const DownHillBikeListing = () => (
  <BikeListing 
    data={data}
    title='Downhill'>
    <div className='bike-listing-background' id='downhill-listing-background'>
      <div className='listing-background-title'>downhill</div>
    </div>
  </BikeListing>
);

export default DownHillBikeListing;
