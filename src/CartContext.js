import React from "react";

const SEC_SHOW_CART_PREVIEW = 3;

class CartContainer extends React.Component {
  state = {
    items: [],

    //used for controlling hover behavior
    itemAdded: false,
    hovering: false
  };

  addItem = id => {
    const updatedItems = [...this.state.items];

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

    this.setState({
      items: updatedItems,
      itemAdded: true
    });

    setTimeout(
      () => this.setState({ itemAdded: false }),
      SEC_SHOW_CART_PREVIEW * 1000
    );
  };

  removeItem = id => {
    const newArray = [...this.state.items];
    newArray.splice(newArray.indexOf(id), 1);

    this.setState({ items: newArray });
  };

  subtractQuantity = id => {
    const updatedItems = [...this.state.items];

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

    this.setState({ items: updatedItems });
  };

  addQuantity = id => {
    const updatedItems = [...this.state.items];

    updatedItems.forEach(item => {
      if (item.id === id) {
        item.quantity++;
      }
    });

    this.setState({ items: updatedItems });
  };

  onCartPreviewHover = () => this.setState({ hovering: true });
  onCartPreviewHoverExit = () => this.setState({ hovering: false });
  /* Need to hide the preview when it's clicked. itemAdded is for displaying cart preview after adding item */

  onCartPreviewClick = () =>
    this.setState({ hovering: false, itemAdded: false });

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem,
          addQuantity: this.addQuantity,
          subtractQuantity: this.subtractQuantity,
          onCartPreviewHover: this.onCartPreviewHover,
          onCartPreviewHoverExit: this.onCartPreviewHoverExit,
          onCartPreviewClick: this.onCartPreviewClick,
          showPreview: this.state.hovering || this.state.itemAdded
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});

export default CartContainer;
