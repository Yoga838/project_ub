import React from "react";
import Navbar from "../../../component/landing/navbar";
import Footer from "../../../component/landing/footer";
import banner from "../../../assets/banner-pendidikan.png";
import Breadcumb from "../../../component/landing/breadcumb";
import { BookOpen, Mail, Phone, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pendidikan() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <img
          src={banner}
          alt="Banner Pendidikan"
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="relative inset-0 z-10 flex flex-col items-center justify-center min-h-screen px-4 py-6 text-center text-white bg-primary-700/70 sm:px-6 md:px-8 sm:py-10">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Riwayat Pendidikan <br /> Mohammad Iqbal
          </h1>
          <p className="max-w-xl mb-6 text-sm leading-relaxed sm:max-w-2xl md:max-w-4xl sm:text-base">
            Mohammad Iqbal telah melalui perjalanan akademik yang panjang dan
            penuh dedikasi di bidang administrasi publik. Dengan minat mendalam
            terhadap kebijakan publik, tata kelola pemerintahan, dan reformasi
            birokrasi, ia menempuh pendidikan di berbagai institusi ternama yang
            memperkuat pemahamannya tentang sistem administrasi modern. Sebagai
            akademisi dan praktisi, ia tidak hanya mengembangkan keilmuan di
            bidang administrasi publik tetapi juga menerapkannya dalam
            penelitian serta kontribusi akademik yang berdampak luas bagi
            masyarakat dan pemerintah.
          </p>
          <button
            onClick={() => navigate("/#kontak")}
            className="w-[200px] px-6 py-2 text-white bg-transparent rounded-[15px] border border-white hover:bg-white hover:text-black transition"
          >
            Kontak
          </button>
        </div>
      </div>
      {/* Slug */}
      <Breadcumb />

      {/* Layout kanan kiri */}
      <div className="flex flex-col gap-10 px-10 mt-2 mb-20 md:flex-row md:px-16">
        {/* Kiri: Riwayat Pendidikan */}
        <div className="md:w-2/3 space-y-14">
          {/* S1 */}
          <div>
            <div className="flex items-center space-x-2 font-semibold text-primary-800">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">
                (S1) Administrasi Publik - Universitas Brawijaya
              </span>
            </div>
            <p className="mt-5 font-normal leading-relaxed text-md text-primary-300">
              “Pada jenjang sarjana, Mohammad Iqbal mulai memperdalam pemahaman
              mengenai konsep dasar administrasi publik, kebijakan pemerintah,
              serta manajemen organisasi sektor publik. Ia aktif dalam berbagai
              kegiatan akademik dan organisasi kemahasiswaan yang membentuk
              wawasan dan kepemimpinannya. Selama kuliah, ia menulis skripsi
              berjudul “Efektivitas Implementasi Kebijakan Otonomi Daerah dalam
              Pelayanan Publik”, yang menganalisis bagaimana desentralisasi
              memengaruhi kualitas layanan di pemerintahan daerah.”
            </p>
          </div>

          {/* MIB */}
          <div>
            <div className="flex items-center space-x-2 font-semibold text-primary-800">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">
                MIB: Graduate School of Business, University of Wollongong,
                Australia
              </span>
            </div>
            <p className="mt-5 font-normal leading-relaxed text-md text-primary-300">
              “Setelah menyelesaikan pendidikan S1, Mohammad Iqbal melanjutkan
              studi ke jenjang magister di Universitas Indonesia dengan fokus
              pada reformasi birokrasi dan kebijakan berbasis data. Pada jenjang
              ini, ia mendalami metode penelitian kebijakan, perancangan sistem
              administrasi yang efektif, serta dampak teknologi terhadap tata
              kelola pemerintahan. Dalam penelitian tesisnya yang berjudul
              “Digitalisasi Administrasi Publik: Studi Implementasi e-Government
              di Indonesia”, ia menganalisis penerapan sistem e-Government dalam
              meningkatkan efisiensi layanan publik di Indonesia. Ia juga
              terlibat dalam proyek penelitian bersama Lembaga Administrasi
              Negara (LAN) yang membahas strategi percepatan reformasi birokrasi
              di kementerian dan lembaga negara.”
            </p>
          </div>

          {/* DBA */}
          <div>
            <div className="flex items-center space-x-2 font-semibold text-primary-800">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">
                DBA: Victoria Business School, Victoria University, Melbourne,
                Australia
              </span>
            </div>
            <p className="mt-5 font-normal leading-relaxed text-md text-primary-300">
              “Setelah menyelesaikan pendidikan S1, Mohammad Iqbal melanjutkan
              studi ke jenjang magister di Universitas Indonesia dengan fokus
              pada reformasi birokrasi dan kebijakan berbasis data. Pada jenjang
              ini, ia mendalami metode penelitian kebijakan, perancangan sistem
              administrasi yang efektif, serta dampak teknologi terhadap tata
              kelola pemerintahan. Dalam penelitian tesisnya yang berjudul
              “Digitalisasi Administrasi Publik: Studi Implementasi e-Government
              di Indonesia”, ia menganalisis penerapan sistem e-Government dalam
              meningkatkan efisiensi layanan publik di Indonesia. Ia juga
              terlibat dalam proyek penelitian bersama Lembaga Administrasi
              Negara (LAN) yang membahas strategi percepatan reformasi birokrasi
              di kementerian dan lembaga negara.”
            </p>
          </div>
        </div>

        {/* Kanan: Profil Ringkas */}
        <div className="p-6 py-12 bg-gray-100 shadow-md md:w-1/3 rounded-xl h-fit px-15">
          <h2 className="mb-6 text-2xl font-bold text-primary-700">
            Mohammad Iqbal
          </h2>
          <p className="mb-6 text-lg font-semibold text-primary-700">
            Membawa Perubahan, Mewujudkan Masa Depan
          </p>
          <p className="mb-6 text-sm leading-relaxed text-primary-300">
            “Perubahan adalah kunci menuju kemajuan. Dengan semangat inovasi dan
            kepemimpinan yang visioner, kita berkomitmen untuk membawa
            transformasi positif dalam pendidikan, riset, dan tata kelola
            akademik. Melalui kolaborasi dan pengembangan berkelanjutan, kita
            membangun masa depan yang lebih cerah, di mana fakultas menjadi
            pusat keunggulan yang mampu menjawab tantangan zaman.”
          </p>
          <div className="space-y-2 text-sm text-gray-700">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
