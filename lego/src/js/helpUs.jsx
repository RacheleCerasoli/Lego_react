import "../css/help.css"

export function HelpUs({ help }) {
    function cardReader(products) {
        return products.map((product) => (
            <><div className="cookie">
                <img src={product.cookie} alt=" " />
            </div>
                <div className="cookieCont">
                    <div className="cTitleC">
                        <div className="helpTitle">
                            <span className="cSpanTitle">{product.cTitle}</span>
                        </div>
                        <div>
                            <span className="cSpanContTitle">{product.cContTitle}</span></div>
                        <div className="cookieLink">
                            <button>
                                <span className="cookieLS">{product.cookieBtn}</span></button>
                            <a href=" "><span className="cookieLS">{product.cookieA}</span></a>
                        </div>
                    </div>
                    <img className="cookies" src={product.cookieEnd} alt=" " />
                </div></>
        ))
    }

    return (
        <div className="helpCont">
            {cardReader(help)}
        </div>
    )
}