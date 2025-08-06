"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import NavBar from "./NavBar";
import { FaBars } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { BreadcrumbWithCustomSeparator } from "./BreadCrumb";
import { MdOutlineSearch } from "react-icons/md";

interface SideBarProps {
  children: React.ReactNode;
  breadcrumbs: { href?: string; label: string }[];
}

const SideBar = ({ children, breadcrumbs }: SideBarProps) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out fixed md:relative
          bg-white border-r border-gray-200 h-screen
          ${open ? "w-72" : "w-20"} 
          hidden md:block
          shadow-lg
        `}
      >
        {/* Logo Container */}
        <div className="h-20 flex items-center justify-center border-b border-gray-200 bg-white">
          <div className={`px-6 ${open ? "w-full" : "w-16"}`}>
            <img
              src="/logo.png"
              alt="Matliwala Charitable Trust"
              className="max-h-12 w-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Navigation with proper padding */}
        <div className="px-4">
          <NavBar open={open} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header with improved styling */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleClick}
              className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <FaBars className="text-gray-600 text-xl" />
            </button>
            <BreadcrumbWithCustomSeparator items={breadcrumbs} />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <MdOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <Input
                className="pl-10 pr-4 py-2 w-72 rounded-lg border border-gray-200 
                  focus:ring-2 focus:ring-violet-500 focus:border-violet-500
                  placeholder:text-gray-400 text-gray-600"
                placeholder="Search..."
              />
            </div>
          </div>
        </header>

        {/* Main Content Area with proper padding */}
        <main className="flex-1 p-6 overflow-auto bg-gray-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        {/* Footer with improved styling */}
        <footer className="border-t border-gray-200 py-4 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>© 2024 Institute Management</span>
              <span className="text-violet-600">
                Matliwala Charitable Trust
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
