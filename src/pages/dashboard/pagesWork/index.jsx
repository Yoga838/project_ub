import React from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function PagesWork() {
  return (
    <div className="mx-10 my-15">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-gray-800 font-medium text-2xl">Program Kerja</h1>
          <p className="text-gray-800/50 text-lg">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-[440px] h-[50px] pl-10 pr-4 py-2 rounded-lg bg-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
            <Link to="/dashboard/Add Program Kerja">
              <button className="w-[150px] h-[50px] px-6 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 transition">
                Tambah Data
              </button>
            </Link>
        </div>
      </div>
      <div className="my-8">
        <div className="">
          <table className=" min-w-full rounded-xl">
              <thead>
                  <tr className="bg-primary-600">
                      <th scope="col" className="p-5 text-sm font-semibold text-white capitalize rounded-tl-xl"> Tagline Program </th>
                      <th scope="col" className="p-5 text-sm font-semibold text-white capitalize"> Deskripsi </th>
                      <th scope="col" className="p-5 text-sm font-semibold text-white capitalize"> Judul Program </th>
                      <th scope="col" className="p-5 text-sm font-semibold text-white capitalize"> Rincian Program </th>
                      <th scope="col" className="p-5 text-sm font-semibold text-white capitalize rounded-tr-xl"> Actions </th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Digitalisasi Administrasi dan Pelayanan Publik</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Meningkatkan efisiensi dan transparansi...</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Papperles Administration</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Mengurangi ketergantungan...</td>
                  <td className="">
                    <button className="me-2.5 text-primary-400">
                      <SquarePen />
                    </button>
                    <button className="text-primary-400">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Digitalisasi Administrasi dan Pelayanan Publik</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Meningkatkan efisiensi dan transparansi...</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Papperles Administration</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Mengurangi ketergantungan...</td>
                  <td className="">
                    <button className="me-2.5 text-primary-400">
                      <SquarePen />
                    </button>
                    <button className="text-primary-400">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Digitalisasi Administrasi dan Pelayanan Publik</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Meningkatkan efisiensi dan transparansi...</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Papperles Administration</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Mengurangi ketergantungan...</td>
                  <td className="">
                    <button className="me-2.5 text-primary-400">
                      <SquarePen />
                    </button>
                    <button className="text-primary-400">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Digitalisasi Administrasi dan Pelayanan Publik</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Meningkatkan efisiensi dan transparansi...</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Papperles Administration</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Mengurangi ketergantungan...</td>
                  <td className="">
                    <button className="me-2.5 text-primary-400">
                      <SquarePen />
                    </button>
                    <button className="text-primary-400">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Digitalisasi Administrasi dan Pelayanan Publik</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">Meningkatkan efisiensi dan transparansi...</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Papperles Administration</td>
                  <td className="p-5 whitespace-nowrap text-sm font-medium text-primary-400 text-center">1. Mengurangi ketergantungan...</td>
                  <td className="">
                    <button className="me-2.5 text-primary-400">
                      <SquarePen />
                    </button>
                    <button className="text-primary-400">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
