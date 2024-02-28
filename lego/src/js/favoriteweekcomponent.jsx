import { favoritesWeek } from "../json/favoritesWeek";
import CardComponent from "./favorite";
import "../css/cardweekStyle.css";

export const FavoritesWeekComponent = () => {
    return (
        <div className="cardcontainerweek">
            <h2>I preferiti di questa settimana</h2>
            <div className="container1">
                {favoritesWeek.map((item, index) => (
                    <CardComponent key={index} {...item} />
                ))}
            </div>
        </div>
    );
}