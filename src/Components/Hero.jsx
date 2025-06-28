import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import anik from '../assets/aniksiddiky.png'
import FancyButton from './FancyButton';

const Hero = () => {
    return (
        <div className='lg:py-36 py-10 lg:flex items-center'>

            <div className='lg:space-y-5 space-y-3 flex-1'>
                <h1 className='lg:text-7xl text-4xl font-bold text-center lg:text-start'>Anik Siddiky</h1>
                <h3 className='text-xl lg:text-3xl font-medium text-center lg:text-start text-gray-500'>Front-End Developer</h3>
                <p className='text-[17px] text-center lg:text-start'>Innovative Front-End Developer crafting smooth, accessible, and visually appealing web experiences. Passionate about writing clean code that creates intuitive and engaging interfaces.</p>
                <div className="flex gap-4 items-center justify-center lg:justify-start">
                    <Link to="https://github.com/anik-siddiky" target="_blank" className="hover:text-[#0E4632] transition text-3xl sm:text-4xl">
                        <FaGithub />
                    </Link>
                    <Link to="https://www.linkedin.com/in/anik-siddiky" target="_blank" className="hover:text-[#0E4632] transition text-3xl sm:text-4xl">
                        <FaLinkedin />
                    </Link>
                    <Link to="https://x.com/codesbynik" target="_blank" className="hover:text-[#0E4632] transition text-3xl sm:text-4xl">
                        <FaSquareXTwitter />
                    </Link>
                </div>

                <div className='text-center lg:text-start'>
                    <Link to='/'>
                        <FancyButton className='px-8 text-xl'>Resume</FancyButton>
                    </Link>
                </div>
            </div>



            <div className='flex-1 flex justify-center lg:justify-end lg:mt-0 mt-8'>
                <img className='rounded-full w-72 lg:w-[550px]' src={anik} alt="" />
            </div>
        </div>
    );
};

export default Hero;