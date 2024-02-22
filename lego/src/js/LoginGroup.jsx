import "../css/loginGroup.css"

export function LoginGroup () {
    return (
        <div className="loginGroup">
            <div className="laccount">
                <button>
                    <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Icon__StyledSVG-lm07h6-0 cnHyRF UtilityBarstyles__AccountIcon-sc-1uwh8t8-5 KHcEY"
                    >
                        <g transform="translate(1 1)" fillRule="nonzero" fill="none">
                            <rect
                                stroke="#2C2C2C"
                                strokeWidth="1.5"
                                fill="#FFCF00"
                                x="4.875"
                                width="8.25"
                                height="6.038"
                                rx=".729"
                            ></rect>
                            <rect
                                stroke="#2C2C2C"
                                strokeWidth="1.2"
                                fill="#FFCF00"
                                x="3.75"
                                y="14.34"
                                width="10.5"
                                height="5.66"
                                rx=".729"
                            ></rect>
                            <path
                                d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z"
                                stroke="#2C2C2C"
                                strokeWidth="1.5"
                                fill="#FFCF00"
                            ></path>
                            <path
                                d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z"
                                fill="#2C2C2C"
                            ></path>
                        </g>
                    </svg>
                    <span>Account</span>
                </button>
            </div>
            <span className="line"></span>
            <div className="linsiders">
                <a href=" ">
                    <img
                        src="https://www.lego.com/_next/static/images/insidersOut-1007c87df3063963a6a3f7de243ac98e.svg"
                        alt=""
                    />
                    <span>Iscriviti a Insiders</span>
                </a>
            </div>
        </div>
    )
}