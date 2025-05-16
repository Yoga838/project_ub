import React, { useState } from "react";
import { User, Phone, Link2 } from "lucide-react";
import profiling from "../../../assets/profiling.png";

export default function PagesSetting() {
  const [activeMenu, setActiveMenu] = useState("akun");

  const menuItems = [
    { key: "akun", icon: <User size={20} />, label: "Pengaturan Akun" },
    { key: "sosial", icon: <Link2 size={20} />, label: "Sosial Media" },
    { key: "kontak", icon: <Phone size={20} />, label: "Kontak" },
  ];

  return (
    <div className="ml-4 px-4">
      {/* Name Pengaturan */}
      <h1 className="mt-10 font-semibold text-xl text-primary-500">
        Pengaturan
      </h1>
      <div className="flex">
        <div className="">
          <div className="bg-primary-500 rounded-lg px-9 py-5 mt-5 w-max">
            {menuItems.map((item) => {
              const isActive = activeMenu === item.key;
              return (
                <div
                  key={item.key}
                  className={`flex items-center gap-4 ${
                    isActive
                      ? "bg-white/20 pl-4 pr-14 py-4 rounded-lg"
                      : "pl-4 pr-14 py-4"
                  } cursor-pointer text-white`}
                  onClick={() => setActiveMenu(item.key)}
                >
                  <div className="icon flex items-center">{item.icon}</div>
                  <div className="flex items-center">
                    <h1 className="text-sm">{item.label}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5 px-14">
          {/* Name Pengaturan */}
          <h1 className="font-medium text-xl text-dark-900">Pengaturan</h1>
          {/* Profil */}
          <div className="my-5">
            <img
              src={profiling}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-grey-2 object-cover mb-3"
            />
          </div>
          {/* Input Name */}
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="name"
              className="mb-1 text-sm font-light text-dark-900"
            >
              Nama
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value=""
              onChange={() => {}}
              placeholder="Masukkan nama anda ..."
              className="border border-gray-300 bg-grey-4 rounded-md p-2 w-96"
            />
          </div>
          <div className="">
            <button className="bg-primary-800 px-3 py-1 text-sm text-white rounded-lg mr-3">
              Perbarui
            </button>
            <button className="border-grey-4 border-2 px-3 py-1 text-sm text-primary-800 rounded-lg">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
