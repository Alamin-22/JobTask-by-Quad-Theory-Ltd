import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <div className="max-w-7xl border-red-400 mx-auto font-Roboto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;