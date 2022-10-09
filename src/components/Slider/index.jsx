import React, { useEffect, useState } from 'react';
import './slider.style.css';
import slide1 from '../../images/slide-1.jpg';
import slide2 from '../../images/slide-2.jpg';
import slide3 from '../../images/slide-3.webp';
import slide4 from '../../images/slide-4.jpg';
import slide5 from '../../images/slide-5.jpg';
import slide6 from '../../images/slide-6.jpg';
import slide7 from '../../images/slide-7.jpg';
import slide8 from '../../images/slide-8.jpg';
import slide9 from '../../images/slide-9.jpg';
import slide10 from '../../images/slide-10.jpg';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    <img src={slide5} alt={slide5} />,
    <img src={slide8} alt={slide8} />,
    <img src={slide1} alt={slide1} />,
    <img src={slide2} alt={slide2} />,
    <img src={slide3} alt={slide3} />,
    <img src={slide4} alt={slide4} />,
    <img src={slide6} alt={slide6} />,
    <img src={slide7} alt={slide7} />,
    <img src={slide9} alt={slide9} />,
    <img src={slide10} alt={slide10} />,
  ];

  function nextSlide(num, arr) {
    setActiveSlide(num + 1);
    if (num >= arr.length - 1) {
      setActiveSlide(0);
    }
  }

  function prevSlide(num, arr) {
    setActiveSlide(num - 1);
    if (num <= 0) {
      setActiveSlide((num = arr.length - 1));
    }
  }

  return (
    <div className="slides">
      <div className="slide">
        {images.map((img, active) => {
          return (
            <img
              key={active}
              className={activeSlide === active ? 'active' : ''}
              src={img.props.src}
              alt=""
            />
          );
        })}
      </div>
      <div className="slides__buttons">
        <span
          className="slides__button-prev"
          onClick={() => prevSlide(activeSlide, images)}
        >
          {' '}
          &#8592;
        </span>
        <span
          className="slides__button-next"
          onClick={() => nextSlide(activeSlide, images)}
        >
          &#8594;
        </span>
      </div>
      <div className="slides__dots">
        {images.map((dot, index) => {
          return (
            <span
              onClick={() => setActiveSlide(index)}
              key={index}
              className={activeSlide === index ? 'active' : ''}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
