import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link, } from 'react-router-dom';

const Sidedata = ({ data }) => {

    return (
        <div>
            <h1 className='w-full mx-auto text-xl shadow-xl my-3 mg: text-center p-3 bg-blue-800 text-stone-100 font-semibold rounded-md '><Link to={`/home/${data.id}`}>{data.name}</Link></h1>

        </div>
    );
};

export default Sidedata;