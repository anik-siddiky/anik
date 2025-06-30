// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="py-6 lg:py-10 bg-base-100 text-base-content">
            <div
                className="max-w-7xl mx-auto space-y-8">
                <motion.h2 className="text-3xl lg:text-4xl font-bold border-b-2 border-[#A87914] pb-2 mx-auto text-center w-fit"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                >About Me</motion.h2>

                <div className="bg-base-200 p-4 lg:p-6 shadow-xl text-lg leading-relaxed space-y-4 rounded-3xl hover:shadow-2xl dark:drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)] dark:hover:drop-shadow-[0_8px_16px_rgba(255,255,255,0.3)] transition-all duration-500">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        Hi there! I’m a <span className="font-medium">Front-End Developer</span> focused on creating responsive, accessible, and interactive interfaces. I specialize in <strong>HTML5, CSS3, JavaScript (ES6+), React</strong>, and tools like <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong>. I follow a mobile-first and UX-driven approach, aiming for clean, maintainable code and smooth cross-device interactions. Great UI is more than visuals, it's about clarity, usability, and performance.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        I’ve also worked with <strong>Node.js, Express.js, MongoDB</strong>, and <strong>Firebase</strong>, which helps me contribute in full-stack projects. My <strong>MERN stack</strong> experience has deepened my knowledge of API integration, authentication, routing, and data modeling. While frontend is my main focus, understanding the backend helps me collaborate better and build more complete applications.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        Over the past year, I’ve built several solo and team projects. From eCommerce sites to dashboards and API-driven apps. These projects sharpened my technical skills and taught me the value of version control, clear communication, and iterative development. I’m constantly exploring new tools, optimizing performance, and applying UI/UX principles to create digital products that are both effective and enjoyable to use.
                    </motion.p>

                </div>
            </div>
        </div>
    );
};

export default About;
