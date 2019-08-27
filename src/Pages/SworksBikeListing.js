import React from "react";
import BikeListing from "../Layout/BikeListing";
import BikeData from "../DataFiles/BikeData";

const data = [BikeData[2]];

const SworksBikeListing = () => (
  <BikeListing data={data} title="S-Works">
    <div className="bike-listing-background" id="sworks-listing-background">
      <div className="listing-background-title">s-works</div>
    </div>
  </BikeListing>
);

export default SworksBikeListing;
