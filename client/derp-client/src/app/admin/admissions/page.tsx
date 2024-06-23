import React from 'react'
import ViewAdmissions from './ViewAdmissions'
import { getAdmissionList } from '@/lib/services'
import AddAdmissions from './AddAdmissions'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Breadcrumb" },
];
const Page =async () => {
    const data= await getAdmissionList()
  return (
<>



<Sidebar>
<div>
<BreadcrumbWithCustomSeparator items={items} separator={<span> / </span>} />
</div>

<div className='m-12 bg-white '>
  <AddAdmissions />

<ViewAdmissions  data={data}/>
</div>

</Sidebar>



</>
  )
}

export default Page