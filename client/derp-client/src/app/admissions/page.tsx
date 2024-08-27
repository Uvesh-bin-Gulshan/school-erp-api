import React from 'react'
import { getAdmissionDashboard, getAdmissionList } from '@/lib/services'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import ViewAdmissions from './ViewAdmissions';
import Link from 'next/link';
import CustomButton from '../_component/CustomButton';
import { LayoutDashboard } from 'lucide-react';
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
];
const Page =async () => {
    const data= await getAdmissionList()
    const dashboard=await getAdmissionDashboard()
    console.log(dashboard)
    console.log(data)
  return (
<>



<Sidebar breadcrumbs={items}>
<Link  className=""   href="../admissions/dashboard">     
       <CustomButton className="w-36 ml-4" text="Dashboard" icon={<LayoutDashboard />} />
    </Link>

<div className='  h-96'>

<ViewAdmissions  data={data}/>
</div>

</Sidebar>



</>
  )
}

export default Page

