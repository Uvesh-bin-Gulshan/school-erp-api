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
import { AiOutlineDoubleRight } from "react-icons/ai";

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
          className={` p-2 duration-300  text-cyan-500 
  bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 
   text-center relative ${
     open ? "w-[13%] text-sm " : "w-[5%] text-xs text-wrap "
   }`}
        >
          <div
            className={` p-1 duration-300 bg-white  
   p-1.5 justify-center flex rounded-full mt-2   ${
     open ? "w-20 h-20 mx-[25%] " : "h-12 w-12"
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
            className=" bg-cyan-700 text-2xl px-0.5 py-2 h-10 w-8 text-white rounded-r-lg my-4"
          >
            <AiOutlineDoubleRight />
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
