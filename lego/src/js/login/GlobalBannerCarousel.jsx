import { useState } from "react";
import "../../css/login/globalBanner.css";

export function GlobalBannerCarousel({ global }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevClick() {
    setCurrentSlide((currentSlide - 1 + global.length) % global.length);
  }

  function handleNextClick() {
    setCurrentSlide((currentSlide + 1) % global.length);
  }

  

  return (
    <div className="lbay">
      <button onClick={handlePrevClick}>
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
      <div className="lbayContent">
        <div className="lbayInner">
          <p className="lbayPara">
            {global[currentSlide].title} <a href=" ">{global[currentSlide].link}</a>
          </p>
        </div>
      </div>
      <button onClick={handleNextClick}>
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
    </div>
  );
}