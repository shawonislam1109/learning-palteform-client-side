import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Sidedata from './sideData/Sidedata';

const LeftSidenav = () => {
    const { GoogleSignIn, GithubSignIn } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [crouse, setCrouse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/crouse_Data')
            .then(res => res.json())
            .then(data => setCrouse(data))
    }, []);

    const googleHandleSubmit = () => {
        GoogleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const githubHandlesubmit = () => {
        GithubSignIn(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='lg:w-2/3 mx-auto'>
            {
                crouse.map(data => <Sidedata data={data} key={data.id}></Sidedata>)
            }
            <div className='flex justify-center items-center  mt-5 md:block '>
                <button onClick={googleHandleSubmit} className="relative inline-flex  items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <FaGoogle className='inline w-5 h-5' />   SignIN Google
                    </span>
                </button>

                <button onClick={githubHandlesubmit} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <FaGithub className='inline w-5 h-5' /> SignIN Github
                    </span>
                </button>
            </div>
        </div>
    )
};
export default LeftSidenav;