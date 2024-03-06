import "../../css/navbar/navMenu.css"

export function NavMenu2({ navMenu }) {
    function cardReader(products) {
        return products.map((product, index) => (
            <li key={index}>
                <button>{product.title}
                    <div>
                        <ul>
                            {Object.entries(product.utility).map(([key, utility], index) => (
                                <li key={index}>
                                    <div>
                                        {utility === utility.btn ? (
                                            <button>{utility.btn}</button>
                                        ) : (
                                            <a href="">{utility.link}</a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </button>
            </li>
        ))
    }

    return (
        <div>
            <ul>{cardReader(navMenu)}</ul>
        </div>
    )
}