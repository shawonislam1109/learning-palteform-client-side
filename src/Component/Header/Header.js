import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut, setDark, dark } = useContext(AuthContext);



    const Logout = () => {
        logOut()
            .then(() => { })
            .then(error => console.error(error));
    }

    return (
        <div className={!dark ? "bg-white" : 'bg-slate-900'}>
            <nav className="px-2 sm:px-4 py-2.5 rounded ">

                <div className=" flex lg:w-9/12  flex-wrap justify-between items-center mx-auto">
                    <Link to='/home' className="flex items-center">
                        <img src="https://i.pinimg.com/736x/d3/e0/b4/d3e0b463223b896f74983d7390c7c253.jpg" className="mr-3 h-6 sm:h-9 rounded-full" alt="Learning tree" />
                        <span className={!dark ? "self-center  text-xl font-semibold whitespace-nowrap text-slate-900" : "self-center  text-xl font-semibold whitespace-nowrap text-blue-800"}>Learning Tree</span>
                        {/* <span className="self-center  text-xl font-semibold whitespace-nowrap text-blue-800">Learning Tree</span> */}
                    </Link>
                    <div className='w-20 mx-auto  md:hidden ml-3'>
                        <label htmFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                            <input onChange={() => setDark(!dark)} type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                        </label>
                    </div>

                    <div className="flex md:order-2  md:hidden">

                        {
                            user?.uid ? <>
                                <button onClick={Logout} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log Out</button>
                                <img title={user?.displayName} className='rounded-full w-12 h-12' src={user.photoURL} alt="" />
                            </>
                                :
                                <>
                                    <button type="button" className="text-white  md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/register'>Register</Link></button>

                                    <button type="button" className="text-white  md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/login'>Log In</Link></button>
                                </>
                        }

                    </div>

                    <div className=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col  p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li>
                                <Link to='/home' className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link to='/blog' className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="block text-center py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>

                        <div className='w-20 mx-auto hidden md:block ml-3'>
                            <label htmFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                <input onChange={() => setDark(!dark)} type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                            </label>
                        </div>

                        {/* <div className='text-center'>
                            {
                                user?.uid ? <> </>
                                    :
                                    <>
                                        <button type="button" className="text-white  md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/register'>Register</Link></button>

                                        <button type="button" className="text-white  md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                                    </>
                            }
                        </div> */}

                        <div className='hidden  md:block'>
                            <div className=" flex">

                                {
                                    user?.uid ? <>
                                        <button onClick={Logout} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log Out</button>
                                        <img title={user?.displayName} className='rounded-full w-12 h-12' src={user.photoURL} alt="" />
                                    </>
                                        :
                                        <>
                                            <button type="button" className="text-white hidden   md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/register'>Register</Link></button>

                                            <button type="button" className="text-white hidden ml-2  md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='login'>Log In</Link></button>
                                        </>
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </nav>

        </div>
    );
};

export default Header;