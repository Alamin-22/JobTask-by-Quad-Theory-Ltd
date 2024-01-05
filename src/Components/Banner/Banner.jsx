import BannerImg from "../../assets/images/banner.png"

const Banner = () => {
    return (
        <div className="px-3 mt-16">
            <div className="hero  bg-orange-400 md:bg-amber-500 rounded-[35px]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="pt-5 lg:pt-0 lg:pl-20 text-center lg:text-left">
                        <h1 className="text-2xl md:text-5xl text-white font-bold">Deliver Food To Your Door Step </h1>
                        <p className="py-6  md:text-2xl text-zinc-200">Authentic Food, Quick Service, Fast Delivery</p>
                    </div>
                    <img src={BannerImg} className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;