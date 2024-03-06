import { WishList } from "../WishList";
import "../../css/card/card.css";

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

export default function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    let myScroll = document.getElementById("sellingCard");
    myScroll.scrollIntoView();
    setCurrentSlide((currentSlide - 1 + global.length) % global.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCurrentSlide((currentSlide + 1) % global.length);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: "100%", flexGrow: 1 }}
      nextButton={
        <Button size="small" className="cardButton" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}

// export function Card({ card }) {
  
//   function cardReader(products) {
//     return products.map((product, index) => (
//       <li key={index}>
//         <div className="card">
//           <div className="cardContent">
//             <div className="cardImgCont">
//               <a className="aImg" href=" ">
//                 <img
//                   className="cardImage"
//                   src={product.image}
//                   alt={product.title}
//                 />
//               </a>
//             <div>
//               <div className="titleSection">
//                 <div className="bottomImgCont">
//                   <div className="cardInfoCont">
//                   {product.info.length > 0 &&
//                    <span className="cardInfoSpan">{product.info}</span>
//                   }
//                   </div>
//                 </div>
//                 <div className="likeCont likeBtn cardLike"><div className="cardList">{<WishList />}</div></div>
//               </div>
//             </div>
//             </div>
            
//             <div className="cardTitleCont">
//               <div className="cardTitle">
//                 <a className="aTitle" href=" ">
//                   <span className="spanTitle">
//                     <h3 className="h3Title">{product.title}</h3>
//                   </span>
//                 </a>
//               </div>
//               <div className="ratePriceCont">
//                 <div className="cardRateCont">
//                   {product.rate &&
//                     product.rate.map((element, index) => (
//                       <img
//                         key={index}
//                         className="cardRateImg"
//                         src={element}
//                         alt=""
//                       />
//                     ))}
//                 </div>
//                 <div className="price cardPriceCont">
//                   <span className="cardPrise">{product.price}</span>
//                 </div>
//                 <div className="productAvailability">
//                   <button className="">
//                     <div className="availabilityCont">
//                       {product.availability}
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </li>
//     ));
//   }

//   return <ul id="sellingCard">{cardReader(card)}</ul>;
// }
