import React from 'react';
import { Outlet } from 'react-router';

const ErrorLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default ErrorLayout;