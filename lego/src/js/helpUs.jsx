import "../css/help.css"

export function HelpUs({ help }) {
    function cardReader(products) {
        return products.map((product) => (
            <><div className="cookie">
                <img src={product.cookie} alt=" " />
            </div>
                <div className="cookieCont">
                    <div>
                        <div className="helpTitle">
                            <span className="cSpanTitle">{product.cTitle}</span>
                        </div>
                        <div><span className="cSpanContTitle">{product.cContTitle}</span></div>
                        <div>
                            <button>
                                <span>{product.cookieBtn}</span></button>
                            <a href=" "><span>{product.cookieA}</span></a>
                        </div>
                    </div>
                    <img src={product.cookieEnd} alt=" " />
                </div></>
        ))
    }

    return (
        <div className="helpCont">
            {cardReader(help)}
        </div>
    )
}