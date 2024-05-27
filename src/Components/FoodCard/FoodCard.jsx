/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const [,refetch] = useCart();

  const { name, image, price, recipe, _id } = item;

  const handleAddCart = () => {
    if (user && user.email) {
      // console.log(food,user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Successfully added!");
        }
      });

      // refetch the cart to update the cart items count
      refetch();
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // sent user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="absolute right-0 mr-10 mt-4 px-5 py-2 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="space-y-3 text-center card-body">
        <h2 className="card-title flex justify-center items-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddCart(item)}
            className="btn bg-[#E8E8E8] text-[#BB8506] text-[16px] border-b-2 hover:bg-[#1F2937] border-b-[#BB8506] px-6 uppercase"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
