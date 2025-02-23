import React from 'react'
import ViewStudent from './ViewStudent'
import Sidebar from '@/components/custom-components/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb'
import { getStudentList } from '@/lib/services'
import { studentSchema } from '@/lib/zodschema'
import { routes } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'
import { studentFields } from '@/lib/fields'
import GenericForm from '@/components/custom-components/GenericForm'

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
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
        <GenericForm
        schema={studentSchema}
        fields={studentFields}
        apiEndpoint={`${routes.CREATE_STUDENT}`}
        title="Update Student"
        description="Update student details here"
      /> 
          <ViewStudent data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
