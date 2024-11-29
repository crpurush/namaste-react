import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [listOfRestaturants, setListOfRestaturants] = useState([
        {
            data: {
            id:"sds3232",
            restaurantName : "Meghana Foods",
            cusine : "Biryani, North Indian, Asian",
            avgRating: "3.8",
            expectedTimeToArrive: "30 mintes",
            logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"
            }
        },
        {
            data: {
                id:"jdkg2223",
                restaurantName : "KFC",
                cusine : "Burger, North Indian, Asian",
                avgRating: "4.8",
                expectedTimeToArrive: "40 mintes",
                logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30a-7492-444b-a485-1b7e2804e091_671928.JPG"
            }
        },
        {
            data: {
                id:"sdfs23",
                restaurantName : "Milano Ice cream",
                cusine : "Desserts, North Indian, Asian",
                avgRating: "4.5",
                expectedTimeToArrive: "20 mintes",
                logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vpuj0kuccaedvg3wgvgw"
            }
        },
        {
            data: {
                id:"dsg",
                restaurantName : "Kebapci",
                cusine : "Turkish,Middle Eastern",
                avgRating: "4.3",
                expectedTimeToArrive: "10 mintes",
                logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/82cee87165a12942080a2df5a3b46fb9"
            }
        },
        {
            data: {
                id:"sfsfgsd",
                restaurantName : "Box 8",
                cusine : "Thalis, North Indian, Asian",
                avgRating: "4.5",
                expectedTimeToArrive: "10-20 mintes",
                logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/24/a6a25370-d287-4ffd-a4b7-d5735e5ed007_289266.jpg"
            }
        },
        {
            data: {
                id:"sdgs89",
                restaurantName : "Ghar ka khana",
                cusine : "Thalis, South Indian",
                avgRating: "3.7",
                expectedTimeToArrive: "15 mintes",
                logoURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/71b78990206ace08702e02471bf7466b"
            }
        },
    ]);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    () => {
                        const filteredRestaurants = listOfRestaturants.filter((res) => res.data.avgRating > 4 );
                        setListOfRestaturants(filteredRestaurants);
                    }
                }
                >Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {listOfRestaturants.map(restaurant =>
                    <RestaurantCard key={restaurant.id} resData = {restaurant} />
                )}
            </div>
        </div>
    )
}

export default Body;