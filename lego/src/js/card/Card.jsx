import { WishList } from "../WishList";
import "../../css/card/card.css";

export function Card({ card }) {
  
  function cardReader(products) {
    return products.map((product, index) => (
      <li key={index}>
        <div className="card">
          <div className="cardContent">
            <div className="cardImgCont">
              <a className="aImg" href=" ">
                <img
                  className="cardImage"
                  src={product.image}
                  alt={product.title}
                />
              </a>
            <div>
              <div className="titleSection">
                <div className="bottomImgCont">
                  <div className="cardInfoCont">
                  {product.info.length > 0 &&
                   <span className="cardInfoSpan">{product.info}</span>
                  }
                  </div>
                </div>
                <div className="likeCont likeBtn cardLike"><div className="cardList">{<WishList />}</div></div>
              </div>
            </div>
            </div>
            
            <div className="cardTitleCont">
              <div className="cardTitle">
                <a className="aTitle" href=" ">
                  <span className="spanTitle">
                    <h3 className="h3Title">{product.title}</h3>
                  </span>
                </a>
              </div>
              <div className="ratePriceCont">
                <div className="cardRateCont">
                  {product.rate &&
                    product.rate.map((element, index) => (
                      <img
                        key={index}
                        className="cardRateImg"
                        src={element}
                        alt=""
                      />
                    ))}
                </div>
                <div className="price cardPriceCont">
                  <span className="cardPrise">{product.price}</span>
                </div>
                <div className="productAvailability">
                  <button className="">
                    <div className="availabilityCont">
                      {product.availability}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    ));
  }

  return <ul id="sellingCard">{cardReader(card)}</ul>;
}
