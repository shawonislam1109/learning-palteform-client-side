import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import LeftSidenav from '../Component/LeftSideNav/LeftSidenav';

const Main = () => {

   
   
    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-8 md:w-9/12 md:mx-auto align-middle  '>
                {/* left side nav section */}
                <div className='md:col-span-2'>

                    <LeftSidenav />

                </div>
                {/* main section */}
                <div className='md:col-span-6 md:ml-10'>
                    <Outlet></Outlet>
                </div>


            </div>
        </div>
    );
};

export default Main;