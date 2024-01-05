import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleArrow = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="navbar pt-10">
                <div className="navbar justify-between max-w-7xl mx-auto">
                    <div className="flex-1">
                        <Link to={"/"} className="hover:text-gray-600 font-Ubuntu text-2xl">Pti.</Link>
                    </div>
                    <div className="w-full">
                        <div className="mx-auto flex gap-3 ">
                            <div className="relative">
                                <input type="text" placeholder="Search Food" className="pl-11 w-44 md:w-[500px] lg:w-[700px] input input-bordered" />
                                <IoIosSearch className="text-orange-400 text-3xl absolute top-2.5 left-2.5" />
                            </div>
                            <div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn " onClick={handleArrow}>
                                        Menu {isOpen ? <FaChevronUp className="text-orange-400" /> : <FaChevronDown className="text-orange-400" />}
                                    </div>
                                    {isOpen && (
                                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 font-medium text-gray-600">
                                            <li><NavLink to={"/"} className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-orange-500" : "hover:text-orange-500"
                                            } >Home</NavLink></li>
                                            <li><NavLink to={"/details"} className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-orange-500" : "hover:text-orange-500"
                                            }>Details</NavLink></li>
                                            <li><NavLink to={"/category"} className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-orange-500" : "hover:text-orange-500"
                                            }>Category</NavLink></li>
                                            <li><NavLink to={"/favorites"} className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-orange-500" : "hover:text-orange-500"
                                            }>My Favorites</NavLink></li>
                                            <li><NavLink to={"/profile"} className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-orange-500" : "hover:text-orange-500"
                                            }>Profile</NavLink></li>
                                            <li><NavLink to={"/login"} className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-orange-500" : "hover:text-orange-500"
                                            }>Log In/Sing Up</NavLink></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block ">
                        {/* login */}
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
