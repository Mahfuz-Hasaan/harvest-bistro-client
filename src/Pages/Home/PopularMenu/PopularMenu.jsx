import React, { useEffect, useState } from 'react';
import SectionTItle from '../../../components/SectionTItle/SectionTItle';
import MenuItm from '../../Shared/MenuItm/MenuItm';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menus] = useMenu();
    const popularMenu = menus.filter(menu => menu.category === "popular")
    return (
        <div className='mb-8'>
            <SectionTItle
            subHading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTItle>
            <div className='grid md:grid-cols-2 gap-12 w-8/12 mx-auto'>
                {
                    popularMenu.map(item => <MenuItm
                    key={item._id}
                    item={item}
                    ></MenuItm>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;