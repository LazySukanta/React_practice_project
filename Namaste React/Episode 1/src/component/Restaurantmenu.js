import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useResTaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log("hello");
  // console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <p className="font-bold text-lg" >{cuisines.join(", ")} - {costForTwoMessage}</p>

      {
        categories.map((category) => <RestaurantCategory data = {category?.card?.card} />)
      }


    </div>
  );
};
export default RestaurantMenu;
