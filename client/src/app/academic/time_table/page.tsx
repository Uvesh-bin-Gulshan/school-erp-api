import React from 'react';
import ViewTimeTable from './ViewTimeTable';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getTimeTableList } from '@/lib/services';
import { timetableFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';
import GenericForm from '@/components/custom-components/GenericForm';
import { timeTableSchema } from '@/lib/zodschema';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "TimeTables" },
];

const Page = async () => {
  const data = await getTimeTableList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          <GenericForm
            schema={timeTableSchema}
            fields={timetableFields}
            apiEndpoint={`${routes.CREATE_TIMETABLE}`}
            title="Add TimeTable"
            description="Add timetable details here"
          />
          <ViewTimeTable data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
