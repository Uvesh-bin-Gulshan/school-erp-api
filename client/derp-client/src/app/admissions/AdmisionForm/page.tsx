import React, { useState } from 'react'
import PersonalInformation from './steps/PersonalInformation'
import AddressInformation from './steps/AddressInformation '
import ContactInformation from './steps/ContactInformation'
import PreviousEducation from './steps/PreviousEducation'
import ApplicationDetails from './steps/ApplicationDetails'
import AddAdmissions from './AddAdmissions'
import Sidebar from '@/app/_component/SideBar'
const items = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
  ];
const Page = () => {


return (
<>

<Sidebar breadcrumbs={items}>

<div className='  h-96'>
<AddAdmissions/>

</div>

</Sidebar>
</> 


)
}

export default Page