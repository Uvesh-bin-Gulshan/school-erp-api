import React from 'react';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import ViewMonthlySubjectSyllabusStatus from './ViewMonthlySyllabus';
import { getMonthlyStatusList } from '@/lib/services';
import GenericForm from '@/components/custom-components/GenericForm';
import { routes } from '@/lib/routePath';
import { monthlySubjectSyllabusStatusFields } from '@/lib/fields';
import { monthlySubjectSyllabusStatusSchema } from '@/lib/zodschema';

const items = [
  { href: "/", label: "Home" },
  { href: "/monthly-syllabus-status", label: "Monthly Syllabus Status" },
];

const Page = async () => {
  const data = await getMonthlyStatusList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
        <GenericForm
      schema={monthlySubjectSyllabusStatusSchema}
      fields={monthlySubjectSyllabusStatusFields}
      apiEndpoint={routes.CREATE_MONTHLY_SYLLABUS_STATUS}
      title="Add New Monthly Syllabus Status"
      description="Fill in the details to add a new monthly syllabus status."
    />
          <ViewMonthlySubjectSyllabusStatus data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
