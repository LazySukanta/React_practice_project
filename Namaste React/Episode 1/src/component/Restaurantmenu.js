import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=651011&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data?.cards[2]?.card?.card?.info);
    console.log(json.data?.cards[2]?.card?.card?.info);
  };

  

  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <p>{resInfo.cuisines.join(", ")}</p>
      <h2>{resInfo.costForTwoMessage}</h2>
      <ul>
        <li>Biriyani</li>
        <li>Brgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
