import { legoInsider } from "../json/insiders";
import Cardlegoinsider from "./cardInsider";

export const CardInsiderComponent = () => {
    return (
        <div className="cardcontainer1">
            <h2>Iscriviti a LEGO® Insiders, dove giocare conviene</h2>
            <div className="container1">
                {legoInsider.map((item, index) => (
                    <Cardlegoinsider key={index} {...item} />
                ))}
            </div>
        </div>
    );
}