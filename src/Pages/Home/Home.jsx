
import Banner from "../../Components/Banner/Banner";
import PopularItems from "../../Components/PopularItems/PopularItems";
import Recommended from "../../Components/Recommended/Recommended";

const Home = () => {
    

    
    return (
        <div>
            <Banner />
            <PopularItems></PopularItems>
            <Recommended></Recommended>
        </div>
    );
};

export default Home;