import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import Slider from "react-slick";

export function GlobalBannerCarousel2 ({ global }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="lbay">
      <button>
        <svg
          width="18"
          height="28"
          viewBox="0 0 18 28"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="reverse"
        >
          <path
            d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <div>
        <p className="lbayPara">
          {global[currentSlide].title} <a href=" ">{global[currentSlide].link}</a>
        </p>
      </div>
      <button>
        <svg
          width="18"
          height="28"
          viewBox="0 0 18 28"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <Slider {...settings}>
        {global.map((item, index) => (
          <div key={index}>
            <p className="lbayPara">
              {item.title} <a href=" ">{item.link}</a>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

GlobalBannerCarousel2.propTypes = {
  global: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GlobalBannerCarousel2;