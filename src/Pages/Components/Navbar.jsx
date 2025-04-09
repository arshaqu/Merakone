import React, { useState } from 'react';
import Logo from '../../Assets/MerakoneLogo.png';
import '../../Pages/Css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav  className=" md:absolute md:ml-[250px]  border-gray-200 md:mt-16">
        <div
          className="flex justify-between mx-auto pt-4"
        >
          <a href="/" className="flex">
            <img src={Logo} className="md:h-auto md:ml-[-20px] md:w-auto h-8 ml-10 " alt="Merak One Logo" />
          </a>
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Mobile Menu */}
          <div
            style={{ backgroundColor: '#2d3680' }}
            className={`${
              isOpen ? 'block' : 'hidden'
            } p-4 w-full md:block md:ml-[120px] md:w-auto md:rounded-l-[50px] px-8`}
          >
            <ul className="font-large md:w-full flex flex-col mt-4   border border-gray-100 md:rounded-lg md:flex-row p-4 md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-blue-800 p-4 md:p-0 montserrat">
              <li>
                <a href="/" className="block py-2 px-3 text-white md:rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:text-lg">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about_us"
                  className="block py-2 px-3 text-white md:rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 md:text-lg whitespace-nowrap"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 text-white md:rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 md:text-lg"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block py-2 px-3 text-white md:rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 md:text-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="block py-2 px-3 text-white md:rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 md:text-lg"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="block py-2 px-3 text-white md:rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 md:text-lg"
                >
                  Careers
                </a>
              </li>
              <li className="pr-20">
                <a
                  href="/contact_us"
                  className="block py-2 px-3 text-white md:rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 md:text-lg mr-32 whitespace-nowrap"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
