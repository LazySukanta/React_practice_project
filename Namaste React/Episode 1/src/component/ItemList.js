import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" border-gray-300 border-b-2 m-2 p-2 text-left flex "
        >
          <div className="w-10/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-2/12 mx-4">
            <div className="absolute">
              <button className="p-2 rounded-lg shadow-lg bg-gray-600 text-white top-3 left-2 mx-12">
                Add +
              </button>
            </div>
            <img
              src={`${CDN_URL}${item.card.info.imageId}`}
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
