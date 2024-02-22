import { SearchList } from "./NavSearchList";
import { OrderList } from "./OrderList";
import { WishList } from "./WishList";
import "../css/navRightSide.css"

export function NavRightSide () {
    return (
        <div className="nList">
        <SearchList />
        <WishList />
        <OrderList />
        </div>
    )
}