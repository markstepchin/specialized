import React from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { getBikeList } from "../utils/general";

class CartPreview extends React.Component {
  state = {
    hover: false
  }

  render() {
    const { items, removeItem } = this.context;

    const bikeList = getBikeList(items);
    const subtotal = bikeList.reduce((acc, curr) => acc + parseInt(curr.details.price) * curr.quantity, 0);

    return (
      <>
        <Link 
          to='/cart' 
          className='cart-icon'
          onClick={() => this.setState({ hover: false })}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <ion-icon name="cart"></ion-icon>
        </Link>
        {(this.state.hover || this.context.itemAdded) && (
          <div 
            id='cart-preview' 
            onClick={() => this.setState({ hover: false })}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}>
            <CartListing bikeList={bikeList} removeItem={removeItem}/>
            <CartSubtotal subtotal={subtotal}/>
            <Link 
              to='/cart'
              className='checkout-button'
              >
                view cart and checkout
            </Link>
          </div>
        )}
      </>
    )
  }
}

const CartListing = ({ bikeList, removeItem }) => (
  <div id='preview-item-listing'>
    {bikeList.length === 0 ? (
      <span style={{ fontSize: '.9rem', fontWeight: '400' }}>cart is empty</span>
    ) : (
      bikeList.map(bike => (
        <div style={{ display: 'flex', marginBottom: '2rem' }} key={bike.id}>
          <img src={bike.image} alt='product' style={{ width: '150px' }}/>
          <div className='details'>
            <h3>{bike.details.name}</h3>
            <h4>${bike.details.price}</h4>
            <h4>QTY {bike.quantity}</h4>
          </div>
          <button className='close-button' onClick={() => removeItem(bike.id)}>
            <ion-icon name="close"></ion-icon>
          </button>
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
