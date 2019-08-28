import React, { useState, useContext } from "react";

const SEC_SHOW_CART_PREVIEW = 3;

export default function CartContainer({ children }) {
  const [items, setItems] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const [hovering, setHovering] = useState(false);

  function addItem(id) {
    const updatedItems = [...items];

    //check if the item is already in the cart
    let itemExists = false;
    updatedItems.forEach(item => {
      //if yes, increment the quantity for the corresponding id
      if (item.id === id) {
        item.quantity++;
        itemExists = true;
      }
    });

    //if not, add the item
    if (!itemExists) {
      updatedItems.push({
        id,
        quantity: 1
      });
    }

    setItems(updatedItems);
    setItemAdded(true);

    setTimeout(() => setItemAdded(false), SEC_SHOW_CART_PREVIEW * 1000);
  }

  function removeItem(id) {
    const newArray = [...items];
    newArray.splice(newArray.indexOf(id), 1);

    setItems(newArray);
  }

  function subtractQuantity(id) {
    const updatedItems = [...items];

    let toRemove = null;
    updatedItems.forEach((item, i) => {
      if (item.id === id) {
        item.quantity--;
        if (item.quantity === 0) {
          toRemove = i;
        }
      }
    });

    if (toRemove !== null) {
      updatedItems.splice(toRemove, 1);
    }

    setItems(updatedItems);
  }

  function addQuantity(id) {
    const updatedItems = [...items];

    updatedItems.forEach(item => {
      if (item.id === id) {
        item.quantity++;
      }
    });

    setItems(updatedItems);
  }

  function onCartPreviewHover() {
    setHovering(true);
  }
  function onCartPreviewHoverExit() {
    setHovering(false);
  }

  /* Need to hide the preview when it's clicked. itemAdded is for displaying cart preview after adding item */
  function onCartPreviewClick() {
    setHovering(false);
    setItemAdded(false);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        addQuantity,
        subtractQuantity,
        onCartPreviewHover,
        onCartPreviewHoverExit,
        onCartPreviewClick,
        showPreview: hovering || itemAdded
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Provider required");
  }

  return context;
};
