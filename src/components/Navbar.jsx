'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverLay from './MenuOverLay';

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href="/" className='text-2xl md:text-5xl text-white font-semibold'>
                    LOGO
                </Link>

                <div className='mobile-menu block md:hidden'>
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>

                <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id='navbar'>
                    <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {navbarOpen ? <MenuOverLay links={navLinks} /> : null}
        </nav>
    );
};

export default NavBar;
