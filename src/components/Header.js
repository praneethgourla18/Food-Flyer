import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../utils/images-removebg-preview.png";
import menu_icon from '../utils/menu_icon.png';
import menu_close from '../utils/menu_close.png';
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from 'react-redux';
import Login from "./Login"

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onlineStatus = useOnlineStatus();

    const cartItems=useSelector((store)=>store.cart.items);

    return (
        <div >
            <div className="flex justify-between items-center bg-[#FFF] shadow-md fixed top-0 right-0 left-0 z-50  md:h-[80px] px-5">
                <img className="w-[130px] h-[80px] md:w-[190px] relative" alt="logo" src={logo} />
                <div className="flex items-center md:gap-3 gap-2">
                <div className="md:hidden">
                    {/* <Link to="/Cart">Ca rt({cartItems.length})</Link> */}
                    <Link to="/Cart" className="relative group">
                      <img 
                        className="w-8 h-8 group-hover:text-[#d4af37] transition-colors duration-300" 
                        src="https://img.icons8.com/material-two-tone/33/shopping-bag--v1.png" 
                        alt="shopping-bag--v1"
                      />
                      {/* Cart Item Count */}
                      <span className={(cartItems.length > 9) 
                        ? "absolute -top-2 -right-2 bg-[#d4af37] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold group-hover:bg-[#fff] group-hover:text-[#d4af37] transition-all duration-300"
                        : "absolute -top-1.5 -right-1.5 bg-[#d4af37] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center font-bold group-hover:bg-[#fff] group-hover:text-[#d4af37] transition-all duration-300"
                      }>
                        {cartItems.length}
                      </span>
                    </Link>

                </div>

                             
                <nav id="navbar" className='hidden md:flex mr-3'>
                    <ul className="flex items-center space-x-3 text-slate-700 md:text-slate-800">
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                          <Link to="/Grocery">Grocery</Link>
                        </li>
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                          <Link to="/About">About</Link>
                        </li>

                        
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                          <Link to="/Cart">Cart({cartItems.length})</Link>
                        </li>





                        {/* <li className="px-3 py-2 bg-[#fff] font-medium md:font-bold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff] "  onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}>
                            <Link to={(btnNameReact === "Login")?"/Logout":"/Login"}> {btnNameReact === "Login" ? (
                                <h1>Logout</h1>
                            ) : (
                               <h1>Login</h1>
                            )}</Link>
                        </li> */}
                        <li className="p-1 cursor-pointer ">
                            <img width="30" height="30" src="https://img.icons8.com/plumpy/30/user-male-circle.png" alt="user-male-circle"/>
                        
                        </li>
                    </ul>
                </nav>





                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <img width="33" height="33" src="https://img.icons8.com/plumpy/33/user-male-circle.png" alt="user-male-circle"/>
                </button>
                </div>
            </div>

            {isMenuOpen && (
                <aside className="fixed top-[80px] right-0 w-[130px] bg-[#FFF] shadow-lg md:hidden z-50 transition-transform transform -translate-x-0 pb-2">
                    <ul className="flex flex-col items-center space-y-2">
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3 py-2 text-gray-700 font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                          <Link to="/">Home</Link>
                        </li>



                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3 py-2 text-gray-700 font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                          <Link to="/Grocery">Grocery</Link>
                        </li>

                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3 py-2 text-gray-700 font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
                          <Link to="/About">About</Link>
                        </li>

                        <button 
                            className="px-3 py-2 text-gray-700 font-semibold rounded-[10px] border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300" 
                            onClick={() => {
                                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                                setIsMenuOpen(!isMenuOpen);
                              }}

                        >
                            <h1>{btnNameReact}</h1>
                        </button>
                    </ul>
                </aside>
            )}
        </div>
    );
};

export default Header;
