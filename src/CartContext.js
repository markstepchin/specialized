import React from "react";

const SEC_SHOW_CART_PREVIEW = 5;

class CartContainer extends React.Component {
  state = {
    items: [],
    itemAdded: false
  }

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
      })
    }

    console.log(updatedItems)

    this.setState({ 
      items: updatedItems,
      itemAdded: true
    });
    
    setTimeout(() => this.setState({itemAdded: false}), SEC_SHOW_CART_PREVIEW * 1000);
  }

  removeItem = id => {
    const newArray = [...this.state.items];
    newArray.splice(newArray.indexOf(id), 1);

    this.setState({ items: newArray })
  }

  subtractQuantity = id => {
    const updatedItems = [...this.state.items];

    let toRemove = null;
    updatedItems.forEach((item, i) => {
      if (item.id === id) {
        item.quantity--;
        console.log(item)
        if (item.quantity === 0) {
          toRemove = i;
        }
      }
    })

    if (toRemove !== null) {
      updatedItems.splice(toRemove, 1);
    }

    this.setState({ items: updatedItems })
  }

  addQuantity = id => {
    const updatedItems = [...this.state.items];

    updatedItems.forEach(item => {
      if (item.id === id) {
        item.quantity++;
      }
    })

    this.setState({ items: updatedItems })
  }
  

  render() {
    return (
      <CartContext.Provider value={{ 
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem,
          addQuantity: this.addQuantity,
          subtractQuantity: this.subtractQuantity,
          itemAdded: this.state.itemAdded
        }}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}

export const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});

export default CartContainer;
