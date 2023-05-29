import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import MenuBanner from '../../../assets/menu/banner3.jpg';
import { Parallax } from 'react-parallax';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>HUNGRY HUB | Menu</title>
      </Helmet>
      <Navbar></Navbar>
      <CoverImage
      img={MenuBanner}
      title={"OUR MENU"}
      headline={"WOULD YOU LIKE TO TRY A DISH"}
      ></CoverImage>
    </div>
  );
};

export default Menu;
