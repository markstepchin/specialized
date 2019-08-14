import React from 'react';

const Header = () => (
  <header>
    <div className='top-header'>
      <span>Free shipping on orders over $150.</span>
      <div>
        <span><span className='find-retailer-icon'/>Find a retailer</span>
        <span><span className='flag-icon'/>EN</span>
        <button>Sign In</button>
      </div>
    </div>
    <div className='bottom-header'>
      <a className='logo' href='#' />
      <ul>
        <li><a className="hey" href='#'>Bikes</a></li>
        <li><a href='#'>Downhill</a></li>
        <li><a href='#'>S-works</a></li>
        <li><a href='#'>inside specialized</a></li>
      </ul>
      <div>
        <span className='search-icon'/>
        <span className='cart-icon'/>
      </div>
    </div>
  </header>
);

export default Header;
