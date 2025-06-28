import React, { useState } from "react";
import profiling from "../../../assets/profiling.png";
import FormInput from "../../../component/dashboard/formInput/formInput";

export default function PagesSetting() {
  const [namaProfil, setNamaProfil] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  return (
    <div className="mx-10 my-10">
      <div className="my-10">
        <div className="bg-white  py-4 px-5 rounded-2xl">
          <h1 className="font-semibold text-2xl">Profil</h1>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                src={profiling}
                alt="Profile"
                className="w-16 h-16 rounded-full border-2 border-grey-2 object-cover mb-3"
              />
            </div>
            <div className="mx-5 px-5 pt-3">
              <button className="bg-primary-800 px-3 py-1 text-sm text-white rounded-lg mr-3">
                Unggah
              </button>
              <button className="border-grey-4 border-2 px-3 py-1 text-sm text-primary-800 rounded-lg">
                Hapus
              </button>
            </div>
          </div>

          <div className="my-5">
            <FormInput
              label="Nama Profil"
              name="nama_profil"
              value={namaProfil}
              onChange={(e) => setNamaProfil(e.target.value)}
              placeholder="Mohamad Iqbal"
            />
          </div>

          <h1 className="font-semibold pt-5 text-2xl">Sosial Media</h1>

          <div className="mt-5">
            <FormInput
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="iqbaal.e@gmail.com"
            />
          </div>
          <div className="mt-5">
            <FormInput
              label="Instagram"
              name="instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="@Iqbaal.ee"
            />
          </div>
          <div className="mt-5">
            <FormInput
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="081123231123"
            />
          </div>
          
          <div className="button my-7 flex justify-center">
            <button className="bg-primary-800 px-6 py-4 text-sm text-white rounded-lg mr-3">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
