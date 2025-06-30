import React, { useEffect } from 'react';
import About from '../Components/About';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen mt-2 lg:mt-16 mb-10 lg:mb-0'>
            <About></About>
        </div>
    );
};

export default AboutPage;