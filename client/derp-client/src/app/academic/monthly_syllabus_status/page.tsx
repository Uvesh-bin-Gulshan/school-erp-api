import React from 'react'
import ViewAdmissions from './ViewMonthlySyllabus'
import { getAdmissionList, getCourseList, getDepartmentDetail, getDepartmentList, getMonthlyStatusList, getSubjectList } from '@/lib/services'
import AddAdmissions from './AddMonthlySyllabus'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AddDepartment from './AddMonthlySyllabus'
import ViewDepartment from './ViewMonthlySyllabus'
import AddSubject from './AddMonthlySyllabus'
import ViewSubject from './ViewMonthlySyllabus'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Admissions" },
];
const Page =async () => {
    const data= await getMonthlyStatusList()
    console.log(data)
  return (
<>



<Sidebar breadcrumbs={items}>
<div className=''>
<BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
</div>


<div className='m-12 bg-white  p-4  h-96 '>
  <AddSubject />
  <ViewSubject  data={data}/>
</div>
</Sidebar>

</>
  )
}

export default Page