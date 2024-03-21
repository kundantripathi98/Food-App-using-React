let Header = () => {
    return <header>
        <div className="logo">
            <img src="https://zaika-foods.netlify.app/logo.2d766eac.png" alt="" />
        </div>

        <ul>
            <li><a href=""><i className="fa-solid fa-house"></i> Home</a></li>
            <li><a href=""><i className="fa-brands fa-react"></i> About</a></li>
            <li><a href=""><i className="fa-solid fa-cart-shopping"></i> Cart</a></li>
            <li><a href=""><i className="fa-solid fa-user"></i> Login</a></li>
        </ul>
    </header>
}

export default Header;