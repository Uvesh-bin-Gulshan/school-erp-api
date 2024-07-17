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

interface SideBarProps {
  children: React.ReactNode;
}
const Sidebar = ({ children }: SideBarProps) => {
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
            className={`flex justify-center p-2 m-2 rounded-full   bg-slate-100 
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
        <div className={`w-full `}>
          <div
            onClick={handleClick}
            className="  flex  text-xl px-0.5 py-2
             h-8 text-black ml-8 justify-between w-[88%]   rounded-r-lg my-4"
          >
            <div className="text-2xl">

            <FaBars />
            </div>
<div className="w-[50%] justify-between flex ">
            <Input/>
            <div>
              
            </div>
  </div>
          </div>

          {children}
          <div className="bg-cyan-50  bottom-0 fixed h-[5%] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
