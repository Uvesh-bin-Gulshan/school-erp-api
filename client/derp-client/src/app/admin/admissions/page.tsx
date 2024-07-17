import React from 'react'
import ViewAdmissions from './ViewAdmissions'
import { getAdmissionList } from '@/lib/services'
import AddAdmissions from './AddAdmissions'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Admissions" },
];
const Page =async () => {
    const data= await getAdmissionList()
    console.log(data)
  return (
<>



<Sidebar breadcrumbs={items}>
<div>
</div>

<div className=' bg-white  h-96'>
  <AddAdmissions />

<ViewAdmissions  data={data}/>
</div>

</Sidebar>



</>
  )
}

export default Page