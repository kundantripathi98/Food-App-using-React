let Header = () => {
    return <header>
        <div className="logo">
            <img src="https://zaika-foods.netlify.app/logo.2d766eac.png" alt="" />
        </div>

        <ul>
            <li><a href=""><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a href=""><i class="fa-brands fa-react"></i> About</a></li>
            <li><a href=""><i class="fa-solid fa-cart-shopping"></i> Cart</a></li>
            <li><a href=""><i class="fa-solid fa-user"></i> Login</a></li>
        </ul>
    </header>
}

export default Header;