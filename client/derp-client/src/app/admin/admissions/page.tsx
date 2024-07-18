import React from 'react'
import ViewAdmissions from './ViewAdmissions'
import { getAdmissionList } from '@/lib/services'
import AddAdmissions from './AddAdmissions'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
];
const Page =async () => {
    const data= await getAdmissionList()
    console.log(data)
  return (
<>



<Sidebar breadcrumbs={items}>


<div className='  h-96'>

<ViewAdmissions  data={data}/>
</div>

</Sidebar>



</>
  )
}

export default Page

