import React from "react";
import Navbar from "../../../component/landing/navbar";
import Footer from "../../../component/landing/footer";
import Breadcumb from "../../../component/landing/breadcumb";
import banner from "../../../assets/banner-visimisi.png";

export default function VisiMisi() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full pt-18">
        <Breadcumb />
        {/* Layout kanan kiri */}
        <div className="flex flex-col md:flex-row px-10 md:px-16 mt-2 mb-20 gap-10">
          <div className="md:w-2/3 space-y-14">
            <div>
              <h2 className="text-2xl font-semibold mb-8">Visi & Misi</h2>
              <div className="w-20 h-1 bg-primary-800 mb-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadikan fakultas sebagai pusat keunggulan akademik dan
                inovasi, yang berkontribusi dalam pengembangan ilmu pengetahuan,
                riset, dan kepemimpinan berdaya saing global.
              </p>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-2">Misi</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>
                  Mengembangkan sistem pembelajaran yang inovatif, berbasis
                  riset, dan sesuai dengan perkembangan zaman.
                </li>
                <li>
                  Mendorong penelitian yang berdampak bagi masyarakat serta
                  meningkatkan jumlah publikasi ilmiah bereputasi.
                </li>
                <li>
                  Memperkuat kerja sama dengan institusi nasional dan
                  internasional untuk memperkuat akademik dan profesionalisme.
                </li>
                <li>
                  Menciptakan lingkungan yang mendukung pengembangan dosen,
                  mahasiswa, dan tenaga kependidikan agar lebih kompetitif.
                </li>
                <li>
                  Mengoptimalkan sistem administrasi berbasis digital untuk
                  efisiensi dan pelayanan yang lebih baik.
                </li>
                <li>
                  Mengembangkan program akademik dan non-akademik yang mampu
                  menjawab tantangan global serta kebutuhan dunia kerja.
                </li>
              </ol>
            </div>
          </div>
          {/* Kanan: Profil Ringkas */}
          <div className="md:w-1/3 flex justify-center items-start">
            <img
              src={banner}
              alt="Presentasi"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
