import { useState } from "react";
import { Card } from "./Card";

export function Carousel ({ card })  {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) => prevIndex + 4);
  };

  const prev = () => {
    setActiveIndex((prevIndex) => prevIndex - 4);
  };

  return (
    <div>
      <div className="carousel">
        {[...Array(Math.ceil(card.length / 4))].map((_, index) => (
          <div key={index} className="carousel-item">
            {card.slice(index * 4, index * 4 + 4).map((card, i) => (
              <div key={card.id}
                className={`card ${activeIndex + i === index * 4 ? "active" : ""}`}>
                <Card {...card}/>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};
