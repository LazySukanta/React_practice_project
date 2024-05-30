import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useResTaurantMenu";


const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log("hello");
  console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categories = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter( c => c.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((item) => {
          const { name, description, imageId, defaultPrice, price, id } =
            item.card.info;

          return (
            <li key={id}>
              {name}
              {" Rs"}
              {defaultPrice / 100 || price / 100} <br />
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;

