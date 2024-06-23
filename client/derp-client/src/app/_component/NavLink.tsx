import React, { ReactNode } from 'react';
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
  return (
   <>
   <Link href={href} className={isActive ? activeClassName:''}>{children}
   
   </Link>
   
   
   </>
  )
}

export default NavLink