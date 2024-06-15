import React from 'react'
import ViewAdmissions from './ViewAdmissions'
import { getAdmissionList } from '@/lib/services'
import AddAdmissions from './AddAdmissions'
import Sidebar from '@/app/_component/SideBar'
const Page =async () => {
    const data= await getAdmissionList()
    console.log(data)
  return (
<>



<Sidebar>


  <AddAdmissions />

<ViewAdmissions  data={data}/>

</Sidebar>



</>
  )
}

export default Page