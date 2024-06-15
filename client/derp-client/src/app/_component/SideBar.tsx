"use client"
import { Button } from '@/components/ui/button'
import React, { Children, useState } from 'react'
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
<div className='h-screen flex gap-5 bg-slate-100  '>
<div className={`bg-red-500 duration-300 ${open?'w-[20%]':'w-[10%]'}`} >
Lorem ipsum dolor sit amet,<br>
</br> consectetur adipisicing elit. 

<Button onClick={handleClick}>Click</Button>
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