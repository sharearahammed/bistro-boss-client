import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white bg-cover my-20">
      <div className="pt-8 bg-black bg-opacity-60">
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="text-white btn btn-outline border-0 border-b-4 uppercase mt-[24px]">Order Now</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
