import ResCardShimmer from "./ResCardShimmer";
import search_icon from '../utils/icons8-search-50.png';
import Footer from "./Footer"
const Shimmer = () => {
  return (
    <div className="mt-[130px] px-4">
      {/* Search Bar and Button */}
      <div className="flex flex-col items-center mb-6 gap-3">
        <div className="relative w-full max-w-xs">
          <input
            type="search"
            placeholder="Search for restaurants and food..."
            className="w-full p-3 px-4 rounded-[10px] border border-black focus:border-amber-500 focus:text-[#252525] font-semibold outline-none"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 bg-[#252525] hover:bg-[#2F5D6F] text-[#FFF] p-2 rounded-full">
            <img width="20" height="20" src={search_icon} alt="search" />
          </button>
        </div>
      </div>

      {/* Shimmer for the Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {Array(8).fill("").map((_, index) => (
          <ResCardShimmer key={index} />
        ))}
      </div>
    <Footer/>
    </div>
  );
};

export default Shimmer;
