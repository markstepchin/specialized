import React from "react";
import { Link } from "react-router-dom";
import CartPreview from "../Layout/CartPreview";

class Header extends React.Component {
  state = {
    toggleOpen: false
  };

  onToggleClick = () => this.setState({ toggleOpen: !this.state.toggleOpen });

  render() {
    return (
      <header>
        <ToolBar isOpen={this.state.toggleOpen} onClick={this.onToggleClick} />
        <div className="top-header">
          <span>Free shipping on orders over $150.</span>
          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=specialized+bikes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className="find-retailer-icon" />
                Find a retailer
              </span>
            </a>
            <span>
              <span className="flag-icon" />
              EN
            </span>
          </div>
        </div>

        <div className="bottom-header">
          <button id="menu-button" onClick={this.onToggleClick}>
            <ion-icon name="menu"></ion-icon>
          </button>
          <Link className="logo" to="/" />
          <ul>
            <li>
              <Link to="/shop-bikes">Bikes</Link>
            </li>
            <li>
              <Link to="/shop-trail">Trail</Link>
            </li>
            <li>
              <Link to="/shop-downhill">Downhill</Link>
            </li>
            <li>
              <Link to="/shop-sworks">S-works</Link>
            </li>
          </ul>
          <CartPreview />
        </div>
      </header>
    );
  }
}

const ToolBar = ({ isOpen, onClick }) =>
  isOpen && (
    <div id="toolbar">
      <div id="toolbar-header">
        <button id="close-toobar-button" onClick={onClick}>
          <ion-icon name="close"></ion-icon>
        </button>
        <div>Shop</div>
        <div></div>
      </div>
      <ul>
        <li onClick={onClick}>
          <Link to="/shop-bikes">Bikes</Link>
        </li>
        <li onClick={onClick}>
          <Link to="/shop-trail">Trail</Link>
        </li>
        <li onClick={onClick}>
          <Link to="/shop-downhill">Downhill</Link>
        </li>
        <li onClick={onClick}>
          <Link to="/shop-sworks">S-works</Link>
        </li>
      </ul>
    </div>
  );

export default Header;
