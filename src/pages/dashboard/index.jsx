import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="flex w-screen h-screen p-4">
        <div className="container-sidebar w-[300px] h-full bg-primary-600 rounded-xl"></div>
        <div className="content">
          <div className="banner-top w-[1000px] h-[200px] bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl ml-4"></div>
        </div>
      </div>
    </>
  );
}
