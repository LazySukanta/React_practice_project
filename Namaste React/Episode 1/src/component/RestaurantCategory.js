import { useState } from "react";
import svg from "../../Public/button.svg";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);


  function handleClick() {
    setShowIndex();
  }
  return (
    <div>
      <div
        className="w-8/12 bg-grey-50 shadow-lg p-4 mx-auto my-4"
        onClick={handleClick}
      >
        <div className=" flex justify-between cursor-pointer">
          <span className="font-bold text-lg shadow-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <img src={svg} alt="" className="w-5 " />
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
