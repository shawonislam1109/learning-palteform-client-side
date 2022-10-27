import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, ProfileInfo, emailVerify } = useContext(AuthContext);
    const [error, SetError] = useState('');
    const navigate = useNavigate();


    const submitHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(password, email, name, photoUrl);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                SetError('')
                form.reset();
                console.log(user)
                updateProfile(name, photoUrl);
                navigate('/login')
                verifyEamil();
                toast.custom('check you email and confirm verify')
            })
            .catch(error => {
                SetError(error.message);
            })
    }

    const verifyEamil = () => {
        emailVerify()
            .then(() => { })
            .catch(error => toast.error('your email is not verified'))
    }


    const updateProfile = (name, photoUrl) => {
        const profile = { displayName: name, photoURL: photoUrl }
        ProfileInfo(profile)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => SetError(error.message))
    }

    return (
        <div className='mt-5 w-9/12 mb-10 mx-auto' >

            <form onSubmit={submitHandle} className=' shadow-2xl p-6 bg-slate-800 rounded-md'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2  font-medium text-white text-2xl dark:text-gray-300">Your Name</label>
                    <input type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2  font-medium text-white text-2xl dark:text-gray-300">Your PhotoURL</label>
                    <input type="text" name='photoURL' className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your PhotoURL" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2  font-medium text-white text-2xl dark:text-gray-300">Your email</label>
                    <input type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email " required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2  font-medium text-white text-2xl  dark:text-gray-300">Your password</label>
                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='your password' required="" />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <label htmlFor="remember" className="ml-2 font-medium text-white text-xl  dark:text-gray-300">Remember me</label>
                </div>
                <div>
                    <p className='text-xl  text-red-500 font-medium mb-3'>{error}</p>
                </div>
                <div>
                    <p className='text-xl text-white font-extralight mb-3'> Already <Link className='underline' to='/login'>i have account</Link></p>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


        </div>
    );
};

export default Register;