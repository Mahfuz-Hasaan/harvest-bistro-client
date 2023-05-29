import React from "react";
import { Parallax } from "react-parallax";

const CoverImage = ({ img,heading,details }) => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-400}
      >
        <div className="">
          <div className="hero h-[800px]">
            <div className=""></div>
            <div className=" text-center text-neutral-content">
              <div className="bg-black bg-opacity-40 w-[1200px] h-[450px] flex justify-center items-center">
                <div className="w-[840px] text-[16px]">
                  <h1 className="mb-5 text-7xl font-bold ">{heading}</h1>
                  <p className="mb-5">{details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default CoverImage;
