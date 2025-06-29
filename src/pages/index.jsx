import React from "react";

import Navbar from "../component/landing/navbar";
import Footer from "../component/landing/footer";
import Pattern from "../assets/Pattern.png";
import Hero_1 from "../assets/hero_1.png";
import Hero_2 from "../assets/hero_2.png";
import UB from "../assets/UB.png";
import imgStar1 from "../assets/icons/Star 1.svg";
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Test() {
  return (
    <>
      <Navbar />
      <section id="hero" className="">
        <div className="relative w-full h-screen">
          {/* Background Layer */}
          <div className="absolute z-0 w-full h-full overflow-hidden">
            <div className="absolute z-10 -left-[100px] -top-[40px] w-[280px] h-[280px] rounded-full bg-gray-700 blur-[150px]"></div>
            <img
              src={Pattern}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Foreground Content */}
          <div className="z-10 flex items-center h-screen xl:px-20 md:px-10 px-10 relative">
            <div className="grid grid-cols-12">
              {/* Left Content */}
              <div className="2xl:col-span-6 xl:col-span-6 md:col-span-6 col-span-12 flex justify-center md:justify-center xl:justify-start items-center text-center md:text-left">
                <div className="">
                  <div className="relative">
                    <div className="hidden md:block absolute 2xl:left-[420px] xl:left-[420px] md:left-[280px] top-[-30px]">
                      <img src={imgStar1} alt="" />
                    </div>
                    <h1 className="2xl:text-4xl xl:text-4xl lg:text-2xl md:text-xl text-xl font-bold text-gray-700 leading-snug">
                      MEMBAWA{" "}
                      <span className="text-blue-700 underline break-inside-avoid-column">
                        PERUBAHAN
                      </span>
                      <br />
                      MEWUJUDKAN MASA DEPAN.
                    </h1>
                    <p className="mt-4 2xl:text-base xl:text-base md:text-sm text-sm text-gray-700">
                      Dedikasi dan inovasi untuk masa depan kampus yang lebih
                      maju.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col md:flex-row gap-4 md:justify-start justify-center">
                    <a href="#programkerja">
                      <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                        Program Kerja
                      </button>
                    </a>
                    <a href="#kontak">
                      <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                        Kontak
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="col-span-6 2xl:block xl:block lg:block md:block hidden">
                <div className="relative xl:mt-20 md:mt-10 mt-10">
                  <img
                    src={Hero_1}
                    alt="Foto"
                    className="2xl:w-[665px] 2xl:h-[677px] xl:w-[665px] xl:h-[677px] md:w-[358px] md:h-[350px]"
                  />
                  <div className="absolute 2xl:top-[480px] xl:top-[480px] lg:top-[300px] md:top-[250px] 2xl:right-[80px] xl:right-[40px] md:right-[20px] bg-gray-700 2xl:w-[600px] 2xl:h-[90px] xl:w-[550px] xl:h-[90px] lg:w-[380px] md:w-[330px] md:h-[70px] 2xl:rounded-3xl xl:rounded-3xl md:rounded-2xl">
                    <div className="flex justify-center h-full">
                      <div className="flex 2xl:gap-[100px] xl:gap-[60px] lg:gap-[20px] md:gap-[15px] text-center items-center text-white">
                        <div>
                          <div className="2xl:text-5xl xl:text-5xl font-normal pb-1">
                            5+
                          </div>
                          <div className="text-sm">Penelitian</div>
                        </div>
                        <div>
                          <div className="2xl:text-5xl xl:text-5xl font-normal pb-1">
                            3+
                          </div>
                          <div className="text-sm">Pengabdian Masyarakat</div>
                        </div>
                        <div>
                          <div className="2xl:text-5xl xl:text-5xl font-normal pb-1">
                            5+
                          </div>
                          <div className="text-sm">Publikasi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="xl:my-20 md:my-10 my-10">
        <div className="">
          <div className="grid grid-cols-12">
            {/* foto kiri */}
            <div className="col-span-5 xl:block md:hidden hidden">
              <img
                src={Hero_2}
                alt="foto"
                className="w-[70%] object-cover mx-auto"
              />
            </div>
            <div className="xl:col-span-7 md:col-span-12 col-span-12">
              <div className="flex xl:justify-normal md:justify-center justify-center">
                <div className="xl:pr-20 md:pr-10 pr-10 xl:px-0 md:px-10 px-10">
                  <h1 className="xl:text-4xl md:text-2xl text-xl font-bold">
                    Lebih Dekat dengan Mohammad Iqbal.
                  </h1>
                  <h2 className="pt-2 xl:text-2xl md:text-xl text-lg font-semibold">
                    Visi, Kolaborasi, Inovasi untuk FIA UB Maju
                  </h2>
                  <div className="py-10">
                    <p className="xl:text-lg md:text-lg text-base text-justify">
                      Mohammad Iqbal adalah sosok pemimpin visioner yang
                      memiliki komitmen kuat dalam membawa perubahan positif.
                      Dengan pengalaman dan dedikasinya di dunia akademik serta
                      manajerial, ia terus berupaya menciptakan inovasi dalam
                      sistem pendidikan, tata kelola, dan pengembangan sumber
                      daya manusia.
                    </p>
                    <p className="pt-5 xl:text-lg md:text-lg text-base text-justify">
                      Sebagai individu yang percaya pada kekuatan visi,
                      kolaborasi, dan inovasi, Mohammad Iqbal bertekad untuk
                      menjadikan FIA UB sebagai institusi yang unggul, adaptif,
                      dan berdaya saing.bertekad untuk menjadikan FIA UB sebagai
                      institusi yang unggul, adaptif, dan berdaya saing.
                    </p>
                  </div>
                  {/* Kotak tentang saya */}
                  <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Kartu 1 --> */}
                    <div className="bg-white border border-primary-50 hover:border-primary-700 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        {/* <!-- Ikon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 14 14"
                        >
                          <g
                            fill="none"
                            stroke="#24303f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <path d="M.5.5v13h13" />
                            <path d="M3.5 6.5L6 9l4-6l3.5 2.5" />
                          </g>
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Rekam Jejak
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Kisah Mohammad Iqbal untuk kemajuan FIA UB
                      </p>
                      <Link
                        to="/Tentang Saya/Rekam Jejak"
                        className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition border rounded-md border-primary-50 hover:bg-primary-700 hover:text-primary-50"
                      >
                        Selengkapnya
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Kartu 2 (Aktif) --> */}
                    <div className="bg-white border border-primary-50 hover:border-primary-700 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        {/* <!-- Ikon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="#24303f"
                            d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"
                          />
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Pendidikan
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Perjalanan singkat dari Mohammad Iqbal
                      </p>
                      <Link
                        to="/Tentang Saya/Pendidikan"
                        className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition border rounded-md border-primary-50 hover:bg-primary-700 hover:text-primary-50"
                      >
                        Selengkapnya
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Kartu 3 --> */}
                    <div className="bg-white border border-primary-50 hover:border-primary-700 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        {/* <!-- Ikon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 16 16"
                        >
                          <g fill="#24303f">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" />
                          </g>
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Visi & Misi
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Perjalanan singkat dari Mohammad Iqbal
                      </p>
                      <Link
                        to="/Tentang Saya/Visi Misi"
                        className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition border rounded-md border-primary-50 hover:bg-primary-700 hover:text-primary-50"
                      >
                        Selengkapnya
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programkerja" class="my-20">
        <div className="">
          <div class="text-center mb-12">
            <div class="mx-auto my-10 w-15 h-2 bg-primary-500 rounded"></div>
            <h2 class="xl:text-5xl md:text-4xl text-4xl font-bold text-gray-900">
              Program Kerja Nyata,{" "}
              <span class="text-primary">FIA UB Juara!</span>
            </h2>
            <p class="text-gray-600 mt-4 max-w-xl mx-auto xl:text-base md:text-base text-base">
              Mewujudkan FIA UB yang unggul melalui inovasi, kolaborasi, dan
              kepemimpinan berintegritas.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {/* <!-- Card 1 --> */}
            <div class="bg-white hover:bg-primary-700 hover:text-primary-50 rounded-xl p-6 shadow-2xl">
              <div class="bg-primary-700 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {/* <!-- Icon buku --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893c1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493c-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-lg mb-2">
                Digitalisasi Administrasi dan Pelayanan Akademik
              </h3>
              <p class="text-sm mb-4">
                Menyusun kurikulum berbasis outcome-based education (OBE) dan
                Merdeka Belajar Kampus Merdeka (MBKM).
              </p>
              <Link to="/digitalisasi">
                <div className="flex items-center justify-end gap-1 text-sm font-medium text-primary hover:underline">
                  Selengkapnya
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            {/* <!-- Card 2 - aktif --> */}
            <div class="bg-white hover:bg-primary-700 hover:text-primary-50 rounded-xl p-6 shadow-2xl">
              <div class="bg-primary-700 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {/* <!-- Icon global --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-lg mb-2">
                Internasionalisasi Fakultas
              </h3>
              <p class="text-sm mb-4">
                Menyusun kurikulum berbasis outcome-based education (OBE) dan
                Merdeka Belajar Kampus Merdeka (MBKM). Menyusun kurikulum
                berbasis outcome-based.
              </p>
              <Link to="/internasionalisasi">
                <div className="flex items-center justify-end gap-1 text-sm font-medium text-primary hover:underline">
                  Selengkapnya
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="bg-white hover:bg-primary-700 hover:text-primary-50 rounded-xl p-6 shadow-2xl">
              <div class="bg-primary-700 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {/* <!-- Icon grafik --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g fill="#fff">
                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694L1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                  </g>
                </svg>
              </div>
              <h3 class="font-semibold text-lg mb-2">
                Penguatan Karakter dan Kesejahteraan Mahasiswa
              </h3>
              <p class=" text-sm mb-4">
                Menyusun kurikulum berbasis outcome-based education (OBE) dan
                Merdeka Belajar Kampus Merdeka (MBKM).
              </p>
              <Link to="/penguatan">
                <div className="flex items-center justify-end gap-1 text-sm font-medium text-primary hover:underline">
                  Selengkapnya
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="dukungan" class="my-20">
        <div className="w-full">
          <div
            class="bg-cover bg-center py-30 px-14"
            style={{ backgroundImage: `url(${UB})` }}
          >
            <div class=" mx-auto text-white">
              {/* <!-- Judul --> */}
              <div class="mb-10">
                <div class="flex items-center gap-2 text-2xl font-bold">
                  {/* <!-- Icon Speaker --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#fff"
                      d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49l-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013a75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975l1.609 3.037l.01.024h.548l-.002-.014l-.443-2.966a68 68 0 0 0-1.722-.082z"
                    />
                  </svg>
                  <h2 className="ml-2 xl:text-5xl md:text-2xl text-2xl">
                    Suarakan Dukunganmu!
                  </h2>
                </div>
              </div>

              {/* <!-- Testimoni cards --> */}
              <div class="flex gap-6 overflow-x-auto">
                {/* <!-- Card --> */}
                <div class="rounded-xl border border-white/20 bg-white/5 p-6 ">
                  <h3 class="font-semibold text-white">Agus Setya Budi</h3>
                  <p class="text-sm text-gray-300 mb-3">agussetya@gmail.com</p>
                  <div class="flex items-center text-white mb-2">
                    {/* <!-- Kutipan Icon --> */}
                    <svg
                      class="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17h2v-6H5v8h4v-2zm8 0h2v-6h-4v8h4v-2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-white leading-relaxed">
                    Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB
                    akan berkembang lebih inovatif dan kolaboratif di bawah
                    kepemimpinannya
                  </p>
                </div>

                {/* <!-- Card (duplikat untuk contoh) --> */}
                <div class="rounded-xl border border-white/20 bg-white/5 p-6 ">
                  <h3 class="font-semibold text-white">Agus Setya Budi</h3>
                  <p class="text-sm text-gray-300 mb-3">agussetya@gmail.com</p>
                  <div class="flex items-center text-white mb-2">
                    <svg
                      class="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17h2v-6H5v8h4v-2zm8 0h2v-6h-4v8h4v-2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-white leading-relaxed">
                    Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB
                    akan berkembang lebih inovatif dan kolaboratif di bawah
                    kepemimpinannya
                  </p>
                </div>

                {/* <!-- Card 3 --> */}
                <div class="rounded-xl border border-white/20 bg-white/5 p-6 ">
                  <h3 class="font-semibold text-white">Agus Setya Budi</h3>
                  <p class="text-sm text-gray-300 mb-3">agussetya@gmail.com</p>
                  <div class="flex items-center text-white mb-2">
                    <svg
                      class="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17h2v-6H5v8h4v-2zm8 0h2v-6h-4v8h4v-2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-white leading-relaxed">
                    Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB
                    akan berkembang lebih inovatif dan kolaboratif di bawah
                    kepemimpinannya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" class="my-20">
        <div className="w-full px-10">
          <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* <!-- Kiri: Informasi --> */}
            <div>
              <h2 class="text-5xl font-bold text-gray-800 mb-4">
                Mari Bicara!
              </h2>
              <p class="text-gray-600 mb-8 text-xl">
                Berikan dukungan Anda, karena dukungan Anda sangat berarti bagi
                kemajuan, perubahan, dan masa depan yang lebih baik
              </p>

              {/* <!-- Kontak --> */}
              <ul class="space-y-4 text-gray-700 pt-10">
                <li class="flex items-center gap-2">
                  {/* <!-- Icon Email --> */}
                  <Mail className="text-gray-800" />
                  <span>iqbaal.ee@gmail.com</span>
                </li>
                <li class="flex items-center gap-2">
                  {/* <!-- Icon Telepon --> */}
                  <Phone className="text-gray-800" />
                  <span>62 121-313-456</span>
                </li>
                <li class="flex items-center gap-2">
                  {/* <!-- Icon Instagram --> */}
                  <Instagram className="text-gray-800" />
                  <span>iqbaal.e</span>
                </li>
              </ul>
            </div>

            {/* <!-- Kanan: Formulir --> */}
            <form class="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                placeholder="Pesan"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                class="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
