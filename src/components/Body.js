import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import search_icon from '../utils/icons8-search-50.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer"
import EmptyResults from "./EmptyResults"

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const fetchRestaurants = async () => {
        const response = await fetch('https://food-flyer-server.vercel.app/restaurants');
        const data = await response.json();
        const fetchedRestaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurants(fetchedRestaurants);
        setFilteredRestaurants(fetchedRestaurants);
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1 className="text-center mt-6">Ohhhh, Looks like you are offline! Check your internet connection.</h1>;
    }

    if (restaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="mt-[130px] px-4">
            <div className="flex flex-col items-center mb-6 gap-3">
                <div className="relative w-full max-w-xs">
                    <input
                        type="search"
                        placeholder="Search for restaurants and food..."
                        className="w-full p-3 rounded-[10px] border border-black focus:border-amber-500 focus:text-[#252525] font-semibold outline-none"
                        value={searchText}
                        onChange={(e) => {
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
                        }}
                    />
                    <button className="absolute right-0 top-0 mt-2 mr-2 bg-[#252525] hover:bg-[#2F5D6F] text-[#FFF] p-2 rounded-full">
                        <img
                            width="20"
                            height="20"
                            src={search_icon}
                            alt="search"
                        />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((i) => (
                        <Link key={i?.info?.id} to={`/restaurants/${i.info.id}`}>
                            <ResCard resObj={i} />
                        </Link>
                    ))
                ) : (
                    <EmptyResults/>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default Body;
