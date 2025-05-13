import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 hide-scrollbar">
      <div className="flex justify-around items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold">
          <img src="/Logo1.png" alt="Logo" className='w-14 h-14' />
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden font-semibold md:flex">
          <Link to="/home" className="hover:border-b-3">
            Home
          </Link>
          <Link to="/about" className="hover:border-b-3">
            About
          </Link>
          <Link to="/services" className="hover:border-b-3">
            Services
          </Link>
          <Link to="/contact" className="hover:border-b-3">
            Contact
          </Link>
        </div>


        <button className="flex items-center gap-2 border rounded-md py-2 px-3 font-semibold bg-black text-white">
        Resume <FaDownload />
        </button>


        {/* Mobile Menu Button (optional) */}
        <div className="md:hidden text-white">
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
