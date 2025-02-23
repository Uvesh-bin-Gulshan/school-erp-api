import React from 'react'
import ViewMarkSheet from './ViewMarkSheet'
import Sidebar from '@/components/custom-components/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb'
import { getMarkSheetList } from '@/lib/services'
import { markSheetSchema } from '@/lib/zodschema'
import { routes } from '@/lib/routePath'
import { markSheetFields } from '@/lib/fields'
import GenericForm from '@/components/custom-components/GenericForm'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "MarkSheets" },
];

const Page = async () => {
  const data = await getMarkSheetList()
  console.log(data)

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={markSheetSchema}
            fields={markSheetFields}
            apiEndpoint={`${routes.CREATE_MARK_SHEET}`}
            title="Create MarkSheet"
            description="Add a new marksheet"
          />
          <ViewMarkSheet data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
