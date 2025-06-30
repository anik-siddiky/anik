// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiFirebase, SiMongodb, SiExpress, SiFigma } from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Framer Motion', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[3rem] h-[3rem] text-pink-500"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12l-8 -8v16l16 -16v16l-4 -4" /><path d="M20 12l-8 8l-4 -4" /></svg>), },

    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'NodeJS', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'ExpressJS', icon: <SiExpress className="text-gray-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-700" /> },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

const floatAnimation = {
    y: [0, -7, 0],
    transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
    },
};

const Skills = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <h2 className="text-4xl font-bold mb-4 border-b-2 border-[#A87914] pb-2 mx-auto text-center w-fit">Skills</h2>
                <p className="text-center max-w-xl mx-auto mb-12 text-gray-500 text-lg">Tools and technologies I use to build modern, responsive, and high-quality web applications.</p>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center space-y-2 hover:scale-115 transition-transform duration-300"
                        >
                            <motion.div animate={floatAnimation} className="text-5xl cursor-pointer">
                                {skill.icon}
                            </motion.div>
                            <p className="text-sm font-medium text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
