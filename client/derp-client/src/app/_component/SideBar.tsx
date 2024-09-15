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
      <div className="h-screen   flex overflow-hidden bg-transparent  ">
        <div
          className={`h-[96.5vh]  duration-300
               bg-gray-300/50 border border-gray-200  
               rounded-md  m-2.5 text-cyan-500 
  
   text-center relative h-full  ${
     open ? "md:w-[10%] w-screen text-sm " : "md:w-[5.5%] md:block hidden text-xs text-wrap "
   }`}
        >
          <div
            className={`flex absolute justify-center
               place-items-center  px-1.5  
               rounded-full   bg-transparent mt-1
    ${open ? "w-18 h-18 mx-12 md:mx-5 mt-4" : "w-16 h-16 "}`}
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
             h-8 text-gray-500 ml-4 justify-between w-[100%] 
               rounded-r-lg mt-8 "
          >
            <div onClick={handleClick} className="text-xl  ">
              <FaBars />
            </div>
            <div className="mr-[47%]">
              <BreadcrumbWithCustomSeparator items={breadcrumbs} />
            </div>

            <div className="w-[30%]  justify-between mr-8 flex ">
              <Input className="h-8 " placeholder="search" />
              <div></div>
            </div>
          </div>

          {children}
          <div className="    px-2 py-4 bg-transparent 
            max-w-full text-xs text-gray-400 lowercase 
           text-left   bottom-0 h-[10%]  ">
            <div className="flex ">


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


