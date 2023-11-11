import React from 'react';
import logo from '../Images/logo.avif'
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <div className='text-black'>
            <nav className="bg-gray-100 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">CrackViva</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                            <Link
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-70} // Adjust the offset as needed
                                duration={1500} // Adjust the duration of the scroll animation
                            >
                                Reach Out
                            </Link>
                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 bg-red-600 rounded md:bg-transparent md:hover:text-red-600 md:p-0">
                                    <Link
                                        activeClass="active"
                                        to="banner"
                                        spy={true}
                                        smooth={true}
                                        offset={-1000} // Adjust the offset as needed
                                        duration={1500} // Adjust the duration of the scroll animation
                                    >
                                        Home

                                    </Link>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">
                                    <Link
                                        activeClass="active"
                                        to="partOne"
                                        spy={true}
                                        smooth={true}
                                        offset={-70} // Adjust the offset as needed
                                        duration={500} // Adjust the duration of the scroll animation
                                    >
                                        Part 1

                                    </Link>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">
                                    <Link
                                        activeClass="active"
                                        to="partTwo"
                                        spy={true}
                                        smooth={true}
                                        offset={-70} // Adjust the offset as needed
                                        duration={500} // Adjust the duration of the scroll animation
                                    >
                                        Part 2

                                    </Link>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0">
                                    <Link
                                        activeClass="active"
                                        to="miniProject"
                                        spy={true}
                                        smooth={true}
                                        offset={-70} // Adjust the offset as needed
                                        duration={500} // Adjust the duration of the scroll animation
                                    >
                                        Mini Project

                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
