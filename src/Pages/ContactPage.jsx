import React, { useEffect } from 'react';
import Contact from '../Components/Contact';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen mt-6 lg:mt-10'>
            <Contact></Contact>
        </div>
    );
};

export default ContactPage;