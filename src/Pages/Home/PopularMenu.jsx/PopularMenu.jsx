import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category === "popular")
            setMenu(popularItems)
        })
    },[])
    console.log(menu)
    return (
        <section className="max-w-screen-lg mx-auto mb-12">
            <SectionTitle heading="From Our Menu"
            subHeading="Popular Items">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-16">
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;