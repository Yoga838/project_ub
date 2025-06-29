import React from "react";
import { Outlet } from "react-router-dom";

export default function Add() {
  return (
    <div className="mx-10 my-10 rounded-xl bg-white p-6 shadow-md">
      <div className="">
        <h1 className="text-gray-800 font-medium text-2xl">
          Edit Program Kerja
        </h1>
      </div>
      <Outlet />
    </div>
  );
}
