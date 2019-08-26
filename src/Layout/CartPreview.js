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
    const bikeList = items.map(cartBike => {
      //find the bike in the data and make a copy
      const bike = {...bikes.find(dataBike => dataBike.id === cartBike.id)};
      bike.quantity = cartBike.quantity;
      return bike;
    });
    console.log(bikeList);
    console.log("bikes: ", bikes)
    const subtotal = bikeList.reduce((acc, curr) => acc + parseInt(curr.details.price) * curr.quantity, 0);

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
    {bikeList.length === 0 ? (
      <span style={{ fontSize: '.9rem', fontWeight: '400' }}>cart is empty</span>
    ) : (
      bikeList.map(bike => (
        <div style={{ display: 'flex', marginBottom: '2rem' }}>
          <img src={bike.image} alt='product' style={{ width: '150px' }}/>
          <div className='details'>
            <h3>{bike.details.name}</h3>
            <h4>${bike.details.price}</h4>
            <h4>QTY {bike.quantity}</h4>
          </div>
          <button className='close-button'><ion-icon name="close"></ion-icon></button>
        </div>
    )
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
