import React from 'react';

const MenuItm = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className='flex items-center gap-2 p-3 rounded-2xl drop-shadow-2xl'>
            <img className='w-[100px]' style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <p className='uppercase  text-lg'>{name}---------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506] font-semibold'>${price}</p>
        </div>
    );
};

export default MenuItm;