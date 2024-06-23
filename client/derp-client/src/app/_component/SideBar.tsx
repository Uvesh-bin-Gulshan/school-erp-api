"use client"
import { Button } from '@/components/ui/button'
import React, { Children, useState } from 'react'
import NavLink from './NavLink'
import NavBar from './NavBar'
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
<div className={`bg-stone-100 duration-300 relative ${open?'w-[20%]':'w-[5%]'}`} >
<Button className="absolute right-0 rounded-full mr-0 " onClick={handleClick}>O</Button>
<div className=''>DERP</div>
<div className='mt-12'>

  <NavBar/>

</div>


</div>
<div className={``}>
   {
    children
   }
</div>

</div>


</>


)
}

export default Sidebar