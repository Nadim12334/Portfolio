import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Nadim</div>

        {/* Regular menu for medium and larger screens */}
        <div className="space-x-8 hidden md:flex">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Hamburger menu button for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown - Opens from the right */}
        {isOpen && (
          <div className="absolute top-12 right-0 w-2/3 bg-black flex flex-col items-end space-y-4 py-4 px-6 md:hidden">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About Me</a>
            <a href="#service" className="hover:text-gray-400">Services</a>
            <a href="#project" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        )}

        {/* Connect Me button for larger screens */}
        <a href="https://wa.me/7040545840" target="_blank" rel="noopener noreferrer" className="hidden md:inline">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Connect Me
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
