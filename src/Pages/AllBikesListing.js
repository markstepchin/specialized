import React from "react";
import BikeListing from "../Layout/BikeListing";
import BikeData from "../DataFiles/BikeData";

const data = BikeData;

const SworksBikeListing = () => (
  <BikeListing data={data} title="Bikes">
    <div className="bike-listing-background" id="all-bikes-listing-background">
      <div className="listing-background-title">bikes</div>
    </div>
  </BikeListing>
);

export default SworksBikeListing;
