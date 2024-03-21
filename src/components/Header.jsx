let Header = () => {

// window.addEventListener('resize', ()=>{
//     let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//     let element = document.querySelector("ul"); 
//    if (viewportWidth < 768 && element) {
//        element.parentNode.removeChild(element);
//    }
// });


    
    console.log(document.documentElement.clientWidth);
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