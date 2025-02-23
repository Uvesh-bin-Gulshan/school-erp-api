import React from 'react'
import ImportAdmission from './ImportAdmission'
import Sidebar from '@/components/custom-components/SideBar';
const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
];

const Page = () => {
  return (
<>
<Sidebar breadcrumbs={items}>
   
      <div className="h-[73vh] mt-10">
<ImportAdmission/>
      </div>
    </Sidebar>

</>


)
}

export default Page