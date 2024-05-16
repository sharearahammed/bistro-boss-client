import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(ltem=>ltem.category === 'popular');
    console.log(menu)
    return (
        <section className="max-w-screen-lg mx-auto mb-12">
            <SectionTitle heading="From Our Menu"
            subHeading="Popular Items">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-16">
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;