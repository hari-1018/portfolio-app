import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { useState } from 'react';
import Resume from "/Harikrishnan-K.pdf"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
<nav className="bg-white p-2.5 fixed top-0 w-full z-50">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo */}
            <a href="#home" className="text-white font-bold">
              <img src="/Logo1.png" alt="Logo" className="w-14 h-14" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6 font-semibold items-center">
              <a href="#home" className="hover:border-b-2 border-black">
                Home
              </a>
              <a href="#skills" className="hover:border-b-2 border-black">
                Skills
              </a>
              <a href="#about" className="hover:border-b-2 border-black">
                About
              </a>
              <a href="#projects" className="hover:border-b-2 border-black">
                Works
              </a>
              <a href="#contact" className="hover:border-b-2 border-black">
                Contact
              </a>
              <a
                href="/Harikrishnan-K.pdf"
                download
                className="flex items-center gap-2 border rounded-md py-2 px-3 font-semibold bg-black text-white hover:bg-gray-800"
              >
                Resume <FaDownload />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white shadow-md mt-4 rounded-md">
              <div className="flex flex-col space-y-4 p-4 font-semibold text-center">
                <Link
                  to="/"
                  className="hover:border-b-2 border-black"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <a
                  href="#skills"
                  className="hover:border-b-2 border-black"
                  onClick={toggleMenu}
                >
                  Skills
                </a>
                <a
                  href="#about"
                  className="hover:border-b-2 border-black"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:border-b-2 border-black"
                  onClick={toggleMenu}
                >
                  Works
                </a>
                <Link
                  to="/contact"
                  className="hover:border-b-2 border-black"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <a
                  href="/Harikrishnan-K.pdf"
                  download
                  className="flex justify-center items-center gap-2 border rounded-md py-2 px-3 font-semibold bg-black text-white hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  Resume <FaDownload />
                </a>
              </div>
            </div>
          )}
        </nav>
  );
};

export default Navbar;
