import ResCardShimmer from "./ResCardShimmer";
import search_icon from '../utils/icons8-search-50.png'
const Shimmer = () => {
  return (
    <div className="mt-[130px] px-4">
      
       <div className="flex justify-center mb-6 gap-3">
        <input
          type="search"
          placeholder="Search for restaurants and food..."
          className="w-[30rem] p-3 px-4 rounded-[10px] border border-black focus:border-amber-500 focus:text-[#252525] font-semibold outline-none"
        />
        <button className="bg-[#252525] hover:bg-[#2F5D6F] text-[#FFF] p-3 rounded-[10px]">
          <img width="25" height="25" src={search_icon} alt="search" />
        </button>
      </div>

      {/* Shimmer for the Restaurant Cards */}
      <div className="flex flex-wrap ml-[85px] mt-[30px] gap-6">
        {Array(8).fill("").map((_, index) => (
          <ResCardShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
