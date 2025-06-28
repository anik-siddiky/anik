import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import anik from '../assets/aniksiddiky.png'

const Hero = () => {
    return (
        <div className='lg:py-36 py-10 lg:flex items-center'>

            <div className='space-y-5 flex-1'>
                <h1 className='lg:text-7xl text-4xl font-bold'>Anik Siddiky</h1>
                <h3 className='text-3xl font-medium'>Front-End Developer</h3>
                <p className='text-[17px]'>Innovative Front-End Developer crafting smooth, accessible, and visually appealing web experiences. Passionate about writing clean code that creates intuitive and engaging interfaces.</p>
                <div className="flex gap-4">
                    <Link to="https://github.com/anik-siddiky" target="_blank" className="hover:text-[#EDA92A] transition">
                        <FaGithub size={35} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/anik-siddiky" target="_blank" className="hover:text-[#EDA92A] transition">
                        <FaLinkedin size={35} />
                    </Link>
                    <Link to="https://x.com/codesbynik" target="_blank" className="hover:text-[#EDA92A] transition">
                        <FaSquareXTwitter size={35} />
                    </Link>
                </div>

                <button className='bg-[#EDA92A] px-8 py-5 text-xl rounded-sm font-semibold cursor-pointer btn shadow-none border-none'>Resume</button>
            </div>



            <div className='flex-1 flex justify-end lg:mt-0 mt-8'>
                <img className='rounded-full w-[550px]' src={anik} alt="" />
            </div>
        </div>
    );
};

export default Hero;