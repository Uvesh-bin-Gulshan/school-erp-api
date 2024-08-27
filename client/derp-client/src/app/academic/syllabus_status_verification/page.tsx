import React from 'react'
import ViewSyllabusStatus from './ViewSyllabusStatus'
import { getSyllabusStatusList } from '@/lib/services'
import AddSyllabusStatus from './AddSyllabusStatus'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import SideBar from '@/app/_component/SideBar'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Syllabus Status Verification" },
];

const Page = async () => {
  const data = await getSyllabusStatusList()

  return (
    <SideBar breadcrumbs={items}>
      <div className=''>
        <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
      </div>

      <div className='m-12 bg-white p-4 h-96'>
        <AddSyllabusStatus />
        <ViewSyllabusStatus data={data} />
      </div>
    </SideBar>
  )
}

export default Page
