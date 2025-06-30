import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../../component/dashboard/header";
import bgRekamJejak from "../../../../assets/publikasiIMG.png";
import FormInput from "../../../../component/dashboard/formInput/formInput";
import { Editor } from "primereact/editor";

export default function Add() {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  //   const [berita, setBerita] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Header tagName="Tentang Saya" />
      <div className="mx-10 my-10">
        <div className="my-10">
          <div className="bg-white  py-4 px-5 rounded-2xl">
            <h1 className="font-semibold text-2xl">Gambar</h1>
            <div className="flex gap-5 mt-5 items-center">
              <div>
                <img
                  src={bgRekamJejak}
                  alt="Profile"
                  className="w-48 h-32 border-2 rounded-xl border-grey-2 object-cover mb-3"
                />
              </div>
              <div className="mx-5 px-5">
                <button className="bg-primary-800 px-3 py-1 text-sm text-white rounded-lg mr-3">
                  Unggah
                </button>
                <button className="border-grey-4 border-2 px-3 py-1 text-sm text-primary-800 rounded-lg">
                  Hapus
                </button>
              </div>
            </div>

            <div className="">
              <FormInput
                label="Judul"
                name="judul"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul program"
              />
            </div>

            <div className="mt-5">
              <FormInput
                label="Deskripsi"
                name="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Deskripsi"
              />
            </div>

            <div className="mt-5">
              <h2 className="text-lg mb-1">Berita</h2>
              <div className="card">
                <Editor
                  value={text}
                  onTextChange={(e) => setText(e.htmlValue)}
                  style={{ height: "320px" }}
                />
              </div>
            </div>

            <div className="button my-7 flex justify-center">
              <button className="bg-primary-800 px-6 py-4 text-sm text-white rounded-lg mr-3">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
