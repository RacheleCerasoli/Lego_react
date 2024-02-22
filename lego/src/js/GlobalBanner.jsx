import "../css/globalBanner.css";

export function GlobalBanner() {


    return (
        <div className="lbay">
            <button>
                <svg
                    width="18"
                    height="28"
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="reverse"
                >
                    <path
                        d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>
            <div>
                <p className="lbayPara">
                    Ordina entro 24/10 per la spedizione standard entro Halloween.
                    <a href=" ">Compra ora</a>
                </p>
            </div>
            <button>
                <svg
                    width="18"
                    height="28"
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                >
                    <path
                        d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>
        </div>
    )
}