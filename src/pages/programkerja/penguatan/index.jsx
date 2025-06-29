import React from "react";
import Navbar from "../../../component/landing/navbar";
import Footer from "../../../component/landing/footer";
import imgHeader from "../../../assets/programkerja/penguat.png";
import { useNavigate } from "react-router-dom";
import {
  Notebook,
  CircleArrowRight,
  CircleArrowLeft,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  Mail,
  Phone,
  Instagram,
} from "lucide-react";

export default function Penguatan() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section>
        <div className="relative w-full h-full">
          <button
            onClick={() => navigate(-1)}
            aria-label="Kembali"
            className="absolute flex items-center justify-center w-10 h-10 transition duration-200 rounded-full top-48 left-5 2xl:left-20 xl:left-20 md:left-10"
          >
            <CircleArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex justify-center">
            <div className="absolute z-[-1] w-full 2xl:h-[450px] xl:h-[450px] md:h-[400px] h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-primary-700 opacity-80"></div>
              <img
                src={imgHeader}
                alt="Digitalisasi"
                className="object-cover w-screen h-full"
              />
            </div>
            <div className="pt-20 mb-14">
              <div className="2xl:w-[600px] xl:w-[600px] md:w-[500px] w-[280px] text-center">
                <h1 className="mt-20 text-lg font-medium text-white 2xl:text-3xl xl:text-3xl md:text-xl">
                  Penguatan Karakter dan Kesejahteraan Mahasiswa
                </h1>
                <p className="mt-2 text-sm text-white 2xl:text-md xl:text-md md:text-sm opacity-60">
                  Meningkatkan kesejahteraan mahasiswa serta membentuk karakter
                  unggul dalam akademik dan sosial.
                </p>
                <div className="flex justify-center">
                  <div className="w-[120px] h-[5px] mt-8 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <div className="grid grid-cols-12 2xl:gap-14 xl:gap-14 md:gap-7 gap-y-5">
              {/* Card Paperless */}
              <div className="col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6">
                <div className="flex justify-center border-0 2xl:w-[377px] xl:w-[377px] 2xl:h-[259px] xl:h-[259px] md:w-[300px] md:h-[220px] w-[300px] h-[220px] bg-white drop-shadow-sm rounded-[15px] p-5">
                  <div>
                    <div className="flex items-center justify-center gap-5">
                      <ClipboardCheck className="text-gray-800 2xl:w-7 xl:w-7 md:w-5 2xl:h-7 xl:h-7 md:h-5" />
                      <h7 className="text-sm font-medium text-gray-800 2xl:text-lg xl:text-lg md:text-sm">
                        Student Exchange
                      </h7>
                    </div>
                    <div className="">
                      <div className="flex items-center my-8 gap-2.5">
                        <div className="flex items-center justify-center 2xl:w-12 xl:w-12 md:w-5 2xl:h-12 xl:h-12 md:h-5">
                          <CircleArrowRight className="text-gray-800" />
                        </div>
                        <p className="text-xs 2xl:text-sm xl:text-sm md:text-xs text-gray-800/70">
                          Mengadakan program pertukaran mahasiswa dengan
                          universitas luar negeri.
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center 2xl:w-12 xl:w-12 md:w-5 2xl:h-12 xl:h-12 md:h-5">
                          <CircleArrowRight className="text-gray-800" />
                        </div>
                        <p className="text-xs 2xl:text-sm xl:text-sm md:text-xs text-gray-800/70">
                          Mengembangkan skema double degree dengan universitas
                          mitra.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Portal */}
              <div className="col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6">
                <div className="flex justify-center border-0 2xl:w-[377px] xl:w-[377px] 2xl:h-[259px] xl:h-[259px] md:w-[300px] md:h-[220px] w-[300px] h-[220px] bg-white drop-shadow-sm rounded-[15px] p-5">
                  <div>
                    <div className="flex items-center justify-center gap-5">
                      <ClipboardCheck className="text-gray-800 2xl:w-7 xl:w-7 md:w-5 2xl:h-7 xl:h-7 md:h-5" />
                      <h7 className="text-sm font-medium text-gray-800 2xl:text-lg xl:text-lg md:text-sm">
                        Kurikulum Berbasis Global
                      </h7>
                    </div>
                    <div className="">
                      <div className="flex items-center my-8 gap-2.5">
                        <div className="flex items-center justify-center 2xl:w-12 xl:w-12 md:w-5 2xl:h-12 xl:h-12 md:h-5">
                          <CircleArrowRight className="text-gray-800" />
                        </div>
                        <p className="text-xs 2xl:text-sm xl:text-sm md:text-xs text-gray-800/70">
                          Mengadaptasi kurikulum yang sesuai dengan standar
                          internasional.
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center 2xl:w-12 xl:w-12 md:w-5 2xl:h-12 xl:h-12 md:h-5">
                          <CircleArrowRight className="text-gray-800" />
                        </div>
                        <p className="text-xs 2xl:text-sm xl:text-sm md:text-xs text-gray-800/70">
                          Menawarkan mata kuliah dengan bahasa pengantar
                          bilingual (Indonesia-Inggris).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Absensi */}
              <div className="flex col-span-12 md:justify-center justify-normal 2xl:col-span-4 xl:col-span-4 md:col-span-12">
                <div className="flex justify-center border-0 2xl:w-[377px] xl:w-[377px] 2xl:h-[259px] xl:h-[259px] md:w-[300px] md:h-[220px] w-[300px] h-[220px] bg-white drop-shadow-sm rounded-[15px] p-5">
                  <div>
                    <div className="flex items-center justify-center gap-5">
                      <ClipboardCheck className="text-gray-800 2xl:w-7 xl:w-7 md:w-5 2xl:h-7 xl:h-7 md:h-5" />
                      <h7 className="text-sm font-medium text-gray-800 2xl:text-lg xl:text-lg md:text-sm">
                        Dosen dan Penelitian Asing
                      </h7>
                    </div>
                    <div className="">
                      <div className="flex items-center my-8 gap-2.5">
                        <div className="flex items-center justify-center 2xl:w-12 xl:w-12 md:w-5 2xl:h-12 xl:h-12 md:h-5">
                          <CircleArrowRight className="text-gray-800" />
                        </div>
                        <p className="text-xs 2xl:text-sm xl:text-sm md:text-xs text-gray-800/70">
                          Mengundang akademisi internasional sebagai pengajar
                          dan pembicara dalam seminar atau kuliah tamu.
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center 2xl:w-12 xl:w-12 md:w-5 2xl:h-12 xl:h-12 md:h-5">
                          <CircleArrowRight className="text-gray-800" />
                        </div>
                        <p className="text-xs 2xl:text-sm xl:text-sm md:text-xs text-gray-800/70">
                          Mengadakan proyek riset bersama dengan universitas
                          luar negeri.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 2xl:px-36 xl:px-8 md:px-12 my-28">
          <div className="flex gap-5">
            <div>
              <Mail className="text-gray-800" />
            </div>
            <p className="text-gray-800">Iqbal.ee@gmail.com</p>
          </div>
          <div className="flex gap-5 my-2.5">
            <div>
              <Phone className="text-gray-800" />
            </div>
            <p className="text-gray-800">62 121-313-456</p>
          </div>
          <div className="flex gap-5">
            <div>
              <Instagram className="text-gray-800" />
            </div>
            <p className="text-gray-800">@iqbaal.e</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
