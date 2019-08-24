import React from "react";

const SEC_SHOW_CART_PREVIEW = 5;

class CartContainer extends React.Component {
  state = {
    items: [
      'hello world',
      'whats up',
      'heeeeeeey'
    ],
    itemAdded: false
  }

  addItem = id => {
    this.setState({ 
      items: [...this.state.items, id],
      itemAdded: true
    });
    
    setTimeout(() => this.setState({itemAdded: false}), SEC_SHOW_CART_PREVIEW * 1000);
  }

  removeItem = id => {
    const newArray = [...this.state.items];
    newArray.splice(newArray.indexOf(id), 1);

    this.setState({ items: newArray })
  }

  render() {
    return (
      <CartContext.Provider value={{ 
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem,
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
