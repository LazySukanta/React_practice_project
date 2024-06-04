import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ restaurant }) => {
  const { loggedInUser } = useContext(UserContext);
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = restaurant.info;

  return (
    <div className="m-4 p-4 w-[210px] bg-slate-100 hover:bg-gray-300 rounded-lg">
      <img
        className="rounded-lg"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3 className="font-bold py-3">{name}</h3>
      <h4 className="font-semibold">{cuisines.join(" ,")}</h4>
      <h4 className="py-3">{avgRating} starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <p>User {loggedInUser}</p>
    </div>
  );
};

//Higher Order Component
//input - resCard ==> (resCard with discount Label)

export const withDiscountLabel = (RestaurantCard) => {
  return ({ restaurant, discount }) => {
    return (
      <div className="label">
        <label className="absolute bg-slate-500 text-black rounded-lg mx-2 p-2 bg-opacity-60">{`${discount.header} ${discount.subHeader}`}</label>
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  };
};

export default RestaurantCard;
