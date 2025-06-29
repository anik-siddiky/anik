import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto lg:px-0 px-4 py-10"
        >
            <div className="bg-base-200 rounded-3xl shadow-xl hover:shadow-2xl dark:drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)] dark:hover:drop-shadow-[0_8px_16px_rgba(255,255,255,0.3)] transition-all duration-500 p-8">

                <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl font-extrabold mb-6 border-b-2 inline-block">
                    Education</motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold">Bachelor of Arts in Political Science</h3>
                        <p className="text-sm mt-1">National University, Bangladesh</p>
                        <p className="text-sm mt-1">2022 - 2026</p>
                    </div>

                    <span className="badge badge-outline text-[#A87914] border-[#A87914] text-sm px-4 py-2">
                        In Progress
                    </span>

                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-6 text-lg text-gray-500 leading-relaxed">
                    I am a student of Arts, my passion has always been centered around digital technologies. Studying Political Science has honed my analytical thinking, communication, and problem-solving skills. Core competencies that naturally complement my path into web development. This background gives me a unique perspective on human behavior, systems, and critical reasoning, enabling me to build thoughtful, user-centered digital solutions.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Education;
