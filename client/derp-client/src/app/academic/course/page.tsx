import React from 'react'
import ViewAdmissions from './ViewCourse'
import { getAdmissionList, getCourseList, getDepartmentDetail, getDepartmentList } from '@/lib/services'
import AddAdmissions from './AddCourse'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AddDepartment from './AddCourse'
import ViewDepartment from './ViewCourse'
import SideBar from '@/app/_component/SideBar'

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



<SideBar breadcrumbs={items}>
<div className=''>
<BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
</div>


<div className='m-12 bg-white  p-4  h-96 '>
  <AddDepartment />
  <ViewDepartment  data={data}/>
</div>
</SideBar>

</>
  )
}

export default Page