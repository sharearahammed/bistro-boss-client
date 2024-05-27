import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const item = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit ,reset } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]}

    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers:{
            'content-type' : 'multipart/form-data'
        }
    });
    console.log(res.data)
    if(res.data.success){
        // now send the menu item data to the database
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url

        }
        // 
        const menuRes = await axiosSecure.patch(`/menu/${item._id}`,menuItem)
        console.log(menuRes.data)
        if(menuRes.data.modifiedCount > 0){
            // show success popup
            reset();
            toast.success('Item Updated Successfully!')
        }
    }
    }
    console.log(item)
    return (
        <div>
            <SectionTitle
            heading="Update an Item"
            subHeading="Update Info"
            ></SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
            defaultValue={item.name}
              {...register("name",{required : true})}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex items-center gap-6">
            {/* category */}

            <div>
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue={item.category}
                {...register("category",{required : true})}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div>
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                defaultValue={item.price}
                  {...register("price",{required : true})}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* recipr details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
            defaultValue={item.recipe}
            {...register("recipe",{required : true})}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          {/* File upload */}
          <div className="form-control w-full my-6">
          <input {...register("image",{required : true})} type="file" className="file-input w-full max-w-xs" />
          </div>

          <button className="btn rounded-none bg-orange-500 text-white">Update Menu Item <FaUtensils className="ml-4"></FaUtensils></button>
        </form>
            </div>
        </div>
    );
};

export default UpdateItem;