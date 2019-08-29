import React, { useState, useContext } from "react";

const SEC_SHOW_CART_PREVIEW = 3;

export default function CartContainer({ children }) {
  const [items, setItems] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const [hovering, setHovering] = useState(false);

  const addItem = id => {
    let itemExists = false;
    for (const item of items) {
      if (item.id === id) {
        itemExists = true;
      }
    }

    if (itemExists) {
      addQuantity(id);
    } else {
      setItems(oldItems => [...oldItems, { id, quantity: 1 }]);
    }

    setItemAdded(true);
    setTimeout(() => setItemAdded(false), SEC_SHOW_CART_PREVIEW * 1000);
  };

  const removeItem = id =>
    setItems(oldItems => oldItems.filter(item => item.id !== id));

  const subtractQuantity = id =>
    setItems(oldItems =>
      oldItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        //if the item's quantity is 0, remove from the cart
        .filter(item => item.quantity > 0)
    );

  const addQuantity = id =>
    setItems(oldItems =>
      oldItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const onCartPreviewHover = () => setHovering(true);
  const onCartPreviewHoverExit = () => setHovering(false);

  /* Need to hide the preview when it's clicked. itemAdded is for displaying cart preview after adding item */
  const onCartPreviewClick = () => {
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
