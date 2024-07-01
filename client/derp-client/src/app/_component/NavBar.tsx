import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  return (
<>

<div className=''>
<NavLink href='/'>Home</NavLink><br/>
<NavLink href='../admin/admissions'>Admissions</NavLink><br/>
<NavLink href='../department'>Department</NavLink>



</div>
</>

)
}

export default NavBar