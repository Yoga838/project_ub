import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <span className="text-2xl font-bold text-black">TailwindNav</span>

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
            <a href="#about">
              <span className="block py-2 text-black cursor-pointer hover:text-blue-600">
                Tentang Saya
              </span>
            </a>
          </li>
          <li>
            <a href="#programkerja">
              <span className="block py-2 text-black cursor-pointer hover:text-blue-600">
                Program Kerja
              </span>
            </a>
          </li>
          <li>
            <a href="#dukungan">
              <span className="block py-2 text-black cursor-pointer hover:text-blue-600">
                Dukungan
              </span>
            </a>
          </li>
          <li>
            <a href="#kontak">
              <span className="block py-2 text-black cursor-pointer hover:text-blue-600">
                Kontak
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
