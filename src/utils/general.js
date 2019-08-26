import { bikes } from "../DataFiles/BikeData";

export const getBikeList = items => items.map(cartBike => {
  //find the bike in the data and make a copy
  const bike = {...bikes.find(dataBike => dataBike.id === cartBike.id)};
  bike.quantity = cartBike.quantity;
  return bike;
});
