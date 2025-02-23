import React from 'react';
import ViewAttendance from './ViewAttendance';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getAttendanceList } from '@/lib/services';
import { attendanceSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { attendanceFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Attendance" },
];

const Page = async () => {
  const data = await getAttendanceList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={attendanceSchema}
            fields={attendanceFields}
            apiEndpoint={`${routes.CREATE_ATTENDANCE}`}
            title="Create Attendance"
            description="Add a new attendance record"
          />
          <ViewAttendance data={data} />
        </div>
      </Sidebar>
    </>
  );
}

export default Page;
