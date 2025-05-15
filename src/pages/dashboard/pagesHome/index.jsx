import React from "react";
import pattern from "../../../assets/pattern-banner-top.png";
import illustration from "../../../assets/guy with globe.png";
import {
  BookOpen,
  MoreVertical,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import BarChart from "../../../component/dashboard/chart/barChart";

const supportData = [
  { name: "Agus setya", email: "agussetya@gmail.com" },
  { name: "Agus setya", email: "agussetya@gmail.com" },
  { name: "Agus setya", email: "agussetya@gmail.com" },
];

export default function PagesHome() {
  return (
    <div className="ml-4">
      <div className="flex-1">
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 flex items-center px-8">
          <img
            src={pattern}
            alt="Banner Pattern"
            className="absolute top-0 left-0 w-full h-full opacity-90"
          />
          <div className="z-10 w-2/3 ml-8 text-white">
            <h1 className="text-xl font-semibold mb-2">
              Selamat Datang Mohammad Iqbal!
            </h1>
            <p className="text-sm font-light leading-relaxed ">
              ttttnt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupida
            </p>
          </div>

          <div className="z-10 w-1/3 flex justify-end">
            <img
              src={illustration}
              alt="Illustration"
              className="w-56 h-auto"
            />
          </div>
        </div>
      </div>

      {/* 3 Card */}
      <div className="flex gap-10">
        {/* Card 1 */}
        <div className="mt-5">
          <div className="w-80 h-full bg-white border-2 border-primary-200 rounded-lg shadow-2xl p-4 flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-full">
                <BookOpen className="w-6 h-6 text-primary-50" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rekam Jejak</p>
                <p className="text-xs text-gray-400">Total Pengunjung</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5">
              <p className="text-sm text-gray-600">Total Kunjungan</p>
              <p className="text-2xl font-bold text-gray-800">1000+</p>
            </div>

            {/* Footer */}
            <div className="text-right">
              <p className="text-xs text-gray-400">30 Hari Terakhir</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="mt-5">
          <div className="w-80 h-full bg-white border-2 border-primary-200 rounded-lg shadow-2xl p-4 flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-full">
                <BookOpen className="w-6 h-6 text-primary-50" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pendidikan</p>
                <p className="text-xs text-gray-400">Total Pengunjung</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5">
              <p className="text-sm text-gray-600">Total Kunjungan</p>
              <p className="text-2xl font-bold text-gray-800">1000+</p>
            </div>

            {/* Footer */}
            <div className="text-right">
              <p className="text-xs text-gray-400">30 Hari Terakhir</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="mt-5">
          <div className="w-80 h-full bg-white border-2 border-primary-200 rounded-lg shadow-2xl p-4 flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-full">
                <BookOpen className="w-6 h-6 text-primary-50" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Visi & Misi</p>
                <p className="text-xs text-gray-400">Total Pengunjung</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5">
              <p className="text-sm text-gray-600">Total Kunjungan</p>
              <p className="text-2xl font-bold text-gray-800">1000+</p>
            </div>

            {/* Footer */}
            <div className="text-right">
              <p className="text-xs text-gray-400">30 Hari Terakhir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex my-5 gap-10">
        <div className="w-[680px] bg-white border-2 border-primary-200 rounded-lg shadow-lg">
          <BarChart />
        </div>
        <div className="w-80 bg-white border-2 border-primary-200 rounded-lg shadow-lg p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-primary-700">Dukungan</h2>
            <div className="flex items-center text-sm text-gray-500 cursor-pointer">
              Hari ini
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Table Header */}
          <div className="flex gap-20 text-xs text-primary-700 border-t-2 pt-2 pb-1 mb-2">
            <span>Nama</span>
            <span>Email</span>
          </div>

          {/* List */}
          <div className="space-y-2">
            {supportData.map((user, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 rounded px-3 py-2"
              >
                <div className="flex gap-10">
                  <p className="text-xs text-gray-700">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-3">
            <button className="text-sm text-primary-600 font-semibold flex items-center hover:underline">
              Selengkapnya
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
