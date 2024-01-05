import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleArrow = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="navbar bg-gray-300">
                <div className="navbar justify-between max-w-7xl mx-auto">
                    <div className="flex-1">
                        <a className="btn btn-ghost font-Ubuntu text-2xl">Pti.</a>
                    </div>
                    <div className="w-full  border">
                        <div className="mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search"
                                className="md:w-[500px] input input-bordered "
                            />
                            <div>
                                <div className="dropdown">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn"
                                        onClick={handleArrow}
                                    >
                                        Menu {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                    {isOpen && (
                                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
                    <div>
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
