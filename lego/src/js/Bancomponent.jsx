import "../css/Bannerstyle.css"
import SuperiorBan from "./BanSuperiore";
import { Ban } from "../json/BanSuperiore"


export const BanSuperiorComponent = () => {
    return (
        <section>
            <div className="contentban">
                {Ban.map((item, index) => (
                  <SuperiorBan key={index} {...item} /> 
                ))}
            </div>
        </section>
    );
}