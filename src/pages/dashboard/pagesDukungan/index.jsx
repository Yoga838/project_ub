import React, { useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../../component/dashboard/header";

export default function PagesDukungan() {
  const [dataDukungan, setDataDukungan] = useState([
    {
      id: 1,
      name: "Agus Setya",
      email: "agussetya@gmail.com",
      message:
        "Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB akan berkembang lebih inovatif dan kolaboratif di bawah kepemimpinannya",
      status: "Status",
    },
    {
      id: 2,
      name: "Angel",
      email: "angelrevi@gmail.com",
      message:
        "Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB akan berkembang lebih inovatif dan kolaboratif di bawah kepemimpinannya",
      status: "Status",
    },
    {
      id: 3,
      name: "Agus Setya",
      email: "agussetya@gmail.com",
      message:
        "Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB akan berkembang lebih inovatif dan kolaboratif di bawah kepemimpinannya",
      status: "Status",
    },
    {
      id: 4,
      name: "Agus Setya",
      email: "agussetya@gmail.com",
      message:
        "Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB akan berkembang lebih inovatif dan kolaboratif di bawah kepemimpinannya",
      status: "Status",
    },
    {
      id: 5,
      name: "Agus Setya",
      email: "agussetya@gmail.com",
      message:
        "Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB akan berkembang lebih inovatif dan kolaboratif di bawah kepemimpinannya",
      status: "Status",
    },
    {
      id: 6,
      name: "Agus Setya",
      email: "agussetya@gmail.com",
      message:
        "Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB akan berkembang lebih inovatif dan kolaboratif di bawah kepemimpinannya",
      status: "Status",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setDataDukungan((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div>
      <Header tagName="Data Dukungan" />
      <div className="mx-10 my-15 rounded-xl bg-white p-6 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-gray-800 font-medium text-2xl">
              Data Dukungan
            </h1>{" "}
            <p className="text-gray-800/50 text-lg">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div className="my-8">
          <div className="overflow-x-auto w-full rounded-xl shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-700">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-xl"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Pesan
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tr-xl"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataDukungan.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-sm overflow-hidden text-ellipsis">
                      {item.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="relative inline-block text-left">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            handleStatusChange(item.id, e.target.value)
                          }
                          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="Status">Status</option>
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
