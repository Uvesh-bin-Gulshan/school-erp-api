import React from 'react';
import ViewDepartment from './ViewDepartment';
import SideBar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getDepartmentList } from '@/lib/services';
import GenericForm from '@/components/custom-components/GenericForm';
import { departmentSchema } from '@/lib/zodschema';
import { departmentFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';

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
      <GenericForm
      schema={departmentSchema}
      fields={departmentFields}
      apiEndpoint={`${routes.CREATE_DEPARTMENT}`}
      title="Add Department"
      description="Enter department details here"
      />
        <ViewDepartment data={data} />
      </div>
    </SideBar>
  );
}

export default Page;
