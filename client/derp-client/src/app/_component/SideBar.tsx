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
      <div className="h-screen flex  bg-white   ">
        <div
          className={` duration-300  text-cyan-500 
  bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-600 
   text-center relative  ${
     open ? "w-[13%] text-sm " : "w-[5%] text-xs text-wrap "
   }`}
        >
          <div
            className={`w-full p-2 h-12 bg-slate-100 
    ${
     open ? "" : ""
   }`}
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
            className="  text-xl px-0.5 py- h-8 w-8 text-black ml-12 rounded-r-lg my-4"
          >
<FaBars />
</div>

          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
