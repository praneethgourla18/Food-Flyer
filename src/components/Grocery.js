import waiting_png from "../utils/waiting.png"
const Grocery = () =>{
  return(
    <div className="mt-[80px] flex justify-center">
       <img
          width="550px"
           height="400px" 
           src={waiting_png}
           alt="login-rounded-right"
           className="group-hover:invert group-hover:brightness-0 transition-all duration-200"
           />
    </div>
  )
}
export default Grocery;