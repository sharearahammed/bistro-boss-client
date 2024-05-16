import SectionTitle from "../../../../Components/SectionTitle";
import img1 from "../../../../assets/menu/pizza-bg.jpg";
import img2 from "../../../../assets/menu/salad-bg.jpg";
import img3 from "../../../../assets/menu/soup-bg.jpg";

const Recommends = () => {
  return (
    <div className="mt-[130px]">
      <SectionTitle
        heading="Should Try"
        subHeading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="mt-[48px] flex lg:flex-row flex-col justify-center items-center gap-5">

        <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="space-y-3 text-center card-body">
            <h2 className="card-title flex justify-center items-center">
              Pizza
            </h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] text-[16px] border-b-2 hover:bg-[#1F2937] border-b-[#BB8506] px-6 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="space-y-3 text-center card-body">
            <h2 className="card-title flex justify-center items-center">
              Salad
            </h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] text-[16px] border-b-2 hover:bg-[#1F2937] border-b-[#BB8506] px-6 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card rounded-none bg-[#F3F3F3] shadow-xl">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="space-y-3 text-center card-body">
            <h2 className="card-title flex justify-center items-center">
              Soup
            </h2>
            <p className="">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            
            <div className="card-actions justify-center">
              <button className="btn hover:bg-[#1F2937] bg-[#E8E8E8] text-[#BB8506] text-[16px] border-b-2 border-b-[#BB8506] px-6 uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recommends;
