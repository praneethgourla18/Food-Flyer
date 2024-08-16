import ResCard from "./ResCard";

import Shimmer from "./Shimmer";

import { useState ,useEffect  } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "../../utils/useOnlineStatus"

const Body=()=>{
    const [restaurants, setRestaurants] = useState([]);

    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText, setSearchText] = useState("");

    const fetchRestaurants = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
    
    useEffect(() => {
        fetchRestaurants();
      }, []);

     const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1> Ohhhh Looks like you are offline! CHeck your internet connection.</h1>
    

      if(restaurants.length===0){
       return(
       <Shimmer/>
        );
          
      }
    return (
        <div id="body">
            <div id="filter-btn">

                <div className="search">
                    <input type="search" placeholder=" Search for restaurants and food" className="searchBar" value={searchText}
                     onChange={(e)=>{
                        const newSearchText = e.target.value;
                        setSearchText(newSearchText);

                         const filteredR = restaurants.filter((res) => {
                             const nameMatches = res.info.name.toLowerCase().includes(newSearchText.toLowerCase());

                             const cuisinesMatch = res.info.cuisines.some((cuisine) => 
                                 cuisine.toLowerCase().includes(newSearchText.toLowerCase())
                             );

                             return nameMatches || cuisinesMatch;
                         });
                         
                            setFilteredRestaurants(filteredR);
                         
                         console.log(newSearchText);
                     }} />
                    <button className="searchBtn" onClick={
                        ()=>{
                            setSearchText("")
                            setFilteredRestaurants(restaurants);
                            // setRestaurants(restaurants);
                        }
                    }>Clear</button>
                </div>
               
                {/* <button id="ratingfilter" onClick={()=>{
                    const filtered=restaurants.filter(res=>res?.info?.avgRating>4);
                    setFilteredRestaurants(filtered);
                }} >
                    Top rated restaurants
                </button> */}
            </div>

            <div id="allcontent">
                {filteredRestaurants.map((i) => (
                    // <ResCard key={i?.info?.id} resObj={i} />

        <Link
            key={i?.info?.id}
            to={"/restaurants/" + i.info.id}
          >
            <ResCard resObj={i} />
          </Link>
                ))}
            </div>
        </div>
    );
}
export default Body;