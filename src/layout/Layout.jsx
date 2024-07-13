import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../components/components/SidebarMenu";
import Header from "../components/components/Header";

const Layout = () => {
  return (
    <div className="flex h-screen dark:bg-boxdark-2 dark:text-bodydark">
      {/* Sidebar */}
      <SidebarMenu />

      {/* Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="mx-auto w-full p-4 md:p-6 2xl:p-10">
          {/* Outlet from react-router-dom */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
