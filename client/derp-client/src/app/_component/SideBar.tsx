"use client";
import { Button } from "@/components/ui/button";
import React, { Children, useState } from "react";
import NavLink from "./NavLink";
import NavBar from "./NavBar";
import {
  AlignJustify,
  ChevronsRight,
  SquareChevronRight,
  StepForward,
} from "lucide-react";
import Image from "next/image";
import { AiOutlineBars, AiOutlineDoubleRight } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import UserProfile from "./UserProfile";
import PageTitle from "./PageTitle";
import { BreadcrumbWithCustomSeparator } from "./BreadCrumb";

interface SideBarProps {
  children: React.ReactNode;
  breadcrumbs:{href?:string;label:string}[]
 
}
const Sidebar = ({ children, breadcrumbs  }: SideBarProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="h-screen  flex  bg-white   ">
        <div
          className={` duration-300 h-screen text-cyan-500 
  bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-600 
   text-center relative h-full  ${
     open ? "w-[13%] text-sm " : "w-[5%] text-xs text-wrap "
   }`}
        >
          <div
            className={`flex justify-center p-2 mt-4 mx-2  rounded-full   bg-slate-100 
    ${open ? "w-16 h-16" : "w-12 h-12"}`}
          >
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="Matliwala Charitable Trust"
            />
          </div>
          <div className="mt-12  ">
            <NavBar open={open} />
          </div>
        </div>
        <div className={`w-full bg-gray-200 px-6  `}>
          <div
            
            className="  flex  text-xl px-0.5 py-2
             h-8 text-black ml-2 justify-between w-[100%] 
               rounded-r-lg mt-6 mb-12"
          >
            <div onClick={handleClick} className="text-2xl ">

            <FaBars />
            </div>
            <div className="mr-[47%]">
            <BreadcrumbWithCustomSeparator  items={breadcrumbs}  />

            </div>

<div className="w-[30%] justify-between mr-3 flex ">
            <Input
            
            placeholder="search"
            />
            <div>
              
            </div>
  </div>
          </div>

          {children}
          <div className="bg-cyan-50  bottom-0 fixed h-[5%]  w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
