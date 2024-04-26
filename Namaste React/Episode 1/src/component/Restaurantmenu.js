import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

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

// 4 > groupedCard > cardGroupMap > REGULAR > cards[1] > card > card >carousel[0](Loop) > dish > info > (name, description)
// data.
