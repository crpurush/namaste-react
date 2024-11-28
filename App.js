import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Main component list in App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestrauntContainer
 * - RestrauntCard
 *   - Img,
 *   - Name of Restaurant, Star Ratings, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {restaurantName, cusine, avgRating, expectedTimeToArrive, logoURL} = resData;

    return (
        <div className="restaurant-card">
            <img className="restaurant-logo"
            alt="restaurant-logo"
            src={logoURL}
            ></img>
            <h3 className="restaurant-name">{restaurantName}</h3>
            <h4>{cusine}</h4>
            <h4>{avgRating}</h4>
            <h4>{expectedTimeToArrive}</h4>
        </div>
    )
}

const restaurantsList = [{
    id:"sds3232",
    restaurantName : "Meghana Foods",
    cusine : "Biryani, North Indian, Asian",
    avgRating: "3.8 *",
    expectedTimeToArrive: "30 mintes",
    logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"
},
{
    id:"jdkg2223",
    restaurantName : "KFC",
    cusine : "Burger, North Indian, Asian",
    avgRating: "4.8 *",
    expectedTimeToArrive: "40 mintes",
    logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30a-7492-444b-a485-1b7e2804e091_671928.JPG"
},
]
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {restaurantsList.map(restaurant =>
                    <RestaurantCard key={restaurant.id} resData = {restaurant} />
                )}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);