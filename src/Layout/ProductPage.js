import React, { useState } from "react";
import { description, specs } from "../DataFiles/ProductData"; 
import Gallery from "./Gallery";

const images = [
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN-EXPERT-CARBON-29-CKD-STRMGRY-RKTRED_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-1?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}"
];

const details = {
  title: 'Stumpjumper EVO Comp Carbon 27.5',
  price: '4,520.00',
  partNumber: '97519-5402',
};

const ProductPage = () => (
  <div id='product-page-container'>
    <Gallery images={images}/>
    <DisplayFooter details={details}/>
    <Description description={description}/>
    <TechnicalSpecs specs={specs}/>
    <Reviews />
  </div>
);

const DisplayFooter = ({ details: { title, price, partNumber } }) => (
  <section id='display-footer-container'>
    <div className='section-1'>
      <h2 className='display-title'>
        {title}
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
      <button>add to cart</button>
      <button>tune my suspension</button>
      <button>find nearby</button>
    </div>
  </section>
);

const Description = ({ description: { intro, description, list } }) => {
  const [more = false, setMore] = useState(0);

  return (
    <section id='product-description-container'>
      <div className='container'>
        <p>
          {intro}
        </p>

        <p style={{ display: `${more ? 'inline' : 'none'}`}}>
          {description.map(text => <p>{text}</p>)}
        </p>
  
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => setMore(!more)}>
            {`read ${more ? 'less' : 'more'}`}
          </button>
        </div>
  
        <p className='bullet-points'>
          <ul>
            {list.map(text => <li>{text}</li>)}
          </ul>
        </p>
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
              <h4>{section.title}</h4>
              {section.items.map(item => (
                <div className='individual-spec'>
                  <h5>{item.spec}</h5>
                  <p>{item.item}</p>
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

export default ProductPage;
