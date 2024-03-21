import ResCard from "./Res-card";

let Body = () => {
    return <section className="body">
        <div className="container">
            <div className="search-filter">
                <div className="searchBar">
                <input type="text" placeholder="Search for restaurants, cuisines"/>
                <button id="searchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <button>All Restaurants</button>
                <button>Ratings 4.3+</button>
                <button>Pure Veg</button>
                <button>Fast Delivery</button>
                <button>Less than  &#x20B9;300</button>
                <button>Range: &#x20B9;300 - &#x20B9;600</button>
            </div>

        <div className="res-container">
            <h1 id="place-name">Top restaurant chains in Bangalore</h1>

            <ResCard />
        </div>
        </div>
    </section>
}

export default Body;