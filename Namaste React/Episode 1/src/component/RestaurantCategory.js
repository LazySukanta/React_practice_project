import { useState } from "react";
import svg from "../../Public/button.svg";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log(data);
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem((prev) => !prev);
  };
  return (
    <div>
      {/* HEader */}
      <div className="w-8/12 bg-grey-50 shadow-lg p-4 mx-auto my-4">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg shadow-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <img src={svg} alt="" className="w-5 " />
        </div>
        {showItem && <ItemList items={data.itemCards} /> }
      </div>
    </div>
  );
};

export default RestaurantCategory;
