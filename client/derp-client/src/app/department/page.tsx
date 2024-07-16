import React from 'react'
import ViewAdmissions from './ViewDepartment'
import { getAdmissionList, getDepartmentDetail, getDepartmentList } from '@/lib/services'
import AddAdmissions from './AddDepartment'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import AddDepartment from './AddDepartment'
import ViewDepartment from './ViewDepartment'
import { MdOutlineNavigateNext } from 'react-icons/md'
const items = [
  {  label: "Academics" },
  { href: "/department", label: "Department" },
];
const Page =async () => {
    const data= await getDepartmentList()
    console.log(data)
  return (
<>



<Sidebar >
<div className=''>
<BreadcrumbWithCustomSeparator items={items} separator={<span>  <MdOutlineNavigateNext />
  </span>} />
</div>


<div className='m-6 bg-   h-96 '>
 
  <ViewDepartment  data={data}/>
</div>
</Sidebar>

</>
  )
}

export default Page