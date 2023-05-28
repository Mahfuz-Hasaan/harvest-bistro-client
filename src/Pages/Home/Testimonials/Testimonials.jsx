import React, { useEffect, useState } from "react";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="my-20">
    <SectionTItle 
    subHading={"---What Our Clients Say---"}
    heading={"TESTIMONIALS"}
    >

    </SectionTItle>
    <div className="my-4 w-8/12 mx-auto rounded-xl ">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide className="py-10" key={review._id}>
            <div className="w-8/12 mx-auto space-y-2">
              <Rating className="w-fit mx-auto text-sm" style={{ maxWidth: 100 }} value={review.rating} readOnly />
              <p className="text-7xl font-bold">"</p>
              <p className="text-sm">{review.details}</p>
              <p className="text-[#CD9003] text-xl font-bold">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Testimonials;
