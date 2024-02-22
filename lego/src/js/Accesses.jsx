import { GlobalBanner } from "./GlobalBanner";
import { Login } from "./Login";
import { LoginGroup } from "./LoginGroup";
import "../css/accesses.css"

export function Accesses () {
    return (
        <div className="loginbar">
            <Login />
            <GlobalBanner />
            <LoginGroup />
        </div>
    )
}