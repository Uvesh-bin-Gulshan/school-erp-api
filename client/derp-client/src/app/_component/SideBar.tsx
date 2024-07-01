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
<div className='h-screen flex gap-5 bg-stone-100  '>
<div className={`bg-stone-100 p-2 duration-300 relative ${open?'w-[20%] text-sm':'w-[5%] text-xs text-wrap '}`} >
<AlignJustify className="absolute right-0 rounded-full mr-0 " onClick={handleClick}/>
<div className={`bg-stone-100 p-1 duration-300  ${open?'visible':'hidden'}`}>Matliwala Charitable Trust</div>
<div className='mt-12 '>

  <NavBar/>

</div>


</div>
<div className={`w-full`}>
   {
    children
   }
</div>

</div>


</>


)
}

export default Sidebar