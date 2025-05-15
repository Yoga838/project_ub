import React from "react";
import { useNavigate } from "react-router-dom";
import rekamJejakBg from "../../../assets/rekamJejak.png";
import publikasi from "../../../assets/publikasiIMG.png";
import icp from "../../../assets/pemateriIMG.png";
import penelitian from "../../../assets/ketpenIMG.png";
import Navbar from "../../../component/landing/navbar";
import Footer from "../../../component/landing/footer";
import Breadcumb from "../../../component/landing/breadcumb";

const RekamJejak = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${rekamJejakBg})` }}
      >
        <div className="absolute inset-0 z-10 bg-primary-700/80" />
        <div className="relative z-20 max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-14 lg:text-5xl">
            Rekam Jejak <br /> Mohammad Iqbal.
          </h1>
          <p className="max-w-6xl mx-auto text-base text-white mb-14 lg:text-lg">
            Sebagai seorang akademisi dan profesional di bidang administrasi,
            Mohammad Iqbal telah menapaki perjalanan panjang dalam dunia
            pendidikan dan pengelolaan institusi. Dengan pengalaman luas dalam
            mengajar, penelitian, serta kepemimpinan di Fakultas Ilmu
            Administrasi Universitas Brawijaya, beliau telah berkontribusi dalam
            berbagai inovasi akademik dan kebijakan institusional. Melalui
            berbagai pencapaian dan dedikasi yang telah diberikan, rekam jejak
            ini mencerminkan komitmen beliau dalam membawa perubahan serta
            mendorong kemajuan pendidikan dan masyarakat.
          </p>
          <button className="w-[200px] px-6 py-2 text-white bg-transparent rounded-[15px] border border-white hover:bg-white hover:text-black transition">
            Kontak
          </button>
        </div>
      </div>

      {/* Breadcrumb & Subheading */}
      <Breadcumb />
      <div className="max-w-6xl px-6 py-8 mx-auto">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          Perjalanan karier dan dedikasi beliau dalam dunia akademik dan
          administrasi.
        </h2>
        <p className="text-gray-600">
          Dedikasi dan inovasi untuk masa depan kampus yang lebih maju.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: Publikasi */}
        <div className="p-6 transition bg-white rounded-lg shadow hover:shadow-lg">
          <img
            src={publikasi}
            alt="Publikasi"
            className="object-cover w-full h-48 mb-4 rounded-md"
          />
          <h3 className="mb-2 text-xl font-semibold">Publikasi</h3>
          <p className="mb-4 text-gray-600">
            Mohammad Iqbal aktif dalam penelitian dan publikasi ilmiah yang
            berkontribusi pada pengembangan ilmu administrasi.
          </p>
          <button
            onClick={() => navigate("/Tentang Saya/Rekam Jejak/Publikasi")}
            className="inline-flex items-center font-medium text-blue-600 group"
          >
            Baca Selengkapnya
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Card 2: Pemateri */}
        <div className="p-6 transition bg-white rounded-lg shadow hover:shadow-lg">
          <img
            src={icp}
            alt="Pemateri ICP"
            className="object-cover w-full h-48 mb-4 rounded-md"
          />
          <h3 className="mb-2 text-xl font-semibold">Pemateri ICP</h3>
          <p className="mb-4 text-gray-600">
            Aktif dalam seminar dan publikasi ilmiah yang berkontribusi pada
            pengembangan administrasi.
          </p>
          <button
            onClick={() => navigate("/Tentang Saya/Rekam Jejak/Pemateri")}
            className="inline-flex items-center font-medium text-blue-600 group"
          >
            Baca Selengkapnya
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Card 3: Ketua Penelitian */}
        <div className="p-6 transition bg-white rounded-lg shadow hover:shadow-lg">
          <img
            src={penelitian}
            alt="Ketua Penelitian"
            className="object-cover w-full h-48 mb-4 rounded-md"
          />
          <h3 className="mb-2 text-xl font-semibold">Ketua Penelitian</h3>
          <p className="mb-4 text-gray-600">
            Studi tentang implementasi e-Government untuk meningkatkan pelayanan
            publik di Indonesia.
          </p>
          <button
            onClick={() => navigate("/Tentang Saya/Rekam Jejak/Ketpen")}
            className="inline-flex items-center font-medium text-blue-600 group"
          >
            Baca Selengkapnya
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RekamJejak;
