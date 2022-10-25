import React from 'react';
import { Link } from 'react-router-dom';

const Sidedata = ({ data }) => {
    return (
        <div>
            <h1 className='w-9/12 text-xl shadow-xl my-3 text-center p-3 bg-blue-800 text-stone-100 font-semibold rounded-md '><Link>{data.name}</Link></h1>
        </div>
    );
};

export default Sidedata;