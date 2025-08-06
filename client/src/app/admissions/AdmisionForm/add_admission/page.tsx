import React, { useState } from 'react'
import PersonalInformation from '../steps/PersonalInformation'
import AddressInformation from '../steps/AddressInformation '
import ContactInformation from '../steps/ContactInformation'
import PreviousEducation from '../steps/PreviousEducation'
import ApplicationDetails from '../steps/ApplicationDetails'
import AddAdmissions from './AddAdmissions'
import Sidebar from '@/components/custom-components/SideBar'
import UpdateAdmission from '../update_admission/UpdateAdmission'
import { getAdmissionList } from '@/lib/services'
const items = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
  ];
const Page =async () => {
  const admissionData= await getAdmissionList()


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