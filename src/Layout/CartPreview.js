import React from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { bikes } from "../DataFiles/BikeData";

class CartPreview extends React.Component {
  state = {
    hover: true
  }

  render() {
    const { items } = this.context;
    const bikeList = items.map(id => bikes.find(b => b.id === id));
    const subtotal = bikeList.reduce((acc, curr) => acc + parseInt(curr.details.price), 0);

    return (
      <>
        <Link 
          to='/cart' 
          className='cart-icon'
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <ion-icon name="cart"></ion-icon>
        </Link>
        {(this.state.hover || this.context.itemAdded) && (
          <div id='cart-preview'>
            <CartListing bikeList={bikeList}/>
            <CartSubtotal subtotal={subtotal}/>
            <Link to='/cart' className='checkout-button'>view cart and checkout</Link>
          </div>
        )}
      </>
    )
  }
}

const CartListing = ({ bikeList }) => (
  <div id='preview-item-listing'>
    {bikeList.map(bike => (
      <div style={{ display: 'flex', marginBottom: '2rem' }}>
        <img src={bike.image} alt='product' style={{ width: '150px' }}/>
        <div className='details'>
          <h3>{bike.details.name}</h3>
          <h4>${bike.details.price}</h4>
          <h4>QTY 1</h4>
        </div>
        <button className='close-button'><ion-icon name="close"></ion-icon></button>
      </div>
    ))}
  </div>
);

const CartSubtotal = ({ subtotal }) => (
  <div>
    <div className='subtotals'>
      <h3>Subtotal</h3>
      <h3>${subtotal}</h3>
    </div>
    <span className='taxes'>Taxes are calculated at checkout</span>
  </div>
);

CartPreview.contextType = CartContext;
export default CartPreview;
