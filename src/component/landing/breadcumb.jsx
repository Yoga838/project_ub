import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "lucide-react";

export default function Breadcumb() {
  const location = useLocation();
  // Pecah path menjadi array
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Fungsi untuk memformat teks (misal: "tentang-saya" => "Tentang Saya")
  const formatSegment = (segment) => {
    return decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="text-sm text-gray-500 flex items-center space-x-2 px-16 py-10">
      <HomeIcon className="w-4 h-4 text-gray-400" />
      <Link to="/" className="hover:underline text-gray-500">
        Beranda
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={index} className="flex items-center space-x-2">
            <span>/</span>
            {isLast ? (
              <span className="text-gray-800 font-semibold">
                {formatSegment(name)}
              </span>
            ) : (
              <Link to={routeTo} className="hover:underline text-gray-500">
                {formatSegment(name)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
