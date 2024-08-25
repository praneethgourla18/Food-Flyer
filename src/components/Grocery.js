import waiting_png from "../utils/waiting.png"
const Grocery = () =>{
  return(
    <div className="mt-[80px] flex justify-center">
       <img
          width="550px"
           height="400px" 
           src={waiting_png}
          alt="waiting img"
          className="transition-transform transform-gpu duration-500 ease-in-out hover:scale-x-90"
         />
    </div>
  )
}
export default Grocery;