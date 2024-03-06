const Cardlegoinsider = ({ image, title, description, buy }) => {
    return (
        <div className="cardinsider">
            <img className="cardImageInsider" src={image} alt={title} />
            <div className="cardContent2">
                <h3 className="cardTitleInsider">{title}</h3>
                <p className="cardDescriptionInsider">{description}</p>
                <button className="buyButtonInsider">{buy}
                    <svg
                        width="18"
                        height="28"
                        viewBox="0 0 18 28"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        class="Icon__StyledSVG-lm07h6-0 gxbFIO Chevronstyles__ChevronIcon-sc-1qql32m-0 cEWHhy CardContentstyles__StyledChevron-sc-18sd0hf-13 esQNuC">
                        <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Cardlegoinsider;