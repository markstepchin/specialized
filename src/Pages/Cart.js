import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import { bikes } from "../DataFiles/BikeData";
import { getCartSubtotal } from "../utils/general";

const Cart = () => {
  const { items, removeItem, addQuantity, subtractQuantity } = useCartContext();

  const bikeList = Object.keys(items).map(bikeId => {
    const bike = bikes.find(dataBike => dataBike.id === bikeId);
    const quantity = items[bikeId];

    return (
      <ListItem
        bike={bike}
        quantity={quantity}
        addQuantity={addQuantity}
        removeItem={removeItem}
        subtractQuantity={subtractQuantity}
      />
    );
  });

  return (
    <section id="cart">
      <h1 className="cart-col">Shopping cart</h1>
      {bikeList.length > 0 ? (
        <div id="cart-contents">
          <div className="cart-col" style={{ flexGrow: 2 }}>
            {bikeList}
          </div>     
          <CartSummary items={items} />
        </div>
      ) : (
        <EmptyCartMessage />
      )}
      <CartFooter />
    </section>
  );
};

const ListItem = ({
  bike,
  quantity,
  addQuantity,
  subtractQuantity,
  removeItem
}) => (
  <div id="cart-listing">
    <div className="col">
      <h3>details</h3>
      <div className="details-container">
        <div style={{ width: "150px", height: "150px" }}>
          <img src={bike.image} alt="product" />
        </div>
        <div style={{ padding: "0 2rem" }}>
          <h4>{bike.details.name}</h4>
          <span>Part No. {bike.details.partNumber}</span>
          <h5>In Stock</h5>
        </div>
      </div>
    </div>

    <div className="other-details-container cart-col">
      <div>
        <h3>price</h3>
        <div>
          <span className="price">${bike.details.price}</span>
        </div>
      </div>

      <div>
        <h3>quantity</h3>
        <div>
          <button
            style={{ padding: "0 1rem" }}
            onClick={() => subtractQuantity(bike.id)}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            style={{ padding: "0 1rem" }}
            onClick={() => addQuantity(bike.id)}
          >
            +
          </button>
        </div>
        <div>
          <button id="remove-from-cart" onClick={() => removeItem(bike.id)}>
            remove
          </button>
        </div>
      </div>

      <div>
        <h3>total</h3>
        <div>
          <span className="price">${bike.details.price * quantity}</span>
        </div>
      </div>
    </div>
  </div>
);

const CartSummary = ({ items }) => {
  const subtotal = getCartSubtotal(items);

  const tax = parseFloat(subtotal * 0.087).toFixed(2);
  //rounding to 2 decimal places
  const orderTotal = parseFloat(subtotal + parseInt(tax)).toFixed(2);

  return (
    <div id="cart-summary" className="cart-col" style={{ flexGrow: 1 }}>
      <ul>
        <li>
          <div className="bold">subtotal</div>
          <div className="bold">${subtotal}</div>
        </li>
        <li>
          <div className="bold">
            shipping
            <div className="non-bold">Standard Ground Shipping</div>
          </div>
          <div className="bold">$0</div>
        </li>
        <li className="border-bottom">
          <div className="bold">
            tax
            <div className="non-bold">taxing at 8.7%</div>
          </div>
          <div className="bold">${tax}</div>
        </li>
        <li>
          <div className="bold">order total</div>
          <div className="bold">${orderTotal}</div>
        </li>
        <li>
          <div className="non-bold">
            * Shipping is based on flat rate for up to 7 working days shipping.
          </div>
        </li>
      </ul>
    </div>
  );
};

const EmptyCartMessage = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div id="empty-cart">
      <h2>Your Shopping Cart is Empty</h2>
      <p>Nothin' to see here.</p>
      <Link to="/shop-bikes">Continue Shopping</Link>
    </div>
  </div>
);

const CartFooter = () => (
  <div id="cart-footer" className="cart-col">
    <div className="cart-footer-col">
      <h3>Contact Us</h3>
      <p>8:00am - 6:00pm MST, Monday-Friday</p>
      <p>877-808-8154</p>
      <p>ridercare@specialized.com</p>
    </div>
    <div className="cart-footer-col">
      <h3>Helpful Links</h3>
      <a href="https://www.specialized.com/us/en/faq">
        Frequently Asked Questions
      </a>
      <a href="https://www.specialized.com/us/en/faq#returns">Return Policy</a>
      <a href="https://www.specialized.com/us/en/warranty">Warranty Policy</a>
    </div>
  </div>
);

export default Cart;
