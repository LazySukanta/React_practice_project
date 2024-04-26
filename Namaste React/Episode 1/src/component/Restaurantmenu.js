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
    setResInfo(json.data);
    console.log(json.data);
  };

  // const { name, cuisines, costForTwoMessage } =    resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      {/* <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>{costForTwoMessage}</h2> */}
      <ul>
        <li>Biriyani</li>
        <li>Brgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
