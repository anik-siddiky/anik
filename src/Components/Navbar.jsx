import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import FancyButton from './FancyButton'
import { X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { label } from 'motion/react-client';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasBorder, setHasBorder] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (lastScrollY - currentScrollY > 5) {
                setShowNavbar(true);
            } else if (currentScrollY - lastScrollY > 5) {
                setShowNavbar(false);
            }

            if (currentScrollY > 80 && lastScrollY > currentScrollY) {
                setHasBorder(true);
            } else if (currentScrollY < 10) {
                setHasBorder(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/project', label: 'Project' },
        { path: '/contact', label: 'Contact' },
    ];
    const location = useLocation();
    const drawerRef = useRef(null);

    return (
        <nav className={`drawer py-0 lg:py-2 backdrop-blur-md  fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${hasBorder ? 'border-b border-base-300' : ''}`}>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
            <div className="drawer-content flex flex-col">
                <div className="navbar lg:px-0 px-4 w-full justify-between flex flex-row-reverse lg:flex-row max-w-7xl mx-auto">
                    <div className="flex-none justify-end lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>

                    <Link to='/'>
                        <h2 className='text-3xl lg:text-4xl font-extrabold italic text-[#A87914]'>NIK</h2>
                    </Link>



                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal text-[17px] gap-2 relative">
                            {navItems.map(({ path, label }) => (
                                <li key={path} className="relative">
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-[#A87914] font-semibold transition duration-300'
                                                : 'hover:text-[#A87914] transition duration-300'
                                        }>
                                        {label}
                                        {location.pathname === path && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute -bottom-1 left-0 h-[3px] w-full bg-[#A87914] rounded-full"
                                                transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                                            />
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='gap-2.5 hidden lg:flex'>
                        <Link to='/contact'>
                            <FancyButton >Contact Me</FancyButton>
                        </Link>

                        <label className="swap swap-rotate">
                            <input type="checkbox" className="theme-controller" value="light" />

                            <svg
                                className="swap-on h-8 w-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            <svg
                                className="swap-off h-8 w-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>


                    </div>
                </div>
            </div>
            <div className="drawer-side z-[999] lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

                <aside className="menu relative bg-base-200 min-h-full w-full p-4 flex justify-center items-center">

                    <label className="swap swap-rotate absolute top-6 left-6">
                        <input type="checkbox" className="theme-controller" value="light" />

                        <svg
                            className="swap-on h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <svg
                            className="swap-off h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>


                    <label htmlFor="my-drawer-3" className="absolute top-6 right-6 btn btn-sm btn-circle btn-ghost">
                        <X size={30} />
                    </label>

                    {
                        navItems.map(({ path, label }) => (
                            <li className='text-2xl' key={path}>
                                <NavLink onClick={() => (drawerRef.current.checked = false)} to={path} className={({ isActive }) =>
                                    isActive ? 'text-[#A87914] font-semibold' : undefined}>
                                    {label}
                                </NavLink>
                            </li>
                        ))
                    }

                </aside>
            </div>
        </nav>
    );
};

export default Navbar;