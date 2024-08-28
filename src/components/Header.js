import logo from "../utils/images-removebg-preview.png"
import login_img from '../utils/icons8-import-26.png';
import logout_img from '../utils/icons8-logout-32.png';
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
const Header=()=>{

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (
    <div className="flex gap-[11px] md:justify-between px-3 items-center bg-[#FFF] shadow-md  fixed top-0 right-0 left-0 h-[80px] z-50 md:h-[80px]">
        <img className="w-[100px] h-[80px]  md:w-[190px]" alt="logo" src={logo}/>


        <nav id="navbar">
        {/* <input type="text" placeholder="Search"/> */}
            <ul className="flex justify-center items-center text-slate-700 md:text-slate-800">
                {/* <li className="px-3">
                    {onlineStatus ? "😊" : "😢"}
                </li> */}
                <li className="px-1 py-1 md:px-3 md:py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                  <Link to="/">Home</Link>
                </li>
                <li className="px-1 py-1 md:px-3 md:py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                  <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-1 py-1 md:px-3 md:py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff] "> 
                    <Link to="/About">About</Link>
                </li>
                <li className="px-1 py-1 md:px-3 md:py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff] group">
                  <Link to="/Cart" className="flex items-center">
                    {/* <img
                      width="25px"
                      height="40px"
                      src="https://img.icons8.com/ios-filled/50/shopping-cart.png"
                      alt="shopping-cart"
                      className="md:group-hover:invert md:group-hover:brightness-0 transition-all duration-200"
                    /> */}
                 Cart </Link>
                </li>

                <button className="ml-[4px] md:px-3 md:py-2 bg-[#fff] font-bold rounded-[10px]"
                onClick={() => {
                         btnNameReact === "Login"
                          ? setBtnNameReact("Logout")
                         : setBtnNameReact("Login");
                }} > {btnNameReact==="Login" ?
                  <img
                       width="25px"
                        height="40px" 
                        src={login_img}
                        alt="login-rounded-right"
                        className="group-hover:invert group-hover:brightness-0 transition-all duration-200"
                        />
                  : <img
                       width="25px"
                        height="45px" 
                        src={logout_img}
                        alt="login-rounded-right"
                        className="group-hover:invert group-hover:brightness-0 transition-all duration-200"
                        />} </button>
            </ul>

        </nav>

    </div>
)
}
export default Header;