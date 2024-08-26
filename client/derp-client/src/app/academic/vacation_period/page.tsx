import React from 'react'
import ViewVacationPeriod from './ViewVacationPeriod'
import { getVacationPeriodList } from '@/lib/services'
import AddVacationPeriod from './AddVacationPeriod'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Vacation Periods" },
];

const Page = async () => {
  const data = await getVacationPeriodList()
  console.log(data)
  
  return (
    <>
      <Sidebar>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <AddVacationPeriod />
          <ViewVacationPeriod data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
