import { NavLeftSide } from "./NavLeftSide";
import { NavRightSide } from "./NavRightSide";
import "../css/navbar.css"


export function Navbar () {
    return (
        <div className="navbar">
            <NavLeftSide />
            <NavRightSide />
        </div>
    )
} 