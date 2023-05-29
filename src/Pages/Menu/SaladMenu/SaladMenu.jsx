import React from "react";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import MenuItm from "../../Shared/MenuItm/MenuItm";
import useMenu from "../../../hooks/useMenu";
import salad from'../../../assets/menu/salad-bg.jpg'
const SaladMenu = () => {
  const [menus] = useMenu();
  const saladMenu = menus.filter((menu) => menu.category === "salad");
  return (
    <div className="py-10">
      <div className="w-[]">
        <CoverImage
          img={salad}
          heading={"SALAD"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverImage>
      </div>

      <div className="my-20">
        <div className="grid md:grid-cols-2 gap-12 w-8/12 mx-auto">
          {saladMenu.map((item) => (
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

export default SaladMenu;
