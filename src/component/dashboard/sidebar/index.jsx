import React from "react";
import profiling from "../../../assets/profiling.png";
import { Home, Monitor, Megaphone, User, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="container-sidebar w-[250px] h-full bg-primary-600 rounded-xl">
      <div className="w-[250px] h-full bg-primary-600 text-white rounded-xl flex flex-col items-center py-12 justify-between">
        {/* Top: Profil dan Menu */}
        <div className="flex flex-col items-center w-full">
          {/* Foto Profil */}
          <img
            src={profiling}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white object-cover mb-3"
          />
          <div className="text-center">
            <p className="font-semibold">Mohammad Iqbal</p>
            <p className="text-sm text-gray-300">iqbaal.xx@gmail.com</p>
          </div>

          {/* Menu */}
          <nav className="mt-8 w-full px-6 space-y-4">
            <SidebarItem icon={<Home size={18} />} label="Dashboard" active />
            <SidebarItem icon={<Monitor size={18} />} label="Program Kerja" />
            <SidebarItem icon={<Megaphone size={18} />} label="Dukungan" />
            <SidebarItem icon={<User size={18} />} label="Tentang Saya" />
            <SidebarItem icon={<Settings size={18} />} label="Pengaturan" />
          </nav>
        </div>

        {/* Bottom: Logout */}
        <div className="w-full px-6 mb-6">
          <SidebarItem icon={<LogOut size={18} />} label="Logout" />
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors ${
        active
          ? "bg-gradient-to-r from-primary-400 to-primary-600 text-white font-semibold"
          : "text-grey-6 hover:bg-gradient-to-r from-primary-400 to-primary-600"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
