import Banner from "../Banner/Banner";
import Description from "../BistroDescription/Description";
import Featured from "../Fetured/Featured";
import PopularMenu from "../PopularMenu.jsx/PopularMenu";
import Catagory from "./Catagory/Catagory";
import Recommends from "./ChiefRecommends/Recommends";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Description></Description>
            <PopularMenu></PopularMenu>
            <Recommends></Recommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;