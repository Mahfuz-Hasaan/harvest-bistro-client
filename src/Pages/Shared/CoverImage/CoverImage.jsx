import React from "react";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import { Parallax } from "react-parallax";

const CoverImage = ({ img }) => {
  return (
    <>
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-400}
      >
        <div className="">
          <div
            className="hero h-[800px]"
            
          >
            <div className=""></div>
            <div className=" text-center text-neutral-content">
              <div className="bg-black bg-opacity-40 w-[1200px] h-[450px] flex justify-center items-center">
                <div className="">
                  <h1 className="mb-5 text-7xl font-bold ">OUR MENU</h1>
                  <p className="mb-5">WOULD YOU LIKE TO TRY A DISH?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="py-10 bg-white">
        <SectionTItle
          subHading={"---Don't miss---"}
          heading={"TODAY'S OFFER"}
        ></SectionTItle>
      </div>
      <div>
        <PopularMenu></PopularMenu>
      </div>
    </>
  );
};

export default CoverImage;
