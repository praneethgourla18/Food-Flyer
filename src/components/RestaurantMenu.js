import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rating_icon from "../utils/icons8-rating-50.png";
import { IMG_URL } from "../utils/constant";
import ResMenuShimmer from "./ResMenuShimmer";
import Footer from "./Footer"
import { useDispatch } from "react-redux";
import {addItems} from "../utils/cartSlice";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const dispatch =useDispatch();

  const handleAdditem = (item) => {
     dispatch(addItems(item));
  }

  const fetchMenu = () => {
    fetch(
      `https://food-flyer-server.vercel.app/menu?resId=${resId}&lat=17.4875418&lng=78.3953462`
    )
      .then((res) => res.json())
      .then((data) => setResInfo(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  if (resInfo == null) {
    return <ResMenuShimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, sla, cloudinaryImageId } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards = regularCards.filter(
    (card) =>
      card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (
    <div className="mt-[110px] flex flex-col items-center">
      <div className="w-full max-w-5xl shadow-2xl bg-[#FFF] rounded-[10px] p-4 flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] mb-5">
        <div>
          <img
            className="w-full h-[200px] object-cover sm:h-[180px] rounded-[10px]"
            src={IMG_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-[Great Vibes] mt-[3px] font-bold text-3xl sm:text-4xl">{name}</h1>
          <h5 className="font-light text-sm mt-2">{cuisines?.join(", ")}</h5>

          <div className="mt-4 font-normal flex gap-[7px]">
            <div className="flex gap-[2px]">
              <img width="25" height="15" src={rating_icon} alt="rating" />
              <h4 className="font-medium">{avgRating}</h4>
            </div>
            <h4 className="mx-[3px]">•</h4>
            <h4 className="font-medium">{sla?.deliveryTime} mins</h4>
            <h4 className="mx-[3px]">•</h4>
            <h4 className="font-medium">{costForTwoMessage}</h4>
          </div>
        </div>
      </div>

      {itemCards.map((c, index) => (
        <div
          key={index}
          className="cursor-pointer w-full max-w-5xl shadow-2xl bg-[#FFF] rounded-[10px] p-6 border border-b-[8px] mb-4"
        >
          <div
            className="flex justify-between"
            onClick={() => toggleSection(index)}
          >
            <h1 className="font-bold text-gray-600 text-medium">{c.card.card.title}</h1>
            <h1>
              {openSectionIndex === index ? (
                <img
                  width="15"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/chevron-up.png"
                  alt="chevron-up"
                />
              ) : (
                <img
                  width="15"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/chevron-down.png"
                  alt="chevron-down"
                />
              )}
            </h1>
          </div>

          {openSectionIndex === index && (
            <div className="mt-2">
              {c.card.card.itemCards?.map((item, idx) => {
                const { name, price, imageId, description, defaultPrice } =
                  item.card.info || {};
                
                return (
                  <div
                    key={idx}
                    className="border-b border-gray-200 py-2 flex justify-between"
                  >
                    <div>
                      <h2 className="font-semibold">{name}</h2>
                      <p className="text-gray-600">
                        ₹{price ? price / 100 : defaultPrice / 100}
                      </p>
                      {/* <p className="text-gray-700">{description}</p> */}
                    </div>
                    <div className="relative">
                      {imageId == null ? (
                        <button className="p-2 w-[50px] rounded-[5px] bg-yellow-300" onClick={()=>{handleAdditem(c)}}>
                          Add+
                        </button>
                      ) : (
                        <div>
                          <img
                            className="w-[100px] h-[100px] object-cover rounded-[10px]"
                            src={IMG_URL + imageId}
                          />
                          <button className="p-1 w-[50px] rounded-[30px] bg-yellow-300 absolute bottom-0 right-0 hover:bg-[#70e000]" onClick={()=>{handleAdditem(c)}}>
                            Add+
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default RestaurantMenu;
