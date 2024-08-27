import React from 'react'
import { getAdmissionDashboard, getAdmissionList } from '@/lib/services'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AdmissionDashboard from './AdmissionDashboard ';
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
];
const Page =async () => {
    const dashboardData=await getAdmissionDashboard()
        console.log(dashboardData)
  return (
<>



<Sidebar breadcrumbs={items}>


<div className='  h-96'>
<AdmissionDashboard dashboardData={dashboardData} />

</div>

</Sidebar>



</>
  )
}

export default Page

