import React from 'react'
import ViewResultSheet from './ViewResultSheet'
import Sidebar from '@/components/custom-components/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb'
import { resultSheetSchema } from '@/lib/zodschema'
import { routes } from '@/lib/routePath'
import { resultSheetFields } from '@/lib/fields'
import { getResultSheetList } from '@/lib/services'
import GenericForm from '@/components/custom-components/GenericForm'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "ResultSheets" },
];

const Page = async () => {
  const data = await getResultSheetList()
  console.log(data)

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={resultSheetSchema}
            fields={resultSheetFields}
            apiEndpoint={`${routes.CREATE_RESULT_SHEET}`}
            title="Create ResultSheet"
            description="Add a new result sheet"
          />
          <ViewResultSheet data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
