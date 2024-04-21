import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const {
    resName,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        // src= {CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
