import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import anik from '../assets/aniksiddiky.png'
import FancyButton from './FancyButton';
import { Typewriter } from 'react-simple-typewriter';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Hero = () => {

    return (
        <div className='lg:py-36 py-10 lg:flex items-center'>
            <div className='lg:space-y-5 space-y-3 flex-1'>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='lg:text-7xl text-4xl font-bold text-center lg:text-start'>
                    Anik Siddiky
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                    className='text-xl lg:text-3xl font-medium text-center lg:text-start text-gray-500'>
                    Front-End Developer
                </motion.h3>

                <p className='lg:text-xl text-center lg:text-start md:max-w-[370px] lg:max-w-full mx-auto'>
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

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                >
                    <SocialIcons></SocialIcons>
                </motion.div>

                <motion.div className='text-center lg:text-start z-0'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                >
                    <Link to='/'>
                        <FancyButton className='px-10 py-2 mt-2 lg:mt-0'>Resume</FancyButton>
                    </Link>
                </motion.div>
            </div>

            <motion.div className='flex-1 flex justify-center lg:justify-end lg:mt-0 mt-8'
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            >
                <img className='rounded-full w-72 lg:w-[500px] border-b-8 border-[#A87914]' src={anik} alt="" />
            </motion.div>
        </div>
    );
};

export default Hero;