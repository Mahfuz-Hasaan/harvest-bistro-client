
import React from 'react';
import Banner from '../Banner/Banner';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import AboutBanner from '../AboutBanner/AboutBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommendations from '../Recommendations/Recommendations';
import Feteared from '../Feteared/Feteared';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
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
