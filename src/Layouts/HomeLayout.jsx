import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto px-4 lg:px-0'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;