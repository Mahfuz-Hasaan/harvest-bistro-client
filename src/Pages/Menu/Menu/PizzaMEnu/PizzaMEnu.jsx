import React from "react";
import CoverImage from "../../../Shared/CoverImage/CoverImage";
import pizzas from "../../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../../hooks/useMenu";
import MenuItm from "../../../Shared/MenuItm/MenuItm";
const PizzaMEnu = () => {
  const [menus] = useMenu();
  const dessertsMenu = menus.filter((menu) => menu.category === "pizza");
  return (
    <div className="py-10">
      <div className="w-[]">
        <CoverImage
          img={pizzas}
          heading={"PIZZA"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverImage>
      </div>

      <div className="my-20">
        <div className="grid md:grid-cols-2 gap-12 w-8/12 mx-auto">
          {dessertsMenu.map((item) => (
            <MenuItm key={item._id} item={item}></MenuItm>
          ))}
        </div>
        <div className="w-fit mx-auto my-6">
          <button className="border-b-4 px-5 py-2 border-black rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaMEnu;
