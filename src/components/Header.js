import logo from "../utils/images-removebg-preview.png"
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
const Header=()=>{

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (
    <div className="flex justify-between px-5 items-center bg-pink-200 fixed top-0 right-0 left-0 h-[80px] z-50">
        <img className="w-[90px] py-[4px] pl-[15px]" alt="logo" src={logo}/>

       
        <nav id="navbar">
        {/* <input type="text" placeholder="Search"/> */}
            <ul className="flex justify-between items-center">
                {/* <li className="px-5">
                    {onlineStatus ? "😊" : "😢"}
                </li> */}
                <li className="px-5">
                  <Link to="/">Home</Link>
                </li>
                <li className="px-5">
                  <Link to="/grocery">Grocery Store</Link>
                </li>
                <li className="px-5"> 
                    <Link to="/About">About</Link>
                </li>
                <li className="px-5"> 
                   <Link to="/Cart" >Cart</Link>
                </li>
                <li className="px-5"> 
                  <Link to="/Contact">Contact</Link>
                </li>
                <button 
                onClick={() => {
                         btnNameReact === "Login"
                          ? setBtnNameReact("Logout")
                         : setBtnNameReact("Login");
                }} > {btnNameReact} </button>
            </ul>
            
        </nav>
        
    </div>
)
}
export default Header;