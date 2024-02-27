import { favoritesWeek } from "../json/favoritesWeek";
import  CardComponent  from "./favorite";
import "../css/cardweekStyle.css";

export const FavoritesWeekComponent = () => {
    return (
        <div className="favoritescsrdContainer">
            <h2>Prodotti Preferiti della Settimana</h2>
            <div className="favoritesContainer">
                {favoritesWeek.map((item, index) => (
                    <CardComponent key={index} {...item} />
                ))}
            </div>
        </div>
    );
}