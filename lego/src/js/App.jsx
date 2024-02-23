import { Accesses } from "./Accesses";
import { Card } from "./Card";
import { ContentBar } from "./ContentBar";
import { Navbar } from "./Navbar";
import { card } from "../json/cardEvidenza.js";
import { card2 } from "../json/buyingOthers.js";
import { help } from "../json/help.js"
import "../css/cardStyle.css"
import { HelpUs } from "./helpUs.jsx";
import { EasterBan } from "./EasterBan.jsx";

export function App() {
    return (
        <div className="fullPage">
            <div id="login">
                <Accesses />
            </div>
            <div id="nav">
                <Navbar />
            </div>
            <div id="banner">

            </div>
            
            <div id="content" className="evidenza pad">
                <div className="contentBar">
                    <ContentBar />
                </div>
            </div>
            <div className="preferiti">

            </div>
            <div className="evidenza border pad">
                <h2 className="h2Title">Set in evidenza</h2>
                <Card card={card} />
            </div>
            <div className="insiders">

            </div>
            <div className="others border marg">
                <h2 className="h2Title">Cosa stanno comprando gli altri</h2>
                <Card card={card2} />
            </div>
            <div className="helpUs">
                <HelpUs help={help}/>
            </div>
            <div className="easterTime">
                <EasterBan />
            </div>

        </div>
    )
}