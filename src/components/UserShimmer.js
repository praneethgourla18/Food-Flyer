import React from "react";

const UserShimmer = () => {
  return (
    <div className="mt-[130px] flex justify-center px-4">
      <div className="w-full max-w-[650px] rounded-[10px] p-[20px] md:p-[30px] mt-[50px] bg-white shadow-lg border border-gray-200 transition-transform duration-200 ease-in-out z-10 flex flex-col md:flex-row gap-[20px] items-center">
        <div className="h-[180px] w-[180px] md:h-[280px] md:w-[280px] bg-gray-300 rounded-full animate-pulse"></div>
        <div className="flex flex-col justify-center">
          <div className="h-[32px] w-[200px] md:w-[250px] bg-gray-300 rounded-md animate-pulse mb-[10px]"></div>
          <div className="h-[20px] w-[300px] md:w-[350px] bg-gray-300 rounded-md animate-pulse mb-[6px]"></div>
          <div className="h-[18px] w-[150px] md:w-[200px] bg-gray-300 rounded-md animate-pulse mb-[6px]"></div>

          <div className="flex justify-center md:justify-start gap-[10px] mt-[20px]">
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
