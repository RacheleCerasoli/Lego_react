import { Accesses } from "./login/Accesses.jsx";
import { Card } from "./card/Card.jsx";
import { ContentBar } from "./ContentBar";
import { Navbar } from "./navbar/Navbar.jsx";
import { card } from "../json/cardEvidenza.js";
import { card2 } from "../json/buyingOthers.js";
import { help } from "../json/help.js"
import "../css/card/cardStyle.css"
import "../css/mediaquery/mediaCardStyle.css"
import { HelpUs } from "./helpUs.jsx";
import { EasterBan } from "./EasterBan.jsx";
import { FavoritesWeekComponent } from "./favoriteweekcomponent";
import { CardInsiderComponent } from "./cardInsidercomponent";
import { InfoSection } from "./InfoSection.jsx";
import { EasterCardComponent } from "./Eastercardcomponent.jsx";
import { GlobalBanner2, GlobalBannerCarousel2 } from "./login/GlobalBanner2.jsx";
import { Prova } from "./login/prova.js";
import { global } from "../json/lbay.js"
import { GlobalBannerCarousel } from "./login/GlobalBannerCarousel.jsx";
import ProgressMobileStepper from "./card/Card copy.jsx";
import TemporaryDrawer from "./navbar/Drawer.jsx";
import { NavMenu2 } from "./navbar/NavMenu copy.jsx";
import { navMenu } from "../json/navMenu.js"


export function App() {
    return (
        <div className="fullPage">

        <header>
        <div id="login">
                <Accesses />
            </div>
            <div id="nav">
                <Navbar />
            </div>
            </header>
            
            <div id="banner">

            </div>

            <div id="content" className="evidenza pad cont">
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
            <div className="infos">
                <InfoSection />
            </div>
            <div className="easteIdea">
                <EasterCardComponent />
            </div>


            <div>
                <TemporaryDrawer />
            </div>

            <div>
                <NavMenu2 navMenu={navMenu} />
            </div>
        </div>
    )
}