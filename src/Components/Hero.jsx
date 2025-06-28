import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import anik from '../assets/aniksiddiky.png'
import FancyButton from './FancyButton';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <div className='lg:py-36 py-10 lg:flex items-center'>
            <div className='lg:space-y-5 space-y-3 flex-1'>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='lg:text-7xl text-4xl font-bold text-center lg:text-start'>
                    Anik Siddiky
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
                    className='text-xl lg:text-3xl font-medium text-center lg:text-start text-gray-500'>
                    Front-End Developer
                </motion.h3>

                <p className='lg:text-xl text-center lg:text-start'>
                    Innovative Front-End Developer crafting smooth, accessible, and visually appealing web experiences. Passionate about writing clean code that
                    <br />
                    <span className='text-[#A87914] font-medium'>
                        <Typewriter
                            words={[
                                'creates intuitive and engaging interfaces!',
                                'elevates user experience across all devices!',
                                'transforms ideas into interactive designs!',
                                'blends performance with aesthetic precision!',
                            ]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={1500} />
                    </span>
                </p>

                <div className="flex gap-4 items-center justify-center lg:justify-start">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                        <Link to="https://github.com/anik-siddiky" target="_blank" className="hover:text-[#A87914] transition text-3xl sm:text-4xl">
                            <FaGithub />
                        </Link>
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                        <Link to="https://www.linkedin.com/in/anik-siddiky" target="_blank" className="hover:text-[#A87914] transition text-3xl sm:text-4xl">
                            <FaLinkedin />
                        </Link>
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                        <Link to="https://x.com/codesbynik" target="_blank" className="hover:text-[#A87914] transition text-3xl sm:text-4xl">
                            <FaSquareXTwitter />
                        </Link>
                    </motion.div>
                </div>


                <div className='text-center lg:text-start z-0'>
                    <Link to='/'>
                        <FancyButton className='px-8 lg:text-xl mt-2 lg:mt-0'>Resume</FancyButton>
                    </Link>
                </div>
            </div>

            <div className='flex-1 flex justify-center lg:justify-end lg:mt-0 mt-8'>
                <img className='rounded-full w-72 lg:w-[500px]' src={anik} alt="" />
            </div>
        </div>
    );
};

export default Hero;