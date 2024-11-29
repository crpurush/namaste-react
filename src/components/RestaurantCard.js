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

export default RestaurantCard;