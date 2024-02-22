import { Accesses } from "./Accesses";
import { ContentBar } from "./ContentBar";
import { Navbar } from "./Navbar";

export function App () {
    return(
        <div>
            <div id="login">
                <Accesses />
            </div>
            <div id="nav">
                <Navbar />
            </div>
            <div id="banner">

            </div>
            <div id="content">
            <div className="contentBar">
                <ContentBar />
            </div>
                
            </div>


        </div>
    )
}