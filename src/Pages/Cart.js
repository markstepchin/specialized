import React from "react";
import { Link } from 'react-router-dom';

const Cart = () => (
  <section id='cart'>
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
  <div>
    <div>
      <h2>Your Shopping Cart is Empty</h2>
      <span>Nothin' to see here.</span>
      <Link to='/shop-bikes'>Continue Shopping</Link>
    </div>
  </div>
)

const CartFooter = () => (
  <div>
    <div>
      <h3>Contact Us</h3>
      <p>8:00am - 6:00pm MST, Monday-Friday</p>
      <p>877-808-8154</p>
      <p>ridercare@specialized.com</p>
    </div>
    <div>
      <h3>Helpful Links</h3>
      <a>Frequently Asked Questions</a>
      <a>Return Policy</a>
      <a>Warranty Policy</a>
    </div>
    <div>
      <h3>We Accept</h3>
      <div>
        card icons
      </div>
    </div>
  </div>
)

export default Cart;
