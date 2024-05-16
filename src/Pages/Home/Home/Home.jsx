import Banner from "../Banner/Banner";
import Description from "../BistroDescription/Description";
import Callus from "../CallUs/Callus";
import Featured from "../Fetured/Featured";
import PopularMenu from "../PopularMenu.jsx/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Catagory from "./Catagory/Catagory";
import Recommends from "./ChiefRecommends/Recommends";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Description></Description>
            <PopularMenu></PopularMenu>
            <Callus></Callus>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;