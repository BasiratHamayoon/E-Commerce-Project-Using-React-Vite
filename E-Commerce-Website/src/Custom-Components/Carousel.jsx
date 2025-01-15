import React from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import 'embla-carousel-react/embla-carousel.css';

const Carousel = ({ items }) => {
  const [emblaRef] = EmblaCarouselReact();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__viewport">
        <div className="embla__container">
          {items.map((item, index) => (
            <div key={index} className="embla__slide">
              <img src={item.src} alt={item.alt} className="embla__image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
