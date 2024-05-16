/* eslint-disable react/prop-types */

const FoodCard = ({item}) => {
    const{name,image,price,recipe} = item;
    return (
        <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
          <figure>
            <img src={image} alt="" />
          </figure>
          <p className="absolute right-0 mr-10 mt-4 px-5 py-2 bg-slate-900 text-white">${price}</p>
          <div className="space-y-3 text-center card-body">
            <h2 className="card-title flex justify-center items-center">
              {name}
            </h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] text-[16px] border-b-2 hover:bg-[#1F2937] border-b-[#BB8506] px-6 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
    );
};

export default FoodCard;