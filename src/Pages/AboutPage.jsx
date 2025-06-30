import React, { useEffect } from 'react';
import About from '../Components/About';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen mt-10 lg:mt-16'>
            <About></About>
        </div>
    );
};

export default AboutPage;