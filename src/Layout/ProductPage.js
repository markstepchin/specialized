import React from "react";
import Gallery from "./Gallery";

const images = [
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN-EXPERT-CARBON-29-CKD-STRMGRY-RKTRED_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-1?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}"
];

const ProductPage = () => (
  <div style={{ paddingTop: '10rem' }}>
    <Gallery images={images}/>
    <DisplayFooter />
    <Description />
    <TechnicalSpecs />
    <Reviews />
  </div>
);

const DisplayFooter = () => (
  <div>
    <div>
      <h2>Stumpjumper EVO Comp Carbon 27.5</h2>
      <h3>$4,520.00</h3>
      <p>Part No.  97519-5402</p>
    </div>
    <span>In Stock</span>
    <div>
      <button>ship to store</button>
      <button>tune my suspension</button>
      <button>find nearby</button>
    </div>
  </div>
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
