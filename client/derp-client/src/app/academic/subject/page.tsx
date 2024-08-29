import React from 'react'
import ViewAdmissions from './ViewSubject'
import { getAdmissionList, getCourseList, getDepartmentDetail, getDepartmentList, getSubjectList } from '@/lib/services'
import AddAdmissions from './AddSubject'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AddDepartment from './AddSubject'
import ViewDepartment from './ViewSubject'
import AddSubject from './AddSubject'
import ViewSubject from './ViewSubject'
import SideBar from '@/app/_component/SideBar'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Admissions" },
];
const Page =async () => {
    const data= await getSubjectList()
    console.log(data)
  return (
<>



<SideBar breadcrumbs={items}>
<div className=''>
<BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
</div>


<div className='m-12 bg-white  p-4  h-96 '>
  <AddSubject />
  <ViewSubject  data={data}/>
</div>
</SideBar>

</>
  )
}

export default Page