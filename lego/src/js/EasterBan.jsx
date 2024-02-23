import { easterBan } from "../json/easterBan"
import "../css/easterban.css"

export function EasterBan() {

    function cardReader(products) {
        return products.map((product) => (
            <div className="easter">
                <div className="easterTopImg">
                    <img src={product.trasversal} alt=" " />
                </div>

                    <div className="easterTopTitle">
                        
                        <a href=" ">
                            <div className="eHoriImg">
                                <img src={product.horizontal} alt=" " />
                                </div>
                                <div className="eTopTitleC">
                                    <h1>{product.eTopTitle}</h1>
                                <a href=" ">{product.eBtnTop}</a>
                                </div>
                                
                            
                        </a>
                    </div>
                
                <div className="easterBan">
                    <a href=" ">
                        <div>
                            <img src={product.easterBan} alt="" />
                        </div>
                    </a>
                    <div className="eLinkTitle">
                        <h2>
                            <span>{product.easterPara}</span>
                        </h2>
                        <div className="easterLink">
                            <a href=" " className="ebtn1">{product.eBtnLink1}
                                <svg width="18"
                                    height="28"
                                    viewBox="0 0 18 28"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="Icon__StyledSVG-lm07h6-0 kNvokt Chevronstyles__ChevronIcon-sc-1qql32m-0 cEWHhy HeroBannerstyles__StyledChevron-sc-22eq7p-14 kRIbhw">
                                    <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href=" " className="ebtn2">{product.eBtnLink2}
                                <svg width="18"
                                    height="28"
                                    viewBox="0 0 18 28"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="Icon__StyledSVG-lm07h6-0 kNvokt Chevronstyles__ChevronIcon-sc-1qql32m-0 cEWHhy HeroBannerstyles__StyledChevron-sc-22eq7p-14 kRIbhw">
                                    <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )

        )
    }
    return (cardReader(easterBan))
}