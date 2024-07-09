import React from 'react'
import ViewAdmissions from './ViewDepartment'
import { getAdmissionList, getDepartmentDetail, getDepartmentList } from '@/lib/services'
import AddAdmissions from './AddDepartment'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AddDepartment from './AddDepartment'
import ViewDepartment from './ViewDepartment'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Admissions" },
];
const Page =async () => {
    const data= await getDepartmentList()
    console.log(data)
  return (
<>



<Sidebar >
<div className=''>
<BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
</div>


<div className='m-4 bg-white p-4  h-96 '>
  <AddDepartment />
<ViewDepartment  data={data}/>
</div>
</Sidebar>



</>
  )
}

export default Page