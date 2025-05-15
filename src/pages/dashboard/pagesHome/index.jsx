import React from "react";
import pattern from "../../../assets/pattern-banner-top.png";
import illustration from "../../../assets/guy with globe.png";

export default function PagesHome() {
  return (
    <div className="flex-1 ml-4">
      <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 flex items-center px-8">
        <img
          src={pattern}
          alt="Banner Pattern"
          className="absolute top-0 left-0 w-full h-full opacity-90"
        />

        <div className="z-10 w-2/3 ml-8 text-white">
          <h1 className="text-xl font-semibold mb-2">
            Selamat Datang Mohammad Iqbal!
          </h1>
          <p className="text-sm font-light leading-relaxed ">
            ttttnt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupida
          </p>
        </div>

        <div className="z-10 w-1/3 flex justify-end">
          <img src={illustration} alt="Illustration" className="w-56 h-auto" />
        </div>
      </div>
    </div>
  );
}
