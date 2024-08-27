import React from 'react'
import ViewSyllabusType from './ViewSyllabusType'
import { getSyllabusTypeList } from '@/lib/services'
import AddSyllabusType from './AddSyllabusType'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Syllabus Types" },
];

const Page = async () => {
  const data = await getSyllabusTypeList()
  console.log(data)
  
  return (
    <>
      <Sidebar>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <AddSyllabusType />
          <ViewSyllabusType data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
