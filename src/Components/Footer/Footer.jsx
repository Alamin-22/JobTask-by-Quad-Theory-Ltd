import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import footerImg from "../../assets/images/food.png"
import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className="footer mt-16 bg-amber-500 p-10 text-base-content">
                <div className="footer  max-w-7xl mx-auto">
                    <div className="hero bg-amber-500 ">
                        <div className="hero-content gap-52">
                            <div className="">
                                <div className="relative mb-10 ">
                                    <input type="text" placeholder="Enter Your Email" className="input input-bordered rounded-2xl w-full " />
                                    <button className=" absolute right-3 top-2 btn btn-sm bg-orange-600 text-white border-none hover:bg-orange-800">Subscribe <FaArrowRight /></button>
                                </div>
                                <div className="md:w-[500px] ">
                                    <div className="md:hidden mb-5 space-x-2 text-center">
                                        <button className="p-2 bg-gray-300 rounded-full"><FaGoogle className="text-xl text-orange-500" /></button>
                                        <button className="p-2 bg-gray-300 rounded-full"><FaTwitter className="text-xl text-orange-500" /></button>
                                        <button className="p-2 bg-gray-300 rounded-full"><FaInstagram className="text-xl text-orange-500" /></button>
                                    </div>
                                    <h2 className="text-5xl text-center md:text-left font-Ubuntu text-gray-900">Pti<span className="text-orange-600">.</span></h2>
                                    <div className="mt-7  md:flex items-center justify-between">
                                        <p className="md:text-lg text-center font-semibold">Copyright©Tripp. All Right Reserved</p>
                                        <div className="hidden md:block space-x-2 text-center">
                                            <button className="p-2 bg-gray-300 rounded-full"><FaGoogle className="text-xl text-orange-500" /></button>
                                            <button className="p-2 bg-gray-300 rounded-full"><FaTwitter className="text-xl text-orange-500" /></button>
                                            <button className="p-2 bg-gray-300 rounded-full"><FaInstagram className="text-xl text-orange-500" /></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <img src={footerImg} className="hidden lg:block h-44 lg:h-64" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;