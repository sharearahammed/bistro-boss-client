import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";


const Manu = () => {
    const[menu] = useMenu();
    const desserts = menu.filter(ltem=>ltem.category === 'dessert');
    const soup = menu.filter(ltem=>ltem.category === 'soup');
    const salad = menu.filter(ltem=>ltem.category === 'salad');
    const pizza = menu.filter(ltem=>ltem.category === 'pizza');
    const offered = menu.filter(ltem=>ltem.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={desserts} title="desert" img={dessertImg}></MenuCategory>

            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>

            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>

            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

            
        </div>
    );
};

export default Manu;