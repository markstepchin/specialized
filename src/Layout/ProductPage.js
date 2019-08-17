import React from "react";

const ProductPage = () => (
  <>
    <ImageGallery />
    <DisplayFooter />
    <Description />
    <TechnicalSpecs />
    <Reviews />
  </>
);

const ImageGallery = () => (
  <h1>image gallery</h1>
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
