import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CategoriesSlider.css";

// import required modules
import { Pagination } from "swiper";

import slider_1 from "../../../assets/Home/slide1.jpg";
import slider_2 from "../../../assets/Home/slide2.jpg";
import slider_3 from "../../../assets/Home/slide3.jpg";
import slider_4 from "../../../assets/Home/slide4.jpg";
import slider_5 from "../../../assets/Home/slide5.jpg";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";

const CategoriesSlider = () => {
  return (
    <div className="w-8/12 mx-auto my-10">
      <SectionTItle 
      subHading={"---From 11:00am to 10:00pm---"}
      heading={"ORDER ONLINE"}
      ></SectionTItle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="" src={slider_1} alt="" />
          <h3 className="text-2xl font-Oswald -mt-12 text-white">SALAD</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider_3} alt="" />
          <p className="text-2xl font-Oswald -mt-12 text-white">SOUPS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_2} alt="" />
          <p className="text-2xl font-Oswald -mt-12 text-white">PIZZAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_4} alt="" />
          <p className="text-2xl font-Oswald -mt-12 text-white">DESSERTS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_2} alt="" />
          <p className="text-2xl font-Oswald -mt-12 text-white">PIZZAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_4} alt="" />
          <p className="text-2xl font-Oswald -mt-12 text-white">DESSERTS</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
