import React from 'react';
import { Link } from 'react-router-dom';

const CrouseDetails = ({ category }) => {
    const { id, image, description, author, video, rating, price, header_title, class_duration } = category;
    return (
        <div className=''>
            <Link to='/login' className="flex flex-col p-3 my-10 items-center bg-white rounded-lg border shadow-md md:flex-row sm:m-12   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover  rounded-t-lg md:h-auto w-full  md:w-72" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </Link>


        </div>
    );
};

export default CrouseDetails;