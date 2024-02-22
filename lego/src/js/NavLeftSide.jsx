import { BurgerMenu } from "./BurgerMenu";
import { LegoIcon } from "./LegoIcon";
import { NavMenu } from "./NavMenu";
import "../css/navLeftSide.css"

export function NavLeftSide() {
    return (
        <div className="leftSide">
            <BurgerMenu />
            <LegoIcon />
            <NavMenu />
        </div>
    )
}