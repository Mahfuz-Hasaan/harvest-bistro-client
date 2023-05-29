import React from "react";
import useMenu from "../../../hooks/useMenu";
import MenuItm from "../../Shared/MenuItm/MenuItm";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import banner from '../../../assets/menu/banner3.jpg'
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
const OfferedMenu = () => {
  const [menus] = useMenu();
  const offeredMenus = menus.filter((menu) => menu.category === "offered");
  return (
    <div className="py-10">
        <div>
            <CoverImage
            img={banner}
            heading={"OUR MENU"}
            details={"WOULD YOU LIKE TO TRY A DISH?"}
            ></CoverImage>
        </div>
        <div className="py-14 bg-white">
            <SectionTItle
            heading={"---Don't miss---"}
            subHading={"TODAY'S OFFER"}
            ></SectionTItle>
        </div>
      <div className="grid md:grid-cols-2 gap-12 w-8/12 mx-auto">
        {offeredMenus.map((item) => (
          <MenuItm key={item._id} item={item}></MenuItm>
        ))}
      </div>
      <div className="w-fit mx-auto my-6">
        <button className="border-b-4 px-5 py-2 border-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
      </div>
    </div>
  );
};

export default OfferedMenu;
