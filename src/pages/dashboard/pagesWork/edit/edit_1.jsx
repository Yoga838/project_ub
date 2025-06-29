import React from "react";
import FormInput from "../../../../component/dashboard/formInput/formInput";
import FormDesc from "../../../../component/dashboard/formInput/formDesc";
import { Link } from "react-router-dom";

export default function Page_1() {
  return (
    <div className="my-10">
      <div className="">
        <div className="">
          <div>
            <FormInput
              label="Judul Program"
              name="judul_program"
              value=""
              onChange=""
              placeholder="Judul Program"
            />
          </div>
          <div className="my-14">
            <FormDesc
              label="Deskripsi"
              name="desc"
              value=""
              onChange=""
              placeholder="Deskripsi"
            />
          </div>
          <Link to="/dashboard/Edit Program Kerja/Edit 2">
            <div className="text-end">
              <button className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-800 transition">
                Lanjut
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
