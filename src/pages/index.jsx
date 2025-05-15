import React from "react";
import Sidebar from "../component/dashboard/sidebar";
import Navbar from "../component/landing/navbar";
import Footer from "../component/landing/footer";

export default function Test() {
  return (
    <>
    <Navbar/>
      <h1 className="font-bold text-7xl">Hello World</h1>
      <Footer/>
    </>
  );
}
