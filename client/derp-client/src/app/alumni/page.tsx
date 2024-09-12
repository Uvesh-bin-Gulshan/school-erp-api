import React from 'react'
import ViewAlumni from './ViewAlumni'
import AddAlumni from './AddAlumni'
import SideBar from '@/app/_component/SideBar'
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb'
import { getAlumniList } from '@/lib/services'
import { alumniSchema } from '@/lib/zodschema'
import { routes } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Alumni" },
];

const Page = async () => {
  const data = await getAlumniList();
  console.log(data);

  return (
    <>
      <SideBar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <AddAlumni/>
          <ViewAlumni data={data} />
        </div>
      </SideBar>
    </>
  );
}

export default Page;
