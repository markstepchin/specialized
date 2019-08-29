import { bikes } from "../DataFiles/BikeData";

export const getCartSubtotal = cartItems => {
  // 1) getting the prices for items

  // for every id in cartItems
  const bikeList = Object.keys(cartItems).map(bikeId =>
    // find the corresponding bike in the bike data object
    bikes.find(dataBike => dataBike.id === bikeId)
  );

  // 2: calculating
  const subtotal = bikeList.reduce((acc, curr) => {
    // items example: { af23: 3, sd24: 3 }
    // quantity is the value
    const quantity = cartItems[curr.id];
    return curr.details.price * quantity + acc;
  }, 0);

  return subtotal;
};
