import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <a href="#home" className="text-2xl font-bold text-blue-600">
          TailwindNav
        </a>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu items */}
        <ul
          className={`md:flex md:items-center gap-6 absolute md:static left-0 w-full md:w-auto bg-white px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "top-16" : "-top-96"
          }`}
        >
          <li>
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#link" className="block py-2 text-gray-700 hover:text-blue-600">
              Link
            </a>
          </li>
          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600"
            >
              Dropdown <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <ul className="absolute z-50 w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
                <li>
                  <a href="#action/3.1" className="block px-4 py-2 hover:bg-gray-100">
                    Action
                  </a>
                </li>
                <li>
                  <a href="#action/3.2" className="block px-4 py-2 hover:bg-gray-100">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="#action/3.3" className="block px-4 py-2 hover:bg-gray-100">
                    Something
                  </a>
                </li>
                <hr className="my-1" />
                <li>
                  <a href="#action/3.4" className="block px-4 py-2 hover:bg-gray-100">
                    Separated link
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
