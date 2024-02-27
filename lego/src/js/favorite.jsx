
const CardComponent = ({ image, title, description, buy }) => {
    return (
        <div className="card">
            <img className="cardImage" src={image} alt={title} />
            <div className="cardContent">
                <h3 className="cardTitle">{title}</h3>
                <p className="cardDescription">{description}</p>
                <button className="buyButton">{buy}</button>
            </div>
        </div>
    );
}

export default CardComponent;