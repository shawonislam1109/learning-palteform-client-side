import React from 'react';
import { Link } from 'react-router-dom';
import { FaHourglass, FaStar, FaVideo, } from "react-icons/fa";

const CrouseDetails = ({ category }) => {
    const { id, image, description, video, rating, header_title, class_duration } = category;
    return (
        <div className='p-5 md:p-0'>
            <Link to={`/home/${id}`} className="flex flex-col p-3 my-10 items-center bg-white rounded-lg border shadow-md lg:flex-row sm:m-12   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover  rounded-t-lg md:h-auto w-full  lg:w-72" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header_title}</h5>
                    <p className="mb-3 text-md font-normal text-gray-700 dark:text-gray-400">{
                        description ? description.slice(0, 100) : description
                    }</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <FaStar className='text-yellow-400' />
                            <p className='ml-2 text-blue-900'>{rating}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaVideo className='text-red-600' />
                            <p className='ml-2 text-blue-900'>{video}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaHourglass className='text-yellow-300' />
                            <p className='ml-2 text-blue-900'>{class_duration}</p>
                        </div>
                    </div>
                </div>

            </Link>


        </div>
    );
};

export default CrouseDetails;