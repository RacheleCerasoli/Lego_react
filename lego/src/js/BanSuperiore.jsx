const SuperiorBan = ({ image, title, description, button1, button2 }) => {
    return (
        <div>
            <img className="imagebanner" src={image} alt={title} />
            <div className="contentban2">
                <span className="titlebanner">
                    <h2>{title}</h2>
                    </span>
                <p className="descriptionbanner">{description}</p>
                <div className="buttonbanner1">
                    <button className="buttonbanner">{button1}
                        <svg width="10"
                            height="20"
                            viewBox="0 0 18 28"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            class="Icon__StyledSVG-lm07h6-0 kNvokt Chevronstyles__ChevronIcon-sc-1qql32m-0 cEWHhy HeroBannerstyles__StyledChevron-sc-22eq7p-14 kRIbhw">
                            <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <button className="buttonbanner">{button2}
                        <svg width="10"
                            height="20"
                            viewBox="0 0 18 28"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            class="Icon__StyledSVG-lm07h6-0 kNvokt Chevronstyles__ChevronIcon-sc-1qql32m-0 cEWHhy HeroBannerstyles__StyledChevron-sc-22eq7p-14 kRIbhw">
                            <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SuperiorBan;