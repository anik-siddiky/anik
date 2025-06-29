import React from 'react';

const About = () => {
    return (
        <section className="py-6 lg:py-16 bg-base-100 text-base-content ">
            <div className="max-w-7xl mx-auto space-y-8 ">
                <h2 className="text-center text-4xl font-bold">About Me</h2>

                <div className="bg-base-200 p-4 lg:p-6 shadow-xl text-lg leading-relaxed space-y-4 rounded-3xl hover:shadow-2xl dark:drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)] dark:hover:drop-shadow-[0_8px_16px_rgba(255,255,255,0.3)] transition-all duration-500">
                    <p>Hi there! I’m a <span className="font-medium">Front-End Developer</span> with a strong
                        focus on building responsive, accessible, and engaging user interfaces. My expertise lies in
                        technologies like <strong>HTML5, CSS3, JavaScript (ES6+), React</strong>, and tools such as
                        <strong> Tailwind CSS, and Framer Motion</strong>. I prioritize clean, maintainable
                        code and a mobile-first approach with UX in mind. Whether it’s a landing page, dashboard, or complex web app,
                        I aim to ensure pixel-perfect layouts and fluid user interactions across devices and browsers. I believe that great UI is about more than just visuals. It's about usability, clarity, and performance. I’m passionate about creating meaningful digital experiences that help users accomplish tasks smoothly.</p>

                    <p>
                        On the backend, I’ve worked with <strong>Node.js, Express.js, MongoDB</strong>, and
                        <strong> Firebase</strong>, which helps me collaborate effectively in full-stack environments.
                        My experience with <strong>MERN stack</strong> projects has deepened my understanding of API integration,
                        authentication, routing, and database design. While frontend is my main focus, having full-stack knowledge
                        allows me to work more independently and communicate better with backend teams.
                    </p>

                    <p>Over the past year, I’ve contributed to several personal and collaborative projects. From eCommerce platforms to admin dashboards and RESTful API-driven apps. These experiences have not only sharpened my technical skills but also taught me the value of clear communication, version control (Git), and iterative design. I’m always learning and exploring new technologies to stay current in the fast-evolving web landscape. Whether it’s experimenting with animations, performance optimization, or UI/UX principles, I enjoy staying curious and building better solutions with each project. My goal is to grow as a developer and create digital experiences that are not only functional but also delightful to use.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
