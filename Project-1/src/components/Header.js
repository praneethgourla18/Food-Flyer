import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus"
const Header=()=>{

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (
    <div id="header">
        <img className="logo" alt="logo" src={LOGO_URL}/>

       
        <nav id="navbar">
        {/* <input type="text" placeholder="Search"/> */}
            <ul id="ul-items">
                <li>
                    {onlineStatus ? "😊" : "😢"}
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                   <Link to="/Cart" >Cart</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <button className="login"
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