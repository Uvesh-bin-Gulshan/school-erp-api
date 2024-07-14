"use client"
import { Button } from '@/components/ui/button'
import React, { Children, useState } from 'react'
import NavLink from './NavLink'
import NavBar from './NavBar'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'

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
<div className='h-screen flex  bg-white   '>
<div className={` p-2 duration-300 text-cyan-500 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 relative ${open?'w-[20%] text-sm':'w-[5%] text-xs text-wrap '}`} >
<div className={` p-1 duration-300  ${open?'visible':'hidden'}`}>
<Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Matliwala Charitable Trust"
    />

    </div>
<div className='mt-12  '>

  <NavBar/>

</div>


</div>
<div className={`w-full `}>
<AlignJustify className=" ml-12 my-6" onClick={handleClick}/>
   {
    children
   }
</div>

</div>


</>


)
}

export default Sidebar