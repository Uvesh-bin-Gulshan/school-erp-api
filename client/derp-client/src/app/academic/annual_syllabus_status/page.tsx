import React from 'react'
import ViewAdmissions from './ViewAnnualSyllabus'
import { getAdmissionList, getAnnualStatusList, getCourseList, getDepartmentDetail, getDepartmentList, getMonthlyStatusList, getSubjectList } from '@/lib/services'
import AddAdmissions from './AddAnnualSyllabus'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AddDepartment from './AddAnnualSyllabus'
import ViewDepartment from './ViewAnnualSyllabus'
import AddSubject from './AddAnnualSyllabus'
import ViewSubject from './ViewAnnualSyllabus'
import { ChevronsRight } from 'lucide-react'
import SideBar from '@/app/_component/SideBar'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Admissions" },
];
const Page =async () => {
    const data= await getAnnualStatusList()
    console.log(data)
  return (
<>


<SideBar breadcrumbs={items}>
<div className=''>
<BreadcrumbWithCustomSeparator items={items} separator={<span> <ChevronsRight/>
  </span>} />
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