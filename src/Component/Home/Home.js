import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CrouseDetails from '../CrouseDetails/CrouseDetails';

const Home = () => {
    const categoryData = useLoaderData();
    // console.log(categoryData)
    return (
        <div>
            {
                categoryData.map(categories => <CrouseDetails category={categories} key={categories.id}></CrouseDetails>)
            }
        </div>
    );
};

export default Home;