import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/errorAnimation.json';
import { Link } from 'react-router';
import FancyButton from '../Components/FancyButton'

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4 text-center">
            <div className="w-72 mb-6">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-error mb-4">Oops! Page Not Found</h1>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                The page you're looking for doesn't exist or was moved.
            </p>
            <Link to="/">
                <FancyButton className='px-7'>Go to Home</FancyButton>
            </Link>
        </div>
    );
};

export default ErrorPage;
