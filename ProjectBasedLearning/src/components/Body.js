import ResCard from "./ResCard";



import { useState ,useEffect  } from "react";

const Body=()=>{
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurants = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
    
    useEffect(() => {
        fetchRestaurants();
      }, []);
    

      if(restaurants.length===0){
       return(
        <div id="loading">
          <img 
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
          alt="Loading..."
          width="480"
          height="480"
        />
      </div>
        );
      }
    return (
        <div id="body">
            <div id="filter-btn">
               
                <button id="ratingfilter" onClick={()=>{
                    const filtered=restaurants.filter(res=>res?.info?.avgRating>4);
                    setRestaurants(filtered);
                }} >
                    Filter By Rating
                </button>
            </div>

            <div id="allcontent">
                {restaurants.map((i) => (
                    <ResCard key={i?.info?.id} resObj={i} />
                ))}
            </div>
        </div>
    );
}
export default Body;