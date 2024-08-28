
const ResMenuShimmer = () => {
  return (
    <div className="mt-[110px] flex flex-col items-center">
      {/* Shimmer for Restaurant Info */}
      <div className="w-full max-w-5xl shadow-2xl bg-[#FFF] rounded-[10px] p-4 flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] mb-5">
        <div className="w-full sm:w-[200px] h-[180px] bg-gray-300 rounded-[10px] animate-pulse"></div>
        <div className="flex flex-col justify-center w-full">
          <div className="h-10 bg-gray-300 rounded-md mb-4 animate-pulse"></div>
          <div className="h-5 bg-gray-300 rounded-md mb-2 animate-pulse w-3/4 sm:w-1/2"></div>
          <div className="h-5 bg-gray-300 rounded-md animate-pulse w-1/2 sm:w-1/4"></div>
        </div>
      </div>

      {/* Shimmer for Menu Sections */}
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className="w-full max-w-5xl shadow-2xl bg-[#FFF] rounded-[10px] p-4 mb-5 border border-b-[8px]"
        >
          <div className="flex justify-between items-center animate-pulse">
            <div className="h-6 bg-gray-300 rounded-md w-1/2 sm:w-1/3"></div>
            <div className="h-6 bg-gray-300 rounded-md w-1/4 sm:w-1/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuShimmer;
