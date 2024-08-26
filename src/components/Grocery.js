import waiting_png from "../utils/waiting.png"
const Grocery = () =>{
  return(
    <div className="mt-[80px] flex flex-col items-center justify-center">
       <img
         
           src={waiting_png}
          alt="waiting img"
          className="w-[550px] h-[400px] object-cover transition-transform transform-gpu duration-500 ease-in-out hover:scale-x-90"
         />
        <h1 className="text-2xl font-extrabold text-center text-gray-800">
          Our Grocery Store is Coming Soon!
        </h1>
        <p className="text-center text-gray-600">
           Get ready to shop the freshest produce and quality groceries right at your fingertips.
        </p>
    </div>
  )
}
export default Grocery;

