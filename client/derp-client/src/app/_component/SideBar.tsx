"use client"
import { Button } from '@/components/ui/button'
import React, { Children, useState } from 'react'
import NavLink from './NavLink'
import NavBar from './NavBar'
import { AlignJustify } from 'lucide-react'
interface SideBarProps{
    children:React.ReactNode
}
const Sidebar = ({children}:SideBarProps) => {
    const [open,setOpen]=useState(false)
    const handleClick=()=>{
   setOpen(!open)
    }
     
  return (
<>
<div className='h-screen flex gap-5 bg-white   '>
<div className={` p-2 duration-300 text-cyan-500 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 relative ${open?'w-[20%] text-sm':'w-[5%] text-xs text-wrap '}`} >
<AlignJustify className="absolute right-0 rounded-full mr-0 " onClick={handleClick}/>
<div className={` p-1 duration-300  ${open?'visible':'hidden'}`}>Matliwala Charitable Trust</div>
<div className='mt-12  '>

  <NavBar/>

</div>


</div>
<div className={`w-full `}>
   {
    children
   }
</div>

</div>


</>


)
}

export default Sidebar