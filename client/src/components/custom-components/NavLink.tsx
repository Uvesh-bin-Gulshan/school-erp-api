import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string;
}
const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  activeClassName,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        className={` p-1 duration-300 text-white 
   bg-cyan-600 hover:bg-cyan-800 w-[90%] rounded-md shadow-xl shadow-gray-400
   text-center relative ${
     open ? "w-[13%]  text-sm p-4 " : "w-[2%]   text-[8px] px-0.5 text-wrap "
   }`}
      >
        <Link href={href} className={isActive ? activeClassName : ""}>
          {children}
        </Link>
      </div>
    </>
  );
};

export default NavLink;
