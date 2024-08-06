import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
const Header=()=>{

    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    return (
    <div id="header">
        <img className="logo" alt="logo" src={LOGO_URL}/>

       
        <nav id="navbar">
        {/* <input type="text" placeholder="Search"/> */}
            <ul id="ul-items">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact</li>
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