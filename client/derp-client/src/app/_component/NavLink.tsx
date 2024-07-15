import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string;
}
const NavLink:React.FC<NavLinkProps> = ({href,children,activeClassName}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
   <>
   <div className={` p-2 duration-300  text-white
   
   text-center relative ${
     open ? "w-[13%] text-sm " : "w-[5%] text-xs text-wrap "
   }`}>
    
   <Link  href={href} className={isActive ? activeClassName:''}>{children}
   
   </Link>

   </div>
   
   
   </>
  )
}

export default NavLink