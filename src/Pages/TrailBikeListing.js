import React from 'react';
import BikeListing from "../Layout/BikeListing";
import BikeData from "../DataFiles/BikeData";

const data = [
  BikeData[0]
];

const TrailBikeListing = () => (
  <BikeListing 
    data={data}
    title='Trail'
    description="Perfection. It's hard to define, yet easy to recognize. We specialize in the science of perfection, however, and every road bike we make embodies it. No matter your motivation or discipline, you'll benefit from our attention to detail and innovative spirit. So whether you're getting dirty on cyclocross bikes, leaving it all on the road, or testing your limits in a triathlon, you can rest assured that the bike underneath you is simply the best.">
    <div className='bike-listing-background' id='trail-listing-background'>
      <div className='listing-background-title'>trail</div>
    </div>
  </BikeListing>
);

export default TrailBikeListing;
