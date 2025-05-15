import React from "react";
import Navbar from "../../../component/landing/navbar";
import Footer from "../../../component/landing/footer";
import banner from "../../../assets/banner-pendidikan.png";
import Breadcumb from "../../../component/landing/breadcumb";
import { BookOpen, Mail, Phone, Instagram } from "lucide-react";

export default function Pendidikan() {
  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <img
          src={banner}
          alt="Banner Pendidikan"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="relative z-10 inset-0 bg-primary-700/70 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-8 py-6 sm:py-10 min-h-screen">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Riwayat Pendidikan <br /> Mohammad Iqbal
          </h1>
          <p className="max-w-xl sm:max-w-2xl md:max-w-4xl mb-6 text-sm sm:text-base leading-relaxed">
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
          <button className="border-white border-2 text-white px-6 sm:px-10 py-2 rounded-2xl font-semibold shadow">
            Kontak
          </button>
        </div>
      </div>
      {/* Slug */}
      <Breadcumb />

      {/* Layout kanan kiri */}
      <div className="flex flex-col md:flex-row px-10 md:px-16 mt-2 mb-20 gap-10">
        {/* Kiri: Riwayat Pendidikan */}
        <div className="md:w-2/3 space-y-14">
          {/* S1 */}
          <div>
            <div className="flex items-center space-x-2 text-primary-800 font-semibold">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">
                (S1) Administrasi Publik - Universitas Brawijaya
              </span>
            </div>
            <p className="text-md leading-relaxed mt-5 text-primary-300 font-normal">
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
            <div className="flex items-center space-x-2 text-primary-800 font-semibold">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">
                MIB: Graduate School of Business, University of Wollongong,
                Australia
              </span>
            </div>
            <p className="text-md leading-relaxed mt-5 text-primary-300 font-normal">
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
            <div className="flex items-center space-x-2 text-primary-800 font-semibold">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">
                DBA: Victoria Business School, Victoria University, Melbourne,
                Australia
              </span>
            </div>
            <p className="text-md leading-relaxed mt-5 text-primary-300 font-normal">
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
        <div className="md:w-1/3 bg-gray-100 p-6 rounded-xl shadow-md h-fit px-15 py-12">
          <h2 className="text-2xl font-bold text-primary-700 mb-6">
            Mohammad Iqbal
          </h2>
          <p className="text-lg text-primary-700 font-semibold mb-6">
            Membawa Perubahan, Mewujudkan Masa Depan
          </p>
          <p className="text-primary-300 text-sm leading-relaxed mb-6">
            “Perubahan adalah kunci menuju kemajuan. Dengan semangat inovasi dan
            kepemimpinan yang visioner, kita berkomitmen untuk membawa
            transformasi positif dalam pendidikan, riset, dan tata kelola
            akademik. Melalui kolaborasi dan pengembangan berkelanjutan, kita
            membangun masa depan yang lebih cerah, di mana fakultas menjadi
            pusat keunggulan yang mampu menjawab tantangan zaman.”
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-700" />
              <a href="mailto:iqbal.eee@gmail.com" className="hover:underline">
                iqbal.eee@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-700" />
              62 121-313-456
            </p>
            <p className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-primary-700" />
              @iqbal.e
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
