import React from 'react';

const SectionTItle = ({heading,subHading}) => {
    
    return (
        <div className='text-center space-y-4 mb-8'>
            <p className='text-[#D99904] text-xl'>{subHading}</p>
            <p className='text-4xl border-y-2 w-3/12 mx-auto py-3'>{heading}</p>
        </div>
    );
};

export default SectionTItle;