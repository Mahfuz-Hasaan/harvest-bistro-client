import React, { useEffect, useState } from 'react';
import Recommendation from '../../../components/Recommendation/Recommendation';

const Recommendations = () => {
    const [recoms,setRecoms] = useState([]);
    useEffect(()=>{
        fetch('recommendation.json')
        .then(res => res.json())
        .then(data =>{
            const filteredDatas = data.filter(filteredData => filteredData.category === 'offered');
            setRecoms(filteredDatas)
        })
    },[])
    return (
        <div className='lg:flex gap-4 w-8/12 mx-auto'>
            {
                recoms.map(recom => <Recommendation
                key={recom._id}
                recom={recom}
                >

                </Recommendation>)
            }
        </div>
    );
};

export default Recommendations;