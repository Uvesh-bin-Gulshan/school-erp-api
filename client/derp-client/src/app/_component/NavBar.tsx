import React, { useState } from 'react'
import NavLink from './NavLink'
import { MdOutlineSchool } from 'react-icons/md'

const NavBar = () => {
  const [isDropDownOpen,setDropDownOpen]=useState(false)
  const handleDropDown=()=>{
    setDropDownOpen(!isDropDownOpen)
  }
  return (
<>

<div className=''>
<NavLink href='/'>Home</NavLink><br/>
<div>
  <div onClick={handleDropDown} className='pointer'>

  <MdOutlineSchool />
  </div>
 { isDropDownOpen &&(

<>

<NavLink href='../admin/admissions'>Admissions</NavLink><br/>
<NavLink href='../admin/'>Student</NavLink><br/>
<NavLink href='../course/'>Course</NavLink><br/>
<NavLink href='../subject/'>subject</NavLink><br/>

</>


 )

  }

  

</div>
<div>

<NavLink href='../department'>Department</NavLink>
</div>



</div>
</>

)
}

export default NavBar