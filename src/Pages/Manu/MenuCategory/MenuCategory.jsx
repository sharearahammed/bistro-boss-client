/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-8 pb-10">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="my-16 grid md:grid-cols-2 gap-16">
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            {
                title && 
                <Link to={`/order/${title}`}>
            <div className="flex justify-center items-center">
            <button className="text-black text-center btn btn-outline border-0 border-b-4 uppercase mt-[24px]">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            </Link>
            }
        </div>
    );
};

export default MenuCategory;