import React, { useState } from "react";
import FormInput from "../../../../component/dashboard/formInput/formInput";
import FormDesc from "../../../../component/dashboard/formInput/formDesc";
import { Link } from "react-router-dom";

export default function Page_3() {
  const [formData, setFormData] = useState({
    judul_sub_program_2: "",
    rincian_sub_program_1: "",
    rincian_sub_program_2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-10">
      <div className="">
        <div className="">
          <div>
            <FormInput
              label="Judul Sub-Program 2"
              name="judul_sub_program_2"
              value={formData.judul_sub_program_2}
              onChange={handleChange}
              placeholder="Judul Sub-Program 2"
              maxlength={20}
            />
            <p className="text-right text-sm mt-1">
              {formData.judul_sub_program_2.length}/20 Karakter
            </p>
          </div>
          <div className="my-14">
            <FormDesc
              label="Rincian Sub Program 1"
              name="rincian_sub_program_1"
              value={formData.rincian_sub_program_1}
              onChange={handleChange}
              placeholder="Rincian Sub Program 1"
              maxlength={30}
            />
            <p className="text-right text-sm mt-1">
              {formData.rincian_sub_program_1.length}/30 Karakter
            </p>
          </div>
          <div>
            <FormDesc
              label="Rincian Sub Program 2"
              name="rincian_sub_program_2"
              value={formData.rincian_sub_program_2}
              onChange={handleChange}
              placeholder="Rincian Sub Program 2"
              maxlength={30}
            />
            <p className="text-right text-sm mt-1">
              {formData.rincian_sub_program_2.length}/30 Karakter
            </p>
          </div>
          <div className="text-end mt-14">
            <Link to="/dashboard/Edit Program Kerja/Edit 2">
              <button className="px-4 py-2 me-2.5 rounded-lg border border-primary-700 text-primary-700 text-sm font-medium hover:bg-gray-700 hover:text-white transition">
                Kembali
              </button>
            </Link>
            <Link to="/dashboard/Edit Program Kerja/Edit 4">
              <button className="px-4 py-2 xl:mt-0 md:mt-5 mt-5 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 transition">
                Lanjut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
