import React from "react";
import { SquarePen, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../../component/dashboard/header";

export default function PagesWork() {
  const programData = [
    {
      judul: "Digitalisasi Administrasi dan Pelayanan Publik",
      deskripsi:
        "Meningkatkan efisiensi dan transparansi dalam administrasi fakultas dengan pemanfaatan teknologi digital.",
      subPrograms: [
        {
          judul: "Paperless Administration",
          rincian: [
            "Mengurangi ketergantungan pada dokumen fisik dengan sistem berbasis digital.",
            "Menerapkan tanda tangan elektronik dan sistem persetujuan online.",
          ],
        },
        {
          judul: "Portal Akademik yang Interaktif",
          rincian: [
            "Mengembangkan portal akademik dengan fitur yang lebih responsif dan mudah digunakan.",
            "Menyediakan fitur tracking progres akademik mahasiswa secara real-time.",
          ],
        },
        {
          judul: "Absensi Digital",
          rincian: [
            "Absensi Digital untuk Dosen dan Mahasiswa.",
            "Menerapkan tanda tangan elektronik dan sistem persetujuan online.",
          ],
        },
      ],
    },
    {
      judul: "Internasionalisasi Fakultas",
      deskripsi:
        "Meningkatkan daya saing global dengan memperluas jejaring internasional dalam pendidikan dan penelitian.",
      subPrograms: [
        {
          judul: "Student Exchange",
          rincian: [
            "Mengadakan program pertukaran mahasiswa dengan universitas luar negeri.",
            "Menerapkan tanda tangan elektronik dan sistem persetujuan online.",
          ],
        },
        {
          judul: "Kurikulum Berbasis Global",
          rincian: [
            "Mengadaptasi kurikulum yang sesuai dengan standar internasional.",
            "Menawarkan mata kuliah dengan bahasa pengantar bilingual (Indonesia-Inggris).",
          ],
        },
        {
          judul: "Dosen dan Peneliti Asing",
          rincian: [
            "Mengundang akademisi internasional sebagai pengajar dan pembicara dalam seminar atau kuliah tamu.",
            "Mengadakan proyek riset bersama dengan universitas luar negeri.",
          ],
        },
      ],
    },
    {
      judul: "Penguatan Karakter dan Kesejahteraan Mahasiswa",
      deskripsi:
        "Meningkatkan kesejahteraan mahasiswa serta membentuk karakter unggul dalam akademik dan sosial.",
      subPrograms: [
        {
          judul: "Peningkatan Beasiswa",
          rincian: [
            "Memperluas akses beasiswa bagi mahasiswa berprestasi dan dari keluarga kurang mampu.",
            "Menjalin kerja sama dengan pihak eksternal untuk sponsor beasiswa tambahan.",
          ],
        },
        {
          judul: "Layanan Konseling Akademik",
          rincian: [
            "Menyediakan layanan konseling bagi mahasiswa yang mengalami tekanan akademik dan psikologis.",
            "Menyediakan layanan konseling bagi mahasiswa yang mengalami tekanan akademik dan psikologis.",
          ],
        },
        {
          judul: "Fasilitas yang Lebih Baik",
          rincian: [
            "Penyediaan ruang belajar yang lebih nyaman dan kondusif.",
            "Peningkatan akses WiFi, co-working space, dan laboratorium digital untuk mahasiswa.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Header tagName="Program Kerja" />

      <div className="mx-10 my-15 rounded-xl bg-white p-6 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-gray-800 font-medium text-2xl">
              Data Program Kerja
            </h1>
            <p className="text-gray-800/50 text-lg">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Link to="/dashboard/Add Program Kerja">
              <button className="w-[150px] h-[50px] flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-700 text-white text-xs font-medium hover:bg-gray-800 transition">
                Tambah Data <Plus size={15} />
              </button>
            </Link>
          </div>
        </div>
        <div className="my-8">
          <div className="overflow-x-auto w-full">
            <table className=" min-w-full rounded-xl">
              <thead className="">
                <tr className="bg-primary-600">
                  <th
                    scope="col"
                    className="p-5 text-sm font-semibold text-white capitalize rounded-tl-xl"
                  >
                    Judul
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-sm font-semibold text-white capitalize"
                  >
                    Deskripsi
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-sm font-semibold text-white capitalize"
                  >
                    Sub Program 1
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-sm font-semibold text-white capitalize"
                  >
                    Sub Program 2
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-sm font-semibold text-white capitalize"
                  >
                    Sub Program 3
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-sm font-semibold text-white capitalize rounded-tr-xl"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {programData.map((program, index) => (
                  <tr key={index}>
                    <td className="p-2 font-semibold">{program.judul}</td>
                    <td className="p-2">{program.deskripsi}</td>
                    {program.subPrograms.map((sub, idx) => (
                      <td key={idx} className="p-2">
                        <p className="font-semibold">Judul: {sub.judul}</p>
                        {sub.rincian.map((item, i) => (
                          <p key={i}>
                            <span className="font-semibold">Rincian</span>{" "}
                            {i + 1}: {item}
                          </p>
                        ))}
                      </td>
                    ))}
                    <td>
                      <td className="">
                        <Link to="/dashboard/Edit Program Kerja">
                          <button className="me-2.5 text-green-500">
                            <SquarePen />
                          </button>
                        </Link>
                        <button className="text-red-500">
                          <Trash2 />
                        </button>
                      </td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
