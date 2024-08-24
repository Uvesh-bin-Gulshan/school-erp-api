import React from 'react'
import ViewAdmissions from './ViewCourse'
import { getAdmissionList, getCourseList, getDepartmentDetail, getDepartmentList } from '@/lib/services'
import AddAdmissions from './AddCourse'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AddDepartment from './AddCourse'
import ViewDepartment from './ViewCourse'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Admissions" },
];
const Page =async () => {
    const data= await getCourseList()
    console.log(data)
  return (
<>



<Sidebar >
<div className=''>
<BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
</div>


<div className='m-12 bg-white  p-4  h-96 '>
  <AddDepartment />
  <ViewDepartment  data={data}/>
</div>
</Sidebar>

</>
  )
}

export default Page