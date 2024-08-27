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

  const handleDropDown = (key: any) => {
    setOpenDropDown(openDropDown === key ? "" : key);
  };

  return (
    <>
      <div className="">
        <div>
          <div
            onClick={() => handleDropDown("student")}
            className="pointer text-center text-white mb-8"
          >
            <div className="flex justify-center text-2xl">
              <MdSupervisorAccount />
            </div>

            <h6
              className={` p-1 duration-300 
   p-1.5 justify-center flex rounded-full mt-1   ${
     open ? "visible " : "hidden"
   }`}
            >
              Students
            </h6>
            {openDropDown === "student" && (
              <>
                <NavLink href="/">Home</NavLink>
                <br />
                <NavLink href="../admissions/page.tsx">Admissions</NavLink>
                <br />
                <NavLink href="../admin/">Student</NavLink>
                <br />
              </>
            )}
          </div>
          <div>
            <div
              onClick={() => handleDropDown("academic")}
              className="pointer text-center text-white mb-8"
            >
              <div className="flex justify-center  text-2xl">
                <IoBookSharp />
              </div>

              <h6
                className={` p-1 duration-300  
   p-1.5 justify-center flex rounded-full mt-1  ${
     open ? "visible " : "hidden"
   }`}
              >
                Academics
              </h6>
            </div>
            {openDropDown === "academic" && (
              <>
                <NavLink href="../academic/department/">Department</NavLink>
                <NavLink href="../course/">Course</NavLink>
                <br />
                <NavLink href="../subject/">Subject</NavLink>
                <br />
                <NavLink href="../monthly_syllabus_status/">
                  Monthly Syllabus Status
                </NavLink>
                <br />
                <NavLink href="../annual_syllabus_status/">
                  Annual Syllabus Status
                </NavLink>
                <br />
              </>
            )}
          </div>
          <div>
            <div
              onClick={() => handleDropDown("library")}
              className="pointer text-center text-white mb-8"
            >
              <div className="flex justify-center text-2xl">
                <ImBooks />
              </div>

              <h6
                className={` p-1 duration-300  
p-1.5 justify-center flex rounded-full mt-1  ${open ? "visible " : "hidden"}`}
              >
                library
              </h6>
            </div>
            {openDropDown === "library" && (
              <>
                <NavLink href="../department">Department</NavLink>
                <NavLink href="../course/">Course</NavLink>
                <br />
                <NavLink href="../subject/">Subject</NavLink>
                <br />
                <NavLink href="../monthly_syllabus_status/">
                  Monthly Syllabus Status
                </NavLink>
                <br />
                <NavLink href="../annual_syllabus_status/">
                  Annual Syllabus Status
                </NavLink>
                <br />
              </>
            )}
          </div>

          <div>
            <div
              onClick={() => handleDropDown("alumni")}
              className="pointer text-center text-white "
            >
              <div className="flex justify-center text-2xl">
              <HiAcademicCap />
              </div>

              <h6
                className={` p-1 duration-300  
p-1.5 justify-center flex rounded-full mt-1  ${open ? "visible " : "hidden"}`}
              >
                alumni
              </h6>
            </div>
            {openDropDown === "alumni" && (
              <>
                <NavLink href="../department">Department</NavLink>
                <NavLink href="../course/">Course</NavLink>
                <br />
                <NavLink href="../subject/">Subject</NavLink>
                <br />
                <NavLink href="../monthly_syllabus_status/">
                  Monthly Syllabus Status
                </NavLink>
                <br />
                <NavLink href="../annual_syllabus_status/">
                  Annual Syllabus Status
                </NavLink>
                <br />
              </>
            )}
          </div>
        </div>

        <div className="bottom-0 fixed mr-1 my-2 ml-1.5 ">
        <UserProfile/>

        </div>
      </div>
    </>
  );
};

export default NavBar;
