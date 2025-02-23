import React from 'react'
import ViewExamTimeTable from './ViewExamTimeTable'
import Sidebar from '@/components/custom-components/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb'
import { examTimeTableSchema } from '@/lib/zodschema'
import { routes } from '@/lib/routePath'
import { examTimeTableFields } from '@/lib/fields'
import { getExamTimeTableList } from '@/lib/services'
import GenericForm from '@/components/custom-components/GenericForm'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "ExamTimeTable" },
];

const Page = async () => {
  const data = await getExamTimeTableList()
  console.log(data)

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={examTimeTableSchema}
            fields={examTimeTableFields}
            apiEndpoint={`${routes.CREATE_EXAMTIMETABLE}`}
            title="Create ExamTimeTable"
            description="Add a new exam time table"
          />
          <ViewExamTimeTable data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
