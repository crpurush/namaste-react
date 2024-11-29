import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData"

const Body = () => {
    const [listOfRestaturants, setListOfRestaturants] = useState( resList );

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