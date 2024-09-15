import React from 'react'
import ViewHallTicket from './ViewHallTicket'
import Sidebar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import { getHallTicketList } from '@/lib/services'
import { hallTicketSchema } from '@/lib/zodschema'
import { routes } from '@/lib/routePath'
import { hallTicketFields } from '@/lib/fields'
import GenericForm from '../_component/GenericForm'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "HallTickets" },
];

const Page = async () => {
  const data = await getHallTicketList()
  console.log(data)

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={hallTicketSchema}
            fields={hallTicketFields}
            apiEndpoint={`${routes.CREATE_HALL_TICKET}`}
            title="Create HallTicket"
            description="Add a new hall ticket"
          />
          <ViewHallTicket data={data} />
        </div>
      </Sidebar>
    </>
  )
}

export default Page
