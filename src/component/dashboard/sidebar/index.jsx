import React, { useState } from "react";
import profiling from "../../../assets/profiling.png";
import {
  Home,
  Monitor,
  Megaphone,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (visible on mobile) */}
      <button
        className="fixed z-50 p-2 text-white rounded-md top-4 left-4 md:hidden bg-primary-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed z-40 top-0 left-0 h-full w-[250px] bg-primary-600 text-white transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:flex
        `}
      >
        <div className="flex flex-col items-center justify-between w-full h-full py-10">
          {/* Profil */}
          <div className="flex flex-col items-center w-full px-6">
            <img
              src={profiling}
              alt="Profile"
              className="object-cover w-16 h-16 mb-3 border-2 border-white rounded-full"
            />
            <div className="mb-6 text-center">
              <p className="font-semibold">Mohammad Iqbal</p>
              <p className="text-sm text-gray-300">iqbaal.xx@gmail.com</p>
            </div>

            {/* Menu Items */}
            <nav className="w-full space-y-4">
              <Link to="/dashboard">
                <SidebarItem
                  icon={<Home size={18} />}
                  label="Dashboard"
                  active
                />
              </Link>
              <Link to="/dashboard/programkerja">
                <SidebarItem
                  icon={<Monitor size={18} />}
                  label="Program Kerja"
                />
              </Link>
              <Link to="/dashboard/dukungan">
                <SidebarItem icon={<Megaphone size={18} />} label="Dukungan" />
              </Link>
              <Link to="/dashboard/rekamjejak">
                <SidebarItem icon={<User size={18} />} label="Tentang Saya" />
              </Link>
              <Link to="/dashboard/pengaturan">
                <SidebarItem icon={<Settings size={18} />} label="Pengaturan" />
              </Link>
            </nav>
          </div>

          {/* Logout */}
          <div className="w-full px-6 mb-6">
            <SidebarItem icon={<LogOut size={18} />} label="Logout" />
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 cursor-pointer rounded-md transition-all ${
        active
          ? "bg-gradient-to-r from-primary-400 to-primary-600 text-white font-semibold"
          : "text-gray-300 hover:bg-gradient-to-r from-primary-400 to-primary-600"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
