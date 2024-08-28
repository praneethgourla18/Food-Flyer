import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../utils/images-removebg-preview.png";
import login_img from '../utils/icons8-import-26.png';
import logout_img from '../utils/icons8-logout-32.png';
import menu_icon from '../utils/menu_icon.png';
import menu_close from '../utils/menu_close.png';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onlineStatus = useOnlineStatus();

    return (
        <div >
            <div className="flex justify-between items-center bg-[#FFF] shadow-md fixed top-0 right-0 left-0 z-50  md:h-[80px] px-5">
                <img className="w-[130px] h-[80px] md:w-[190px]" alt="logo" src={logo} />

                <nav id="navbar" className='hidden md:flex'>
                    <ul className="flex items-center space-x-3 text-slate-700 md:text-slate-800">
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/About">About</Link>
                        </li>
                        <li className="px-3 py-2 bg-[#fff] font-medium md:font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/Cart">Cart</Link>
                        </li>
                        <button
                            className="ml-4 px-3 py-2 bg-[#fff] font-bold rounded-[10px] flex items-center justify-center"
                            onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
                            aria-label={btnNameReact === "Login" ? "Login button" : "Logout button"}
                        >
                            {btnNameReact === "Login" ? (
                                <img
                                    width="25px"
                                    height="40px"
                                    src={login_img}
                                    alt="Login icon"
                                    className="transition-all duration-200"
                                />
                            ) : (
                                <img
                                    width="25px"
                                    height="45px"
                                    src={logout_img}
                                    alt="Logout icon"
                                    className="transition-all duration-200"
                                />
                            )}
                        </button>
                    </ul>
                </nav>

                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <img className='w-[25px]' src={isMenuOpen ? menu_close : menu_icon} alt="Menu icon" />
                </button>
            </div>

            {isMenuOpen && (
                <aside className="fixed top-[80px] right-0 w-[130px] bg-[#FFF] shadow-lg md:hidden z-50 transition-transform transform -translate-x-0 ">
                    <ul className="flex flex-col items-center space-y-2">
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3 py-2 text-gray-700 font-medium rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3 py-2 text-gray-700 font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3 py-2 text-gray-700 font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/About">About</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3 py-2 text-gray-700  font-semibold rounded-[10px] hover:bg-[#2F5D6F] hover:text-[#fff]">
                            <Link to="/Cart">Cart</Link>
                        </li>
                        <button 
                            className="px-3 py-2 text-gray-700 font-semibold rounded-[10px] flex items-center justify-center" 
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
