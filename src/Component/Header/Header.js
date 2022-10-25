import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">

                <div className=" flex lg:w-9/12  flex-wrap justify-between items-center mx-auto">
                    <Link to='/home' className="flex items-center">
                        <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Online-School-Logos-You-Can-Learn-From/learning-tree-by-moonley-brandcrowd.png" className="mr-3 h-6 sm:h-9" alt="Learning tree" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-800">Learning Tree</span>
                    </Link>
                    <div className="flex md:order-2  md:hidden">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>


                    </div>

                    <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li>
                                <Link to='/home' className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link href="#" className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                            </li>
                            <li>
                                <Link href="#" className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                        <div className='text-center'>
                            <button type="button" className="text-white  md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/register'>Register</Link></button>

                            <button type="button" className="text-white  md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                        </div>
                        <div className=" flex  ">

                            <button type="button" className="text-white hidden   md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/register'>Register</Link></button>

                            <button type="button" className="text-white hidden ml-2  md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='login'>Log In</Link></button>

                            <button type="button" className="text-white ml-2 hidden md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                        </div>

                    </div>




                </div>

            </nav>

        </div>
    );
};

export default Header;