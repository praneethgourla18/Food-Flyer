import ResCard from "./ResCard";

import initialRestaurants from "../../utils/mockData";

import { useState } from "react";

const Body=()=>{
    const [restaurants, setRestaurants] = useState(initialRestaurants);

    return (
        <div id="body">
            <div id="filter-btn">
               
                <button id="ratingfilter" onClick={()=>{
                    const filtered=restaurants.filter(res=>res.info.avgRating>4);
                    setRestaurants(filtered);
                }} >
                    Filter By Rating
                </button>
            </div>

            <div id="allcontent">
                {restaurants.map((i) => (
                    <ResCard key={i.info.id} resObj={i} />
                ))}
            </div>
        </div>
    );
}
export default Body;