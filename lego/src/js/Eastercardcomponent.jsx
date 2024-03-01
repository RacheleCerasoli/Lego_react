import { easterIdeas } from "../json/easterIdeas"
import EasterComponent from "./Eastercard";
import "../css/cardweekStyle.css";

export const EasterCardComponent = () => {
    return (
        <div className="eastercardcontainer">
            <h2>Idee regalo per Pasqua</h2>
            <div className="eastercontainer">
                {easterIdeas.map((item, index) => (
                    <EasterComponent key={index} {...item} />
                ))}
            </div>

        </div>
    );
}