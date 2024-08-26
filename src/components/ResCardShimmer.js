const ResCardShimmer = () => {
  return (
    <div className="w-[240px] rounded-[10px] p-[10px] m-[18px] bg-[#FFF] shadow-lg border border-gray-200 ">
      {/* Image Placeholder */}
      <div className="w-[100%] h-[180px] bg-gray-300 rounded-[10px] animate-pulse"></div>

      {/* Title Placeholder */}
      <div className="mt-[10px] h-[20px] bg-gray-300 rounded-[5px] animate-pulse"></div>

      {/* Cuisines Placeholder */}
      <div className="mt-[8px] h-[15px] bg-gray-300 rounded-[5px] animate-pulse"></div>

      {/* Locality Placeholder */}
      <div className="mt-[8px] h-[15px] bg-gray-300 rounded-[5px] animate-pulse"></div>

      {/* Rating and Delivery Time Placeholder */}
      <div className="mt-[10px] flex gap-[7px]">
        <div className="w-[50px] h-[15px] bg-gray-300 rounded-[5px] animate-pulse"></div>
        <div className="w-[50px] h-[15px] bg-gray-300 rounded-[5px] animate-pulse"></div>
      </div>
    </div>
  );
};

export default ResCardShimmer;
