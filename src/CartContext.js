import React from "react";

class CartContainer extends React.Component {
  state = {
    items: [
      'hello world',
      'whats up',
      'heeeeeeey'
    ]
  }

  addItem = id => this.setState({ items: [...this.state.items, id] });
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
          removeItem: this.removeItem
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
