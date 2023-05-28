import React, { useEffect, useState } from 'react';
import SectionTItle from '../../../components/SectionTItle/SectionTItle';
import MenuItm from '../../Shared/MenuItm/MenuItm';

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(popularItem => popularItem.category === "popular")
            setMenu(popularItems);
        })
    },[])
    return (
        <div className='mb-8'>
            <SectionTItle
            subHading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTItle>
            <div className='grid md:grid-cols-2 gap-12 w-8/12 mx-auto'>
                {
                    menu.map(item => <MenuItm
                    key={item._id}
                    item={item}
                    ></MenuItm>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;