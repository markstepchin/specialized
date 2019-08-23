import React from "react";
import { Link } from 'react-router-dom';

const Cart = () => (
  <section id='cart'>
    <h1 className='cart-col'>Shopping cart</h1>
    <EmptyCartMessage />
    {/* <CartContents /> */}
    <CartFooter />
  </section>
);

const CartContents = () => (
  <div id='cart-contents'>
    <CartListing />
    <CartSummary />
  </div>
);

const CartListing = () => (
  <div className='cart-col' style={{ flexGrow: 2 }}>
    <div id='cart-listing'>
      <div className='col'>
        <h3>details</h3>
        <div className='details-container'>
          <img />
          <div style={{ padding: '0 2rem' }}>
            <h4>Fuse 27.5</h4>
            <span>Part No. 96020-7001</span>  
            <h5>In Stock</h5> 
          </div>
        </div>
      </div>

      <div className='other-details-container cart-col'>
        <div>
          <h3>price</h3>
          <div>
            <span className='price'>$1,200.00</span>
          </div>
        </div>

        <div>
          <h3>quantity</h3>
          <div>
            <button style={{ marginRight: '1.25rem' }}>-</button>
            <span className='quantity'>1</span>
            <button  style={{ marginLeft: '1.25rem' }}>+</button>
          </div>
          <div>
            <button id='remove-from-cart'>remove</button>
          </div>
        </div>

        <div>
          <h3>total</h3>
          <div>
            <span className='price'>$1,200.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CartSummary = () => (
  <div id='cart-summary' className='cart-col' style={{ flexGrow: 1 }}>
    <ul>
      <li>
        <div className='bold'>subtotal</div>
        <div className='bold'>$1,500.00</div>
      </li>
      <li>
        <div className='bold'>shipping
          <div className='non-bold'>Standard Ground Shipping</div>
        </div>
        <div className='bold'>$0</div>
      </li>
      <li className='border-bottom'>
        <div className='bold'>tax
          <div className='non-bold'>taxing at 8.7%</div>
        </div>
        <div className='bold'>$257.83</div>
      </li>
      <li>
        <div className='bold'>order total</div>
        <div className='bold'>$1,757.83</div>
      </li>
      <li>
        <div className='non-bold'>* Shipping is based on flat rate for up to 7 working days shipping.</div>
        <div></div>
      </li>
    </ul>
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
  <div id='cart-footer' className='cart-col'>
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
