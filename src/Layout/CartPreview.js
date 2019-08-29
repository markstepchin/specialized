import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import { getCartSubtotal } from "../utils/general";
import { bikes } from "../DataFiles/BikeData";

export default function CartPreview() {
  const { items, removeItem, onCartPreviewHover, onCartPreviewHoverExit, onCartPreviewClick, showPreview } = useCartContext();

  const bikeList = Object.keys(items).map(bikeId =>
    // find the corresponding bike for every id in the bike data object
    bikes.find(dataBike => dataBike.id === bikeId)
  );
  const subtotal = getCartSubtotal(items);

  return (
    <>
      <Link 
        to='/cart' 
        className='cart-icon'
        onClick={() => onCartPreviewClick()}
        onMouseEnter={() => onCartPreviewHover()}
        onMouseLeave={() => onCartPreviewHoverExit()}>
        <ion-icon name="cart"></ion-icon>
      </Link>
      {showPreview && (
        <div 
          id='cart-preview' 
          onMouseEnter={() => onCartPreviewHover()}
          onMouseLeave={() => onCartPreviewHoverExit()}>
          <CartListing bikeList={bikeList} removeItem={removeItem} items={items}/>
          <CartSubtotal subtotal={subtotal}/>
          <Link 
            to='/cart'
            className='checkout-button'
            onClick={() => onCartPreviewClick()}>
            view cart and checkout
          </Link>
        </div>
      )}
    </>
  )
}

const CartListing = ({ bikeList, removeItem, items }) => (
  <div id='preview-item-listing'>
    {bikeList.length === 0 ? (
      <span style={{ fontSize: '.9rem', fontWeight: '400' }}>cart is empty</span>
    ) : (
      bikeList.map(bike => (
        <div style={{ display: 'flex', marginBottom: '2rem' }} key={bike.id}>
          <div style={{ width: '150px', height: '150px' }}>
            <img src={bike.image} alt='product' style={{ width: '100%' }}/>
          </div>
          
          <div className='details'>
            <h3>{bike.details.name}</h3>
            <h4>${bike.details.price}</h4>
            <h4>QTY {items[bike.id]}</h4>
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
