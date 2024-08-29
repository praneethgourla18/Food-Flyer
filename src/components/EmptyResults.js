const EmptyResults = () =>{
    return (
        <div className=" flex justify-center mb-[211px] md:mb-[190px]">
            <div className="pt-5 md:pt-3" >

            <h1 className="mt-[30px] sm:mt-[40px] text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-700">No results found..</h1>
            <p className="text-center text-gray-500 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
         Try Searching something else!
      </p>
            </div>
           
        </div>
    )
}

export default EmptyResults;