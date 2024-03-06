import { GlobalBanner } from "./GlobalBanner";
import { Login } from "./Login";
import { LoginGroup } from "./LoginGroup";
import "../../css/login/accesses.css"
import { GlobalBannerCarousel } from "./GlobalBannerCarousel";
import { global } from "../../json/lbay";

export function Accesses () {
    return (
        <div className="loginbar">
            <Login />
            <GlobalBannerCarousel global={global} />
            <LoginGroup />
        </div>
    )
}