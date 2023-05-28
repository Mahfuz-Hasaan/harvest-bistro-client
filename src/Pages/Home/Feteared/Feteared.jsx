import React from "react";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import feteared_img from "../../../assets/Home/featured.jpg";
import './Feteared.css'

const Feteared = () => {
  return (
    <div className="featured-item my-10 relative bg-fixed">
      <div className="py-10 text-white sec-title">
      <SectionTItle
        subHading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTItle>
      </div>
      <div className="flex items-center gap-12 absolute left-[292px]">
        <div>
          <img className="w-[648px] drop-shadow-lg rounded-lg" src={feteared_img} alt="" />
        </div>
        <div className="w-[605px] space-y-5 text-white">
          <p className="text-2xl">MAY 26, 2023</p>
          <p className="text-lg">WHERE CAN I GET SOME?</p>
          <p className="text-sm">
            "Indulge in a culinary journey at our restaurant, where delectable
            flavors and impeccable service come together to create an
            unforgettable dining experience.Savor exquisite dishes crafted with the finest ingredients, complemented by an extensive wine selection, all within the elegant ambiance of our restaurant."
          </p>
          <div className="border-b-4 border-white w-fit p-2 rounded-lg">
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feteared;
