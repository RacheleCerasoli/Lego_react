import { Accesses } from "./login/Accesses.jsx";
import { Card } from "./card/Card.jsx";
import { ContentBar } from "./ContentBar";
import { Navbar } from "./navbar/Navbar.jsx";
import { card } from "../json/cardEvidenza.js";
import { card2 } from "../json/buyingOthers.js";
import { help } from "../json/help.js"
import "../css/card/cardStyle.css"
import { HelpUs } from "./helpUs.jsx";
import { EasterBan } from "./EasterBan.jsx";
import { FavoritesWeekComponent } from "./favoriteweekcomponent";
import { CardInsiderComponent } from "./cardInsidercomponent";
import { InfoSection } from "./InfoSection.jsx";


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
                <FavoritesWeekComponent />

            </div>
            <div className="evidenza border pad">
                <h2 className="h2Title">Set in evidenza</h2>
                <Card card={card} />
            </div>
            <div className="insiders">
                <CardInsiderComponent />

            </div>
            <div className="others border marg">
                <Card card={card2} />              
            </div>
            <div className="helpUs">
                <HelpUs help={help} />
            </div>
            <div className="easterTime">
                <EasterBan />
            </div>
            <div>
                <InfoSection />
            </div>
        </div>
    )
}