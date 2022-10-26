import React from 'react';
import { FaArrowRight, FaDownload, FaHourglass, FaStar, FaVideo } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const SingleCategory = () => {
    const singleData = useLoaderData();

    const { id, image, description, author, video, rating, Price, header_title, class_duration, premium } = singleData;

    // const downlaodPdfFile = (rootElementId, downloadFilename) => {
    //     const input = document.getElementById(rootElementId)
    //     html2canvas(input).then((canvas) => {
    //         const imgData = canvas.toDataURL("image/png")
    //         const pdf = new jsPDF("p", "pt", "a4")
    //         pdf.addImage(imgData, "JPEG", 10, 50)
    //         pdf.save(`${downloadFilename}`)
    //     })
    // }
    const downlaodPDf = () => {
        // using Java Script method to get PDF file
        fetch('/public/_Module Summary .pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'learningPlatformPDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='p-5 md:p-2 mb-10' id="pagetoDownload">

            <div className=" mt-12  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <div className='flex justify-center align-middle p-2'>
                    <img className="rounded-t-lg" src={image} alt="" />
                </div>

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header_title}</h5>

                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{description}</p>
                    <h5 className='text-xl  text-yellow-700 font-semibold'> Price : {Price} tk</h5>
                    <h5 className='text-xl  text-yellow-700 font-semibold'> Teacher Name : {author} </h5>
                    <div className='flex justify-between items-center my-5'>
                        <div className='flex items-center '>
                            <FaStar className='text-yellow-400 w-5 h-5' />
                            <p className='ml-2 text-xl text-blue-900'>{rating}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaVideo className='text-red-600 w-5 h-5' />
                            <p className='ml-2 text-xl text-blue-900'>{video} video</p>
                        </div>
                        <div className='flex items-center'>
                            <FaHourglass className='text-yellow-300 w-5 h-5' />
                            <p className='ml-2 text-xl text-blue-900'>{class_duration}</p>
                        </div>
                    </div >
                    <div className='flex justify-around'>
                        <Link to='/home' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Go Home
                            <FaArrowRight />
                        </Link>

                        <Link to='' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            BUY NOW
                        </Link>
                        {
                            premium ? <>
                                <Link to='/premium' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <span className='text-xl font-semibold mr-2'>Premium</span>
                                    <FaStar className='text-yellow-400 w-5 h-5' />
                                    <FaStar className='text-yellow-400 w-5 h-5' />
                                    <FaStar className='text-yellow-400 w-5 h-5' />
                                </Link>
                            </>
                                :
                                <>
                                    <Link onClick={downlaodPDf} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Download PDF
                                        <FaDownload />
                                    </Link>
                                </>
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SingleCategory;