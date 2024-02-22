import { Accesses } from "./Accesses";
import { Navbar } from "./Navbar";

export function App () {
    return(
        <div>
            <div>
                <Accesses />
            </div>
            <div className="nav">
                <Navbar />
            </div>

        </div>
    )
}