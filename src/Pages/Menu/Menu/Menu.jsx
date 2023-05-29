import React from "react";
import OfferedMenu from "../OfferedMenu/OfferedMenu";
import DesertsMenu from "../DesertseMenu/DesertsMenu";
import { Helmet } from "react-helmet";
import PizzaMEnu from "./PizzaMEnu/PizzaMEnu";
import SoupMenu from "./SoupMenu/SoupMenu";
import SaladMenu from "../SaladMenu/SaladMenu";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>HUNGRY HUB | Menu</title>
      </Helmet>
      <OfferedMenu></OfferedMenu>
      <DesertsMenu></DesertsMenu>
      <PizzaMEnu></PizzaMEnu>
      <SaladMenu></SaladMenu>
      <SoupMenu></SoupMenu>
    </div>
  );
};

export default Menu;
