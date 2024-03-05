import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
    return (
        <nav>
            <h3>LogoShop</h3>
            <div>
                <button>Skates</button>
                <button>Longboards</button>
                <button>Equipamiento</button>
            </div>
            <CartWidget/>
        </nav>
    )
}


export default NavBar