import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import LeftSidenav from '../Component/LeftSideNav/LeftSidenav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-7 md:w-9/12 md:mx-auto '>
                {/* left side nav section */}
                <div className='col-span-1'>
                    <LeftSidenav />
                </div>
                {/* main section */}
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>


            </div>
        </div>
    );
};

export default Main;