import React from 'react';

const Header = () => (
  <header>
    {/* <ToolBar /> */}
    <div className='top-header'>
      <span>Free shipping on orders over $150.</span>
      <div>
        <span><span className='find-retailer-icon'/>Find a retailer</span>
        <span><span className='flag-icon'/>EN</span>
        <button>Sign In</button>
      </div>
    </div>
    <div className='bottom-header'>
      <ion-icon name="menu"></ion-icon>
      <a className='logo' href='/#' />
      <ul>
        <li><a href='/#'>Bikes</a></li>
        <li><a href='/#'>Trail</a></li>
        <li><a href='/#'>Downhill</a></li>
        <li><a href='/#'>S-works</a></li>
        <li><a href='/#'>inside specialized</a></li>
      </ul>
      <div>
        <span className='search-icon'/>
        <span className='cart-icon'/>
      </div>
    </div>
  </header>
);

const ToolBar = () => (
  <div id='toolbar'>
    <div id='toolbar-header'>
      <button id='close-toobar-button'><ion-icon name="close"></ion-icon></button>
      <div>Shop</div>
      <a href='/#'>Inside specialized</a>
    </div>
    <ul>
      <li><a href='/#'>Bikes</a></li>
      <li><a href='/#'>Trail</a></li>
      <li><a href='/#'>Downhill</a></li>
      <li><a href='/#'>S-works</a></li>
      <li><a href='/#'>inside specialized</a></li>
    </ul>
  </div>
);

export default Header;
