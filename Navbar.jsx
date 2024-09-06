

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoMenuOutline, IoClose } from "react-icons/io5";
import { FaAngleDown } from 'react-icons/fa';
import ThemeControl from "./ThemeControl";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [navBar, setNavbarActive] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Services', path: '/' },  // Dropdown for this
        { name: 'My Bookings', path: '/myBookings' },
        { name: 'Blogs', path: '/' },  // Dropdown for this
        { name: 'Contact', path: '/' },
    ];

    // Service dropdown links
    const serviceLinks = [
        { name: 'Red Service', path: '/red-service' },
        { name: 'Black Service', path: '/black-service' },
        { name: 'Blue Service', path: '/blue-service' }
    ];

    // Blog dropdown links
    const blogLinks = [
        { name: 'Tour Blog', path: '/tour-blog' },
        { name: 'Video Blog', path: '/video-blog' },
        { name: 'Audio Blog', path: '/audio-blog' }
    ];

    const navbarHandler = () => {
        setNavbarActive(!navBar);
    };

    return (
        <div className="app">
            <nav>
                <div className="max-w-[1320px] mx-auto">
                    <div className="flex mx-auto justify-between py-5 lato">
                        <div className="">
                            <Image src='/assets/logo.svg' alt="logo" width={80} height={40}></Image>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-6 text-black">
                                {/* Placeholder for extra content */}
                            </div>
                            <div className="flex justify-center items-center">
                                <ul className="hidden lg:flex gap-8 ">
                                    {links.map(link => (
                                        <li key={link.name} className="relative group">
                                            {/* Dropdown for Services */}
                                            {link.name === 'Services' ? (
                                                <div>
                                                    <Link
                                                        href={link.path}
                                                        className={activeLink === link.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                                    >
                                                        <p className="flex items-center gap-1">
                                                            {link.name}
                                                            <FaAngleDown />
                                                        </p>
                                                    </Link>
                                                    <ul className="absolute z-50 hidden group-hover:flex flex-col -mt-1 bg-white shadow-lg rounded-lg">
                                                        {serviceLinks.map(service => (
                                                            <li key={service.name} className="p-2 w-28">
                                                                <Link
                                                                    href={service.path}
                                                                    className={activeLink === service.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                                                    onClick={() => setActiveLink(service.name)}
                                                                >
                                                                    {service.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : link.name === 'Blogs' ? (
                                                // Dropdown for Blogs
                                                <div>
                                                    <Link
                                                        href={link.path}
                                                        className={activeLink === link.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                                    >
                                                        <p className="flex items-center gap-1">
                                                            {link.name}
                                                            <FaAngleDown />
                                                        </p>
                                                    </Link>
                                                    <ul className="absolute z-50 hidden group-hover:flex flex-col -mt-1 bg-white shadow-lg rounded-lg">
                                                        {blogLinks.map(blog => (
                                                            <li key={blog.name} className="p-2 w-28">
                                                                <Link
                                                                    href={blog.path}
                                                                    className={activeLink === blog.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                                                    onClick={() => setActiveLink(blog.name)}
                                                                >
                                                                    {blog.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                // For all other links
                                                <Link
                                                    href={link.path}
                                                    className={activeLink === link.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                                    onClick={() => setActiveLink(link.name)}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                {/* Mobile Menu Button */}
                                <div className="flex sm:hidden" onClick={navbarHandler}>
                                    {!navBar ? <IoMenuOutline className="text-black" size={30} /> : <IoClose className="text-black" size={30} />}
                                </div>
                            </div>
                            <div>
                                <ThemeControl/>
                            </div>
                            <button className="ml-0 lg:ml-10 font-bold bg-white lato hover:bg-[#FF3811] border border-[#FF3811] text-xl text-[#FF3811] hover:text-white rounded-lg px-6 py-3">Join us</button>
                        </div>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div
                    className={`fixed z-10 w-full  overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!navBar ? "h-0" : "h-[40%]"
                        }`}
                >
                    <div className="px-8 bg-slate-400 py-5">
                        <ul className="flex flex-col gap-3 font-bold lato">
                            {links.map(link => (
                                <li key={link.name} className="relative group">
                                    {/* Dropdown for Services */}
                                    {link.name === 'Services' ? (
                                        <div>
                                            <Link
                                                href={link.path}
                                                className={activeLink === link.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                            >
                                                <p className="flex items-center gap-1">
                                                    {link.name}
                                                    <FaAngleDown />
                                                </p>
                                            </Link>
                                            <ul className="absolute z-50 hidden group-hover:flex flex-col -mt-1 bg-white shadow-lg rounded-lg">
                                                {serviceLinks.map(service => (
                                                    <li key={service.name} className="p-2 w-28">
                                                        <Link
                                                            href={service.path}
                                                            className={service.color}
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : link.name === 'Blogs' ? (
                                        // Dropdown for Blogs
                                        <div>
                                            <Link
                                                href={link.path}
                                                className={activeLink === link.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                            >
                                                <p className="flex items-center gap-1">
                                                    {link.name}
                                                    <FaAngleDown />
                                                </p>
                                            </Link>
                                            <ul className="absolute z-50 hidden group-hover:flex flex-col -mt-1 bg-white shadow-lg rounded-lg">
                                                {blogLinks.map(blog => (
                                                    <li key={blog.name} className="p-2 w-28">
                                                        <Link
                                                            href={blog.path}
                                                            className={blog.color}
                                                        >
                                                            {blog.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        // For all other links
                                        <Link
                                            href={link.path}
                                            className={activeLink === link.name ? 'text-[#FF3811]' : 'text-black dark:text-white'}
                                            onClick={() => setActiveLink(link.name)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;