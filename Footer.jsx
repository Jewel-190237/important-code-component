
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto ">
                {/* Footer Sections */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Section 1: Company Info */}
                    <div>
                        <div className="flex items-center">
                            <Image src='/assets/logo.svg' alt='logo' height={50} width={120}></Image>
                            <span className="text-xl font-bold">Company Name</span>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaFacebook />
                            </a>
                            <a href="mailto:info@company.com" className="text-white hover:text-gray-400">
                                <FaEnvelope />
                            </a>
                            <a href="tel:+1234567890" className="text-white hover:text-gray-400">
                                <FaPhoneAlt />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Section 2: Useful Links 1 */}
                    <div>
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Section 3: Useful Links 2 */}
                    <div>
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Section 4: Useful Links 3 */}
                    <div>
                        <h3 className="text-lg font-semibold">Products</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Demo</a></li>
                        </ul>
                    </div>

                    {/* Section 5: Subscribe */}
                    <div>
                        <h3 className="text-lg font-semibold">Subscribe</h3>
                        <p className="mt-4 text-gray-400">
                            Sign up to get the latest updates and offers.
                        </p>
                        <form className="mt-4 flex sm:w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 w-full text-gray-900 focus:outline-none"
                            />
                            <button className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
