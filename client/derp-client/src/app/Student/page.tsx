import React from 'react'
import ViewStudent from './ViewStudent'
import AddStudent from './AddStudent'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import { getStudentList } from '@/lib/services'
import SideBar from '@/app/_component/SideBar'
import GenericUpdateForm from '../_component/GenericUpdateForm'
import { studentSchema } from '@/lib/zodschema'
import { routes } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Students" },
];

const Page = async () => {
  const data = await getStudentList()
  console.log(data)

  return (
    <>
      <SideBar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <AddStudent/>
               <ViewStudent data={data} />
        </div>
      </SideBar>
    </>
  )
}

export default Page
