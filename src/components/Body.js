import ResCard from "./ResCard"

import Shimmer from "./Shimmer";

import search_icon from '../utils/icons8-search-50.png'
import { useState ,useEffect  } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus"

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
        <div >
            <div className=" mt-[110px] mb-[30px]">

                <div className="flex justify-center items-center w-[100%] gap-[2px]">
                    <input type="search" placeholder=" Search for restaurants and food..." className="w-[30rem] p-3 rounded-[10px] border border-black  focus:border-amber-500 focus:text-[#252525]  font-bold  outline-none" 
                          
    value={searchText}
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
                    <button className="bg-[#252525] hover:bg-[#2F5D6F] text-[#FFF] p-3 rounded-[10px]" onClick={
                        ()=>{
                            // setSearchText("")
                             // setFilteredRestaurants(restaurants);
                            // setRestaurants(restaurants);
                        }
                    }><img
                          width="25"
                          height="44" 
                          src={search_icon}
                          alt="search--v1"/></button>
                </div>
               
                {/* <button id="ratingfilter" onClick={()=>{
                    const filtered=restaurants.filter(res=>res?.info?.avgRating>4);
                    setFilteredRestaurants(filtered);
                }} >
                    Top rated restaurants
                </button> */}
            </div>

            <div className="flex flex-wrap ml-[80px]">
                {filteredRestaurants.map((i) => (
                    // <ResCard key={i?.info?.id} resObj={i} />

                   <Link key={i?.info?.id} to={"/restaurants/" + i.info.id}>
                        <ResCard className="p-10" resObj={i} />
                     </Link>
                ))}
            </div>
        </div>
    );
}
export default Body;