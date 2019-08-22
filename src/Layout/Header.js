import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    toggleOpen: false
  }

  onToggleClick = () => this.setState({ toggleOpen: !this.state.toggleOpen });

  render() {
    return (
      <header>
        <ToolBar isOpen={this.state.toggleOpen} onClick={this.onToggleClick}/>
        <div className='top-header'>
          <span>Free shipping on orders over $150.</span>
          <div>
            <span><span className='find-retailer-icon'/>Find a retailer</span>
            <span><span className='flag-icon'/>EN</span>
            <button>Sign In</button>
          </div>
        </div>
        <div className='bottom-header'>
          <button id='menu-button' onClick={this.onToggleClick}>
            <ion-icon name="menu"></ion-icon>
          </button>
          <Link className='logo' to='/'/>
          <ul>
          <li><Link to='/shop-bikes'>Bikes</Link></li>
          <li><Link to='/shop-trail'>Trail</Link></li>
          <li><Link to='/shop-downhill'>Downhill</Link></li>
          <li><Link to='/shop-sworks'>S-works</Link></li>
          <li><Link to='/#'>inside specialized</Link></li>
          </ul>
          <div>
            <span className='search-icon'/>
            <span className='cart-icon'/>
          </div>
        </div>
      </header>
    );
  }
};

const ToolBar = ({ isOpen, onClick }) => (
  isOpen && 
    <div id='toolbar'>
      <div id='toolbar-header'>
        <button id='close-toobar-button' onClick={onClick}>
          <ion-icon name="close"></ion-icon>
        </button>
        <div>Shop</div>
        <a href='/#'>Inside specialized</a>
      </div>
      <ul>
        <li onClick={onClick}><Link to='/shop/bikes'>Bikes</Link></li>
        <li onClick={onClick}><Link to='/shop/trail'>Trail</Link></li>
        <li onClick={onClick}><Link to='/shop/downhill'>Downhill</Link></li>
        <li onClick={onClick}><Link to='/shop/s-works'>S-works</Link></li>
        <li onClick={onClick}><Link to='/'>inside specialized</Link></li>
      </ul>
    </div>
);

export default Header;
