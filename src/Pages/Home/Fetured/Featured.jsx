import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div>
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it out"
      ></SectionTitle>
      <div>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 2029</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
