import React, { useState } from "react";
import { description, specs } from "../DataFiles/ProductData"; 
import Gallery from "./Gallery";
import { withRouter } from "react-router-dom"; 
import { bikes } from "../DataFiles/BikeData";
import { CartContext } from "../CartContext";

const ProductPage = ({ match: { params: { id } } }) => {
  const bike = bikes.find(b => b.id === id)  
  const { images, details } = bike;

  return (
    <div id='product-page-container'>
      <Gallery images={images}/>
      <DisplayFooter details={details} id={id}/>
      <Description description={description}/>
      <TechnicalSpecs specs={specs}/>
      <Reviews />
    </div>
  );
}

const DisplayFooter = ({ id, details: { name, price, partNumber } }) => (
  <CartContext>
    {({addItem}) => (
      <section id='display-footer-container'>
        <div className='section-1'>
          <h2 className='display-title'>
            {name}
          </h2>
          <h3 className='display-price'>
            ${price}
          </h3>
          <p className='display-partNumber'>
            Part No.{' '}{partNumber}
          </p>
        </div>

        <span className='in-stock'>In Stock</span>

        <div className='section-3'>
          <button onClick={() => addItem(id)}>
            add to cart
          </button>
          <button>tune my suspension</button>
          <button>find nearby</button>
        </div>
      </section>
    )}
  </CartContext>
  
);

const Description = ({ description: { intro, description, list } }) => {
  const [more = false, setMore] = useState(0);

  return (
    <section id='product-description-container'>
      <div className='container'>
        <p>
          {intro}
        </p>

        <div style={{ display: `${more ? 'inline' : 'none'}`}}>
          {description.map(text => <p key={text}>{text}</p>)}
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => setMore(!more)}>
            {`read ${more ? 'less' : 'more'}`}
          </button>
        </div>
  
        <ul>
          {list.map(text => <li key={text}>{text}</li>)}
        </ul>
      </div>
    </section>
  );
}

const TechnicalSpecs = ({ specs }) => (
  <section id='specs-manual-container'>
    <div className='container'>
      <button>Manual Downloads</button>
      <div id='specs-container'>
        <h3>Technical Specifications</h3>

        <div className='spec-section'>
          {specs.map(section => (
            <>
              <h4 key={section.title}>{section.title}</h4>
              {section.items.map((item, i) => (
                <div className='individual-spec' key={item.spec + item.item}>
                  <h5 key={item.spec}>{item.spec}</h5>
                  <p key={item.item}>{item.item}</p>
                </div>
              ))}
            </>
          ))}
        </div>

      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id='review-container'>
    <h1>Reviews</h1>
    <div className='star-container'>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>
    <button>Be the first to write a review!</button>
  </section>
);

export default withRouter(ProductPage);
