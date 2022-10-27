import React from 'react';
import { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home2 = () => {
    const { dark } = useContext(AuthContext)
    return (
        <div>
            <div>
                <img className='w-9/12 mx-auto mt-10 rounded-full shadow-2xl' src="https://www.48hourslogo.com/oss/works/2021/03/04/21611968233/106888_18522_a5b5690e-e5e1-4c42-aad0-fc0cbf2691bd.png" alt="" />
                <h1 style={{ fontSize: '50px' }} className={dark ? "text-center text-slate-800 font-bold mt-10" : "text-center fontSize text-slate-100 font bold mt-10"}>Learning Tree</h1>
                <p className={dark ? "text-center text-xl text-slate-800 font-bold mt-10" : "text-center text-xl text-slate-100 font bold mt-10"}>This is the learning tree website for beginners . <br />
                    Learning Tree is an award-winning internationally recognized environmental education program that provides ready-made lessons and activities for educators. PLT can integrate easily into an existing curriculum and can be used to supplement all subject areas.
                    Learning Tree is a great way to incorporate environmental education into your existing lesson plan in many subjects areas including science
                    <br />
                    Anyone wanna buy this any crouse . He will get biggest output form this crouse </p>
                <div className='text-center mt-10'>
                    <button type="button" className="focus:outline-none  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><Link to='/home'>Go to Crouse  <FaArrowRight className='inline' /> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home2;