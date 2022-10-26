import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CrouseDetails from '../CrouseDetails/CrouseDetails';

const Home = () => {
    const crouseData = useLoaderData();
    console.log(crouseData)
    return (
        <div>
            {
                crouseData.map(categories => <CrouseDetails category={categories} key={categories.id}></CrouseDetails>)
            }
        </div>
    );
};

export default Home;