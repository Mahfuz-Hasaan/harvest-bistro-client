import React from "react";
import { Helmet } from "react-helmet";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import  banner from '../../../assets/menu/banner3.jpg'
import SectionTItle from "../../../components/SectionTItle/SectionTItle";

const MenuCoverImage = () => {
  return (
    <div>
      
      <CoverImage
        img={banner}
        heading={"OUR MENU"}
        details={"WOULD YOU LIKE TO TRY A DISH?"}
      ></CoverImage>
      <div className="py-10 bg-white">
        <SectionTItle
          subHading={"---Don't miss---"}
          heading={"TODAY'S OFFER"}
        ></SectionTItle>
      </div>
    </div>
  );
};

export default MenuCoverImage;
