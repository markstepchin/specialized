import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default ({ images }) => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={35}
    totalSlides={images.length}
    orientation='horizontal'
  >
    <Slider className='slider'>
      {images.map((src, i) => (
        <Slide index={i}>
          <Image src={src}/>
        </Slide>
      ))}
    </Slider>
    <div id='gallery-button-container'>
      <ButtonBack className='gallery-buttons'>
        <ion-icon name="arrow-back"></ion-icon>
      </ButtonBack>
      <ButtonNext className='gallery-buttons'>
        <ion-icon name="arrow-forward"></ion-icon>
      </ButtonNext>
    </div>
    <div className='dot-group'>
      <div>
        {images.map((src, i) => <Dot slide={i} className='gallery-dot'/>)}
      </div>  
    </div>
  </CarouselProvider>
);
