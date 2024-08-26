import React from "react";

const UserShimmer = () => {
  return (
    <div className="mt-[130px] flex justify-center">
      <div className="w-[650px] rounded-[10px] p-[30px] mt-[50px] bg-white shadow-lg border border-gray-200 transition-transform duration-200 ease-in-out z-10 flex gap-[20px]">
        <div className="h-[280px] w-[280px] bg-gray-300 rounded-full animate-pulse"></div>
        <div className="ml-[20px] flex flex-col justify-center">
          <div className="h-[32px] w-[200px] bg-gray-300 rounded-md animate-pulse mb-[10px]"></div>
          <div className="h-[20px] w-[300px] bg-gray-300 rounded-md animate-pulse mb-[6px]"></div>
          <div className="h-[18px] w-[150px] bg-gray-300 rounded-md animate-pulse mb-[6px]"></div>

          <div className="flex gap-[10px] mt-[20px]">
            <div className="h-[30px] w-[30px] bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-[30px] w-[30px] bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-[30px] w-[30px] bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShimmer;
