import React from "react";
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
}

const ProductPage = () => (
  <div style={{ paddingTop: '10rem', margin: '0 2rem' }}>
    <Gallery images={images}/>
    <DisplayFooter details={details}/>
    <Description />
    <TechnicalSpecs />
    <Reviews />
  </div>
);

const DisplayFooter = ({ details: { title, price, partNumber } }) => (
  <section className='display-footer-container'>
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

const Description = () => (
  <>
    <p>visible description</p>
    <button>read more</button>
    <p>hidden description</p>
  </>
);

const TechnicalSpecs = () => (
  <div>
    <button>Manual Downloads</button>
    <div>
      <h3>Technical Specifications</h3>
      <div>part names</div>
      <div>specific names</div>
    </div>
  </div>
);

const Reviews = () => (
  <>
    <h1>Reviews</h1>
    <div>container with stars</div>
    <button>Write a review</button>
  </>
);

export default ProductPage;
