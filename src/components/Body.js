import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";

let restaurantsListMock = [
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
]

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    () => {
                        restaurantsListMock = restaurantsListMock.filter((res) => res.data.avgRating > 4 );
                        console.log(restaurantsListMock);
                    }
                }
                >Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {restaurantsList.map(restaurant =>
                    <RestaurantCard key={restaurant.id} resData = {restaurant} />
                )}
            </div>
        </div>
    )
}

export default Body;