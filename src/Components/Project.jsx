// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import projectImage1 from '../assets/projectImages/travelSphere.jpg';
import projectImage2 from '../assets/projectImages/recipeBook.jpg';
import projectImage3 from '../assets/projectImages/payBillBD.jpg';
import { Link } from 'react-router';

const Project = () => {
    const projects = [
        {
            image: projectImage1,
            title: 'Travel Sphere',
            description: 'A travel platform where users can browse and book tour plans listed by local guides, with smooth booking flow and a responsive user experience.',
            features: ['Booking system', 'Guide Tour Listings', 'Responsive UI'],
            technologies: ['React', 'Tailwind', 'Node.js', 'Express.js', 'Firebase', 'MongoDB'],
            live: 'https://travelspherebangladesh.web.app',
            githubLink: 'https://github.com/anik-siddiky/trave-sphere-bd-client',
            id: 'travel-sphere',
        },
        {
            image: projectImage2,
            title: 'Recipe Book',
            description: 'A recipe sharing platform where users can explore a variety of dishes, filter by cuisine, and engage with the community by liking recipes. Users can also contribute by adding and managing their own recipes.',
            features: ['Dashboard for managing personal recipes', 'Like functionality to engage with others', 'Filter recipes by cuisine type'],
            technologies: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
            live: 'https://recipe-book-80a7a.web.app',
            githubLink: 'https://github.com/anik-siddiky/recipe-book-client',
            id: 'recipe-book',
        },
        {
            image: projectImage3,
            title: 'PayBillsBD',
            description: 'A utility bill payment system tailored for Bangladeshi users. Features mobile-first design, role-based dashboard, and real-time payment tracking.',
            features: ['Role-based dashboard', 'Bill history', 'Secure login'],
            technologies: ['React', 'Tailwind', 'Firebase'],
            live: 'https://paybillsbd.netlify.app',
            githubLink: 'https://github.com/anik-siddiky/trave-sphere-bd-client',
            id: 'pay-bills-bd',
        },
    ];

    return (
        <section className="py-16">

            <div className="max-w-7xl mx-auto ">
                <div className='grid grid-cols-1 gap-12'>
                    <h2 className="text-3xl lg:text-4xl font-bold border-b-2 border-[#A87914] pb-2 mx-auto text-center w-fit">My Projects</h2>
                    {projects.map((project) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className='bg-base-200 rounded-xl lg:rounded-3xl shadow-xl hover:shadow-2xl dark:drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)] dark:hover:drop-shadow-[0_8px_16px_rgba(255,255,255,0.3)] transition-all duration-500 p-4 lg:p-6'>
                            <div key={project.title} className="flex flex-col lg:flex-row rounded-2xl overflow-hidden">

                                <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </div>

                                <div className="w-full lg:w-1/2 p-6 space-y-4">
                                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                                    <p>{project.description}</p>

                                    <div>
                                        <h4 className="font-medium text-gray-500">Key Features:</h4>
                                        <ul className="list-disc list-inside text-gray-500">
                                            {project.features.map((feature, i) => (<li key={i}>{feature}</li>))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-1.5 lg:mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="hover:scale-105 cursor-pointer transition px-3 py-1 text-sm border-[#A87914] border rounded-full"> {tech}</span>))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-2">
                                        <Link to={project.live} target="_blank">
                                            <button className="hover:scale-105 px-8 py-2 bg-black text-white rounded-xl hover:bg-opacity-80 transition cursor-pointer">Live</button>
                                        </Link>
                                        <Link to={project.githubLink} target="_blank">
                                            <button className="hover:scale-105 px-8 py-2 border border-black rounded-xl hover:bg-black hover:text-white transition cursor-pointer">Github</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;