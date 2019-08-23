import React from "react";
import { Link } from 'react-router-dom';

const Cart = () => (
  <section id='cart'>
    <h1>Shopping cart</h1>
    <EmptyCartMessage />
    <CartFooter />
  </section>
);

const CartContents = () => (
  <div>
    <div>details</div>
    <div>totals</div>
  </div>
);

const EmptyCartMessage = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div id='empty-cart'>
      <h2>Your Shopping Cart is Empty</h2>
      <p>Nothin' to see here.</p>
      <Link to='/shop-bikes'>Continue Shopping</Link>
    </div>
  </div>
)

const CartFooter = () => (
  <div id='cart-footer'>
    <div className='cart-footer-col'>
      <h3>Contact Us</h3>
      <p>8:00am - 6:00pm MST, Monday-Friday</p>
      <p>877-808-8154</p>
      <p>ridercare@specialized.com</p>
    </div>
    <div className='cart-footer-col'>
      <h3>Helpful Links</h3>
      <a href='https://www.specialized.com/us/en/faq'>Frequently Asked Questions</a>
      <a href='https://www.specialized.com/us/en/faq#returns'>Return Policy</a>
      <a href='https://www.specialized.com/us/en/warranty'>Warranty Policy</a>
    </div>
  </div>
)

export default Cart;
