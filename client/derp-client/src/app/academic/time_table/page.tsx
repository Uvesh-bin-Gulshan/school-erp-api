import React from 'react'
import ViewTimeTable from './ViewTimeTable'
import { getTimeTableList } from '@/lib/services'
import AddTimeTable from './AddTimeTable'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "TimeTables" },
];

const Page = async () => {
  const data = await getTimeTableList()
  console.log(data)
  
  return (
    <>
      <Sidebar>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <AddTimeTable />
          <ViewTimeTable data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
    