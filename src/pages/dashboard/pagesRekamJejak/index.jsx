import React, { useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import publikasi from "../../../assets/publikasiIMG.png";
import pemateri from "../../../assets/pemateriIMG.png";
import publikasi2 from "../../../assets/ketpenIMG.png";
import Header from "../../../component/dashboard/header";

export default function PagesTentangSaya() {
  const [dataTentangSaya] = useState([
    {
      id: 1,
      title: "Publikasi",
      date: "10-12-2024",
      image: publikasi,
      desc: "Mohammad Iqbal aktif dalam penelitian dan publikasi ilmiah yang berkontribusi pada pengembangan ilmu administrasi.",
    },
    {
      id: 2,
      title: "Pemateri ICP",
      date: "10-10-2024",
      image: pemateri,
      desc: "Mohammad Iqbal aktif dalam penelitian dan publikasi ilmiah yang berkontribusi pada pengembangan ilmu administrasi.",
    },
    {
      id: 3,
      title: "Publikasi",
      date: "10-08-2024",
      image: publikasi2,
      desc: "Mohammad Iqbal aktif dalam penelitian dan publikasi ilmiah yang berkontribusi pada pengembangan ilmu administrasi.",
    },
  ]);

  return (
    <>
      {/* Header */}
      <Header tagName="Tentang Saya" />

      {/* Konten utama */}
      <div className="p-4 mx-2 my-6 bg-white shadow-md sm:p-6 lg:p-10 rounded-xl sm:mx-4 lg:mx-10">
        {/* Title & Button */}
        <div className="flex flex-col items-start justify-between gap-4 mb-6 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Rekam Jejak</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <Link to="/dashboard/Add Rekam Jejak">
            <button className="w-full px-4 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-900 sm:w-auto">
              Tambah Data +
            </button>
          </Link>
        </div>

        {/* List */}
        <div className="space-y-6">
          {dataTentangSaya.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start gap-4 p-4 rounded-md md:flex-row md:items-center bg-gray-50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-24 rounded-md sm:w-40"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mb-1 text-sm text-gray-600">{item.desc}</p>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <div className="flex w-full gap-2 mt-3 md:mt-0 md:w-auto">
                <button className="flex items-center justify-center gap-1 w-full md:w-auto px-6 py-2 text-sm text-white bg-[#1867A3] rounded hover:bg-[#145b91]">
                  <SquarePen size={16} /> Edit
                </button>
                <button className="flex items-center justify-center w-full gap-1 px-6 py-2 text-sm text-gray-700 border border-gray-300 rounded md:w-auto hover:bg-gray-100">
                  <Trash2 size={16} /> Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
