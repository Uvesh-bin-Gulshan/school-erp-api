import React from 'react'
import { getAdmissionDashboard, getAdmissionList } from '@/lib/services'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AdmissionDashboard from './AdmissionDashboard ';
import AdmissionStatusDashboard from './AdmissionStatusDashboard';
import AdmissionLocationDashboard from './AdmissionLocationDashboard';
import AdmissionAgeDashboard from './AdmissionAgeDashboard';
import AdmissionDepartmentCourseDashboard from './AdmissionDepartmentCourseDashboard';
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


<div className=' overflow-auto h-96'>
{/* <AdmissionDashboard dashboardData={dashboardData} /> */}
<AdmissionStatusDashboard dashboardData={dashboardData}/>
<AdmissionDepartmentCourseDashboard dashboardData={dashboardData}/>
<AdmissionLocationDashboard dashboardData={dashboardData}/>
<AdmissionAgeDashboard dashboardData={dashboardData} />
</div>

</Sidebar>



</>
  )
}

export default Page

