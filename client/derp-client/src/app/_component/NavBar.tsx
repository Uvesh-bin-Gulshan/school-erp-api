import React, { useState } from "react";
import NavLink from "./NavLink";
import { MdOutlineSchool, MdSupervisorAccount } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { HiAcademicCap } from "react-icons/hi2";
import UserProfile from "./UserProfile";

interface NavBarProps {
  open: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ open }) => {
  const [openDropDown, setOpenDropDown] = useState("");

  const handleDropDown = (key: string) => {
    setOpenDropDown(openDropDown === key ? "" : key);
  };

  return (
    <div className="  flex flex-col h-full justify-between">
      <div className="h-[70vh] place-items-center  mx-1 mb-4 overflow-y-auto side-scroll-bar">
        <div
          onClick={() => handleDropDown("student")}
          className="cursor-pointer text-center text-cyan-500 mb-6">
          <div className="flex justify-center text-2xl">
            <MdSupervisorAccount />
          </div>
          <h6
            className={`duration-300 justify-center flex rounded-full mt-1 ${
              open ? "block " : "hidden"
            }`}
          >
            Students
          </h6>
          {openDropDown === "student" && (
            <div className="mt-2 space-y-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="../admissions/page.tsx">Admissions</NavLink>
              <NavLink href="../admin/">Student</NavLink>
            </div>
          )}
        </div>

        <div
          onClick={() => handleDropDown("academic")}
          className="cursor-pointer text-center text-cyan-500 mb-6"
        >
          <div className="flex justify-center text-2xl">
            <IoBookSharp />
          </div>
          <h6
            className={`duration-300 justify-center flex rounded-full mt-1 ${
              open ? "block" : "hidden"
            }`}
          >
            Academics
          </h6>
          {openDropDown === "academic" && (
            <div className="mt-2 space-y-1">
              <NavLink href="../academic/department/">Department</NavLink>
              <NavLink href="../course/">Course</NavLink>
              <NavLink href="../subject/">Subject</NavLink>
              <NavLink href="../monthly_syllabus_status/">
                Monthly Syllabus Status
              </NavLink>
              <NavLink href="../annual_syllabus_status/">
                Annual Syllabus Status
              </NavLink>
            </div>
          )}
        </div>

        <div
          onClick={() => handleDropDown("library")}
          className="cursor-pointer text-center text-cyan-500 mb-6"
        >
          <div className="flex justify-center text-2xl">
            <ImBooks />
          </div>
          <h6
            className={`duration-300 justify-center flex rounded-full mt-1 ${
              open ? "block" : "hidden"
            }`}
          >
            Library
          </h6>
          {openDropDown === "library" && (
            <div className="mt-2 space-y-1">
              <NavLink href="../department">Department</NavLink>
              <NavLink href="../course/">Course</NavLink>
              <NavLink href="../subject/">Subject</NavLink>
              <NavLink href="../monthly_syllabus_status/">
                Monthly Syllabus Status
              </NavLink>
              <NavLink href="../annual_syllabus_status/">
                Annual Syllabus Status
              </NavLink>
            </div>
          )}
        </div>

        <div
          onClick={() => handleDropDown("alumni")}
          className="cursor-pointer text-center text-cyan-500 mb-6"
        >
          <div className="flex justify-center text-2xl">
            <HiAcademicCap />
          </div>
          <h6
            className={`duration-300 justify-center flex rounded-full mt-1 ${
              open ? "block" : "hidden"
            }`}
          >
            Alumni
          </h6>
          {openDropDown === "alumni" && (
            <div className="mt-2 space-y-1">
              <NavLink href="../department">Department</NavLink>
              <NavLink href="../course/">Course</NavLink>
              <NavLink href="../subject/">Subject</NavLink>
              <NavLink href="../monthly_syllabus_status/">
                Monthly Syllabus Status
              </NavLink>
              <NavLink href="../annual_syllabus_status/">
                Annual Syllabus Status
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <div className="mb-4 p-2">
        <UserProfile />
      </div>
    </div>
  );
};

export default NavBar;
