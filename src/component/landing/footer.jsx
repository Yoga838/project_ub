import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full gap-4 p-4 text-white bg-[#24303F] border-t border-gray-200 shadow-md sm:flex-row">
      {/* Logo dan hak cipta */}
      <aside className="flex items-center gap-2">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226...z" />
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>

      {/* Menu navigasi */}
      <nav className="flex gap-6 text-sm font-medium">
        <span className="transition hover:text-gray-200">Tentang Saya</span>
        <span className="transition hover:text-gray-200">Program Kerja</span>
        <span className="transition hover:text-gray-200">Dukungan</span>
        <span className="transition hover:text-gray-200">Kontak</span>
      </nav>
    </footer>
  );
};

export default Footer;
