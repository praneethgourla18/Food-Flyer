import { LOGO_URL } from "../../utils/constant";
const Header=()=>(
    <div id="header">
        <img className="logo" alt="logo" src={LOGO_URL}/>

       
        <nav id="navbar">
        {/* <input type="text" placeholder="Search"/> */}
            <ul id="ul-items">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
        </nav>
        
    </div>
)
export default Header;