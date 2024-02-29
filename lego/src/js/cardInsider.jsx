const Cardlegoinsider = ({ image, title, description, buy }) => {
    return (
        <div className="cardinsider">
            <img className="cardImageInsider" src={image} alt={title} />
            <div className="cardContent2">
                <h3 className="cardTitleInsider">{title}</h3>
                <p className="cardDescriptionInsider">{description}</p>
                <button className="buyButtonInsider">{buy}</button>
            </div>
        </div>
    );
}

export default Cardlegoinsider;