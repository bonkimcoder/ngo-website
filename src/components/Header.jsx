import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/nglogo.png";

export const NavBar = ({ handleMobileMenu }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-gray-200"
        }
        onClick={handleMobileMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-gray-200"
        }
        onClick={handleMobileMenu}
      >
        About Us
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-gray-200"
        }
        onClick={handleMobileMenu}
      >
        Projects
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-gray-200"
        }
        onClick={handleMobileMenu}
      >
        Events
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-gray-200"
        }
        onClick={handleMobileMenu}
      >
        Contact Us
      </NavLink>
    </>
  );
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu); // Toggle the menu open/close
  };

  return (
    <header className="bg-green-600 text-white py-4" id="header">
      <div className=" container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={logo}
              alt="NGO Logo"
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>

          <h1 className="text-2xl font-bold">LEUA FOUNDATION</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 uppercase font-semibold">
          <NavBar handleMobileMenu={() => setShowMobileMenu(false)} />
        </nav>

        {/* Donate Button */}
        <div className="hidden md:block">
          <Link
            to="/donate"
            className="bg-yellow-500 hover:bg-yellow-600 text-black uppercase px-4 py-2 rounded"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={handleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-green-600 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 items-center text-xl">
            <NavBar handleMobileMenu={handleMobileMenu} />
          </nav>

          <div className="text-center">
            <Link
              to="/donate"
              className="bg-yellow-500 hover:bg-yellow-600 text-black uppercase px-4 py-2 rounded  text-center"
              onClick={handleMobileMenu}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
