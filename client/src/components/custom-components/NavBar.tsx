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

  const menuItems = [
    {
      key: "student",
      icon: <MdSupervisorAccount />,
      title: "Students",
      links: [
        { href: "/", label: "Home" },
        { href: "../admissions/page.tsx", label: "Admissions" },
        { href: "../admin/", label: "Student" },
      ],
    },
    {
      key: "academic",
      icon: <IoBookSharp />,
      title: "Academics",
      links: [
        { href: "../academic/department/", label: "Department" },
        { href: "../course/", label: "Course" },
        { href: "../subject/", label: "Subject" },
        {
          href: "../monthly_syllabus_status/",
          label: "Monthly Syllabus Status",
        },
        { href: "../annual_syllabus_status/", label: "Annual Syllabus Status" },
      ],
    },
    {
      key: "library",
      icon: <ImBooks />,
      title: "Library",
      links: [
        { href: "../department", label: "Department" },
        { href: "../course/", label: "Course" },
        { href: "../subject/", label: "Subject" },
        {
          href: "../monthly_syllabus_status/",
          label: "Monthly Syllabus Status",
        },
        { href: "../annual_syllabus_status/", label: "Annual Syllabus Status" },
      ],
    },
    {
      key: "alumni",
      icon: <HiAcademicCap />,
      title: "Alumni",
      links: [
        { href: "../department", label: "Department" },
        { href: "../course/", label: "Course" },
        { href: "../subject/", label: "Subject" },
        {
          href: "../monthly_syllabus_status/",
          label: "Monthly Syllabus Status",
        },
        { href: "../annual_syllabus_status/", label: "Annual Syllabus Status" },
      ],
    },
  ];

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      {/* Menu items container - scrollable only when content overflows */}
      <div className="flex-grow overflow-y-auto">
        <div className="py-4 space-y-3">
          {menuItems.map((item) => (
            <div key={item.key}>
              <div
                onClick={() => handleDropDown(item.key)}
                className={`cursor-pointer rounded-xl p-3 transition-all duration-200
                  ${
                    openDropDown === item.key
                      ? "bg-violet-100 text-violet-700"
                      : "text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                  }`}
              >
                <div
                  className={`flex items-center ${!open && "justify-center"}`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  {open && (
                    <span className="ml-3 font-medium">{item.title}</span>
                  )}
                </div>
              </div>

              {openDropDown === item.key && open && (
                <div className="mt-2 ml-4 space-y-1">
                  {item.links.map((link, index) => (
                    <NavLink
                      key={index}
                      href={link.href}
                      className="block py-2 px-4 text-sm text-gray-600 rounded-lg
                        hover:bg-violet-50 hover:text-violet-700 transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* UserProfile - always at bottom */}
      <div className="mt-auto border-t border-gray-200 bg-white">
        <div className={`p-4 ${!open && "flex justify-center"}`}>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
