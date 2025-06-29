import React from "react";

export default function Header({ tagName }) {
  return (
    <div className="h-20 w-full bg-white flex justify-between items-center px-11">
      <h1 className="tag-name text-xl">{tagName}</h1>
      <div className="flex items-center gap-8">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-[365px] h-[44px] pl-10 pr-4 py-2 rounded-lg bg-white border-1 border-gray-400 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
          <h3 className="text-lg text-gray-800 font-bold">Mohamad Iqbal</h3>
        </div>
      </div>
    </div>
  );
}
