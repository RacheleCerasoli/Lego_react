const EasterComponent = ({ image, title, description, buy }) => {
    return (
        <div className="cardeaster">
            <img className="cardImageeaster" src={image} alt={title} />
            <div className="cardContent3">
                <h3 className="cardTitleeaster">{title}</h3>
                <p className="cardDescriptioneaster">{description}</p>
                <button className="buyButtoneaster">{buy}</button>
            </div>
        </div>
    )
}

export default EasterComponent;