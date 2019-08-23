import React from "react";

export default () => (
  <div id='cart-preview'>
    <div id='preview-item-listing'>
      <div style={{ display: 'flex' }}>
        <img style={{ height: '150px', width: '150px' }}/>
        <div className='details'>
          <h3>Stumpjumper EVO</h3>
          <h4>$4,520.00</h4>
          <h4>QTY 1</h4>
        </div>
        <button className='close-button'><ion-icon name="close"></ion-icon></button>
      </div>
    </div>
    <div>
      <div className='subtotals'>
        <h3>Subtotal</h3>
        <h3>$9,040.00</h3>
      </div>
      <span className='taxes'>Taxes are calculated at checkout</span>
    </div>
    <button className='checkout-button'>view cart and checkout</button>
  </div>
);
