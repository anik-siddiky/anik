import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import FancyButton from './FancyButton';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaSquareXTwitter } from 'react-icons/fa6';
import SocialIcons from './SocialIcons';

const Contact = () => {
    const motionFadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: 0.6, duration: 0.6 },
    };
    return (
        <div className="max-w-7xl mx-auto lg:py-16 py-8">
            <motion.h4 {...motionFadeIn} className='text-4xl font-bold border-b-2 border-[#A87914] pb-2 mx-auto text-center w-fit mb-8'>Contact Me</motion.h4>
            <div className="grid grid-cols-1 md:grid-cols-2 flex-row-reverse gap-12 items-start">
                {/* Left Side - Info */}
                <div className="space-y-6 order-2 lg:order-1">
                    <motion.h2 {...motionFadeIn}
                        className="lg:text-3xl text-2xl font-semibold">Get in Touch</motion.h2>
                    <motion.div {...motionFadeIn}
                        className="space-y-2">
                        <div className="flex items-center gap-3">
                            <FaEnvelope />
                            <span>iamaniksiddiky@mail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone />
                            <span>+880 1706 461 444</span>
                        </div>
                    </motion.div>

                    <motion.div {...motionFadeIn}
                        className='flex justify-start'>
                        <SocialIcons></SocialIcons>
                    </motion.div>

                </div>

                {/* Right Side - Form */}
                <form className="space-y-6 w-full order-1 lg:order-2">
                    <motion.div {...motionFadeIn}>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full border dark:border-gray-200 px-4 py-2 rounded bg-gray-200 dark:bg-base-200 focus:outline-gray-300 focus:ring-2 focus:ring-black"
                            placeholder="Your Name"
                        />
                    </motion.div>
                    <motion.div {...motionFadeIn}>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full border border-black dark:border-gray-200 px-4 py-2 rounded bg-gray-200 dark:bg-base-200 focus:outline-gray-300 focus:ring-2 focus:ring-black"
                            placeholder="you@example.com"
                        />
                    </motion.div>
                    <motion.div {...motionFadeIn}>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            rows="5"
                            className="w-full border border-gray-800 dark:border-gray-200 px-4 py-2 rounded bg-gray-200 dark:bg-base-200 resize-none focus:outline-gray-300 focus:ring-2 focus:ring-black"
                            placeholder="Write your message..."
                        ></textarea>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
                        <FancyButton className="bg-[#A87914] px-6 py-2 rounded hover:bg-opacity-90 transition">
                            Send Message
                        </FancyButton>
                    </motion.div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
