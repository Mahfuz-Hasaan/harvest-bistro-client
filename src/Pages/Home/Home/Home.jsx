import React from "react";
import Banner from "../Banner/Banner";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import AboutBanner from "../AboutBanner/AboutBanner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommendations from "../Recommendations/Recommendations";
import Feteared from "../Feteared/Feteared";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HUNGRY HUB | Home</title>
      </Helmet>
      <Banner></Banner>
      <CategoriesSlider></CategoriesSlider>
      <AboutBanner></AboutBanner>
      <PopularMenu></PopularMenu>
      <Recommendations></Recommendations>
      <Feteared></Feteared>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
