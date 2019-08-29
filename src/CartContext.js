import React, { useState, useContext, useCallback } from "react";

const SEC_SHOW_CART_PREVIEW = 3;

/*
  The Cart stores the list of items in the items object. The cart keeps 
  track of the items inside by storing their ids (alphanumeric string), 
  as well as the quantities of that item.

  Every item in the cart is a property in the items object: the item id 
  becomes a key, and the quantity is the value.

  const items = {
    id1: 3,
    id2: 1,
    id3: 2,
  }
*/

export default function CartContainer({ children }) {
  const [items, setItems] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const [hovering, setHovering] = useState(false);

  const addQuantity = useCallback(
    id =>
      setItems(oldItems => ({
        ...oldItems,
        [id]: oldItems[id] ? oldItems[id] + 1 : 1
      })),
    []
  );

  const addItem = useCallback(id => {
    addQuantity(id);

    setItemAdded(true);
    setTimeout(() => setItemAdded(false), SEC_SHOW_CART_PREVIEW * 1000);
  }, [addQuantity]);

  const removeItem = useCallback(
    id => setItems(oldItems => removeProperty(oldItems, id)),
    []
  );

  const subtractQuantity = useCallback(
    id =>
      setItems(oldItems =>
        oldItems[id] > 1
          ? {
              ...oldItems,
              [id]: oldItems[id] - 1
            }
          : removeProperty(oldItems, id)
      ),
    []
  );

  const onCartPreviewHover = useCallback(() => setHovering(true), []);
  const onCartPreviewHoverExit = useCallback(() => setHovering(false), []);

  /* Need to hide the preview when it's clicked. itemAdded is for displaying cart preview after adding item */
  const onCartPreviewClick = useCallback(() => {
    setHovering(false);
    setItemAdded(false);
  }, []);

  const value = React.useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      addQuantity,
      subtractQuantity,
      onCartPreviewHover,
      onCartPreviewHoverExit,
      onCartPreviewClick,
      showPreview: hovering || itemAdded
    }),
    [
      items,
      addItem,
      removeItem,
      addQuantity,
      subtractQuantity,
      onCartPreviewHover,
      onCartPreviewHoverExit,
      onCartPreviewClick,
      hovering,
      itemAdded
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Consolidated code used in both removeItem and subtractQuantity
const removeProperty = (obj, property) => {
  const updatedObj = { ...obj };
  delete updatedObj[property];
  return updatedObj;
};

export const CartContext = React.createContext({
  items: {},
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
