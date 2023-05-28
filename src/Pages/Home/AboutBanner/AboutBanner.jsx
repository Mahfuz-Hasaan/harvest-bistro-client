import React from 'react';
import about from "../../../assets/Home/chef-service.jpg"
const AboutBanner = () => {
    return (
        <div className='w-8/12 mx-auto my-20 relative'>
            <img src={about} alt="" />
            <div className='bg-black bg-opacity-50 p-12 w-10/12 mx-auto absolute top-[85px] left-[105px] text-white space-y-10'>
                <p className='text-6xl font-semibold text-center'>HUNGRY HUB</p>
                <p className='text-sm'>HUGRY HUB is a cozy and inviting restaurant that serves up delicious, home-cooked meals. Our menu features a variety of comfort food favorites, including burgers, fries, chicken wings, and more. We also have a wide selection of beer, wine, and cocktails. Whether you're looking for a casual meal with friends or a special occasion dinner, HUGRY HUB is the perfect place to enjoy a delicious meal in a comfortable setting.</p>
            </div>
        </div>
    );
};

export default AboutBanner;