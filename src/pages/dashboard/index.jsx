import React from "react";
import Sidebar from "../../component/dashboard/sidebar/index";
import PagesHome from "./pagesHome";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="flex w-screen h-screen p-4">
        {/* sidebar */}
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Page Content */}
          <main className="max-w-screen-2xl flex-1">
            <Outlet />
          </main>
        </div>
        {/* content */}
        {/* <PagesHome /> */}
      </div>
    </>
  );
}
