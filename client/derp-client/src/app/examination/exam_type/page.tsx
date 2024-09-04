import React from 'react'
import ViewExamType from './ViewExamType'
import { getExamTypeList } from '@/lib/services'
import AddExamType from './AddExamType'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import SideBar from '@/app/_component/SideBar'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Exam Types" },
];

const Page = async () => {
  const data = await getExamTypeList()
  console.log(data)

  return (
    <>
      <SideBar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>
        <div className='m-12 bg-white p-4 h-96'>
          <AddExamType />
          <ViewExamType data={data} />
        </div>
      </SideBar>
    </>
  )
}

export default Page
