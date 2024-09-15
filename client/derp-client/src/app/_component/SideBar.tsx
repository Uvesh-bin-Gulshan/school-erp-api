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
  breadcrumbs: { href?: string; label: string }[];
}
const SideBar = ({ children, breadcrumbs }: SideBarProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="h-[97vh] flex overflow-hidden bg-white  ">
        <div
          className={`  duration-300 h-screen
               bg-gray-300/50 border border-gray-200  rounded-md py-1.5 m-1.5  text-cyan-500 
  
   text-center relative h-full  ${
     open ? "md:w-[10%] w-screen text-sm " : "md:w-[6%] md:block hidden text-xs text-wrap "
   }`}
        >
          <div
            className={`flex absolute justify-center
               place-items-center  px-1.5  
               rounded-full   bg-transparent
    ${open ? "w-18 h-18 mx-12 md:mx-5" : "w-16 h-16 mx-1"}`}
          >
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Matliwala Charitable Trust"
            />
          </div>
          <div className="mt-24  shadow-xl">
            <NavBar open={open} />
          </div>
        </div>
        <div className={`w-full `}>
          <div
            className="  flex  text-xl px-0.5 py-2
             h-8 text-black ml-4 justify-between w-[100%] 
               rounded-r-lg mt-6 mb-12"
          >
            <div onClick={handleClick} className="text-2xl  ">
              <FaBars />
            </div>
            <div className="mr-[47%]">
              <BreadcrumbWithCustomSeparator items={breadcrumbs} />
            </div>

            <div className="w-[30%] justify-between mr-8 flex ">
              <Input placeholder="search" />
              <div></div>
            </div>
          </div>

          {children}
          <div className=" absolute w-screen    bg-gray-50 shadow-xl 
           p-4  text-sm text-slate-600 lowercase 
           text-left fixed  bottom-1.5  h-[7%]  ">
            <div className="flex">


            <span className="capitalize">copyright@2024-institute managemnet</span>
            <div className=" capitalize ml-4">Matliwala Charitable Trust</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;


