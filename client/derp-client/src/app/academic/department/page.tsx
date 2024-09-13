import React from 'react';
import ViewDepartment from './ViewDepartment';
import AddDepartment from './AddDepartment';
import SideBar from '@/app/_component/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb';
import { getDepartmentList } from '@/lib/services';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Departments" },
];

const Page = async () => {
  const data = await getDepartmentList();
  
  return (
    <SideBar breadcrumbs={items}>
      <div className=''>
        <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
      </div>
      <div className='m-12 bg-white p-4 h-96'>
      <GenericAddForm
      schema={departmentSchema}
      fields={departmentFields}
      apiEndpoint={`${routes.CREATE_DEPARTMENT}`}
      successMessage="Department added successfully"
      failureMessage="Failed to add department"
      dialogTitle="Add Department"
      dialogDescription="Enter department details here"
      />
        <ViewDepartment data={data} />
      </div>
    </SideBar>
  );
}

export default Page;
