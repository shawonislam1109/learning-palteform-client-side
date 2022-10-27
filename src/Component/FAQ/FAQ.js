import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const FAQ = () => {
    const { dark } = useContext(AuthContext)
    return (
        <div>
            <h1 className='text-4xl text-center mt-5 text-yellow-500 font-bold'>FAQ Frequently Asked Questions</h1>
            <div className='grid lg:grid-cols-2 mx-20  gap-10 mt-20 md:mx-1'>

                <div className='border-1 p-5 shadow-2xl shadow-white rounded-xl'>
                    <h1 className={dark ? "text-3xl  text-slate-700 mt-10" : "text-3xl  text-green-100 mt-10"}>what is this site ..? </h1>

                    <p className={dark ? "text-xl  text-slate-700 mt-5" : "text-xl  text-green-100 mt-5"}>This is the learning tree platform web site. Here have to many crouse for your like React JavaScript and english spoken and PHP etc , If you wanna learn you can try form here . Yon can get biggest support form here. so go Ahead go you dream </p>
                </div>

                <div className='border-1 p-5 shadow-2xl shadow-white mt-5 rounded-xl'>
                    <h1 className={dark ? "text-3xl  text-slate-700 mt-10" : "text-3xl  text-green-100 mt-10"}>How many videos this Web site Single crouse..? </h1>

                    <p className={dark ? "text-xl  text-slate-700 mt-5" : "text-xl  text-green-100 mt-5"}> Every crouse minimum video 150 upto . Every week 1 time support session and student questions and give the ans early if some time late than give the ans 2 hour  </p>
                </div>
                <div className='border-1 p-5 shadow-2xl mt-5 shadow-white rounded-xl'>
                    <h1 className={dark ? "text-3xl  text-slate-700 mt-10" : "text-3xl  text-green-100 mt-10"}>why you will do this crouse? </h1>

                    <p className={dark ? "text-xl  text-slate-700 mt-5" : "text-xl  text-green-100 mt-5"}> This crouse most important for beginners . Cause first to last every point teach form here . Every after 10 day 1 assignment and conceptual session and google meet every student </p>
                </div>
                <div className='border-1 p-5 shadow-2xl shadow-white mt-5 rounded-xl'>
                    <h1 className={dark ? "text-3xl  text-slate-700 mt-10" : "text-3xl  text-green-100 mt-10"}>This crouse for those ....? </h1>

                    <p className={dark ? "text-xl  text-slate-700 mt-5" : "text-xl  text-green-100 mt-5"}> This crouse for  Those seriously hard works. and give the time every day 5-6 hour up to   </p>
                </div>


            </div>
        </div>
    );
};

export default FAQ;