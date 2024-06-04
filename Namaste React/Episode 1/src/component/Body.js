import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimers from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardWithDiscount = withDiscountLabel(RestaurantCard);

  const { loggedInUser, SetUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();


  return listOfRestaurants.length === 0 ? (
    <Shimers />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded "
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 border  rounded-lg"
            onClick={() => {
              const newUpdatedList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRestaurant(newUpdatedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="my-4 py-4  ">
          <button
            className="px-4 py-1 bg-green-100 m-4 border rounded-lg"
            onClick={() => {
              const updatedList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurant(updatedList);
            }}
          >
            Top Rated Restaurant
          </button>
          <label htmlFor="">UserName:</label>
          <input
            className="border border-black p-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => SetUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap ml-5">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {/* {console.log(restaurant.info.aggregatedDiscountInfoV3) } */}
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithDiscount
                restaurant={restaurant}
                discount={restaurant.info.aggregatedDiscountInfoV3}
              />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
