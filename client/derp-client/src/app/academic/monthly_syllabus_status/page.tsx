import React from 'react';
import Sidebar from '@/app/_component/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb';
import AddMonthlySubjectSyllabusStatus from './AddMonthlySyllabus';
import ViewMonthlySubjectSyllabusStatus from './ViewMonthlySyllabus';
import { getMonthlyStatusList } from '@/lib/services';

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
        <GenericAddForm
      schema={monthlySubjectSyllabusStatusSchema}
      fields={monthlySubjectSyllabusStatusFields}
      apiEndpoint={routes.CREATE_MONTHLY_SYLLABUS_STATUS}
      successMessage="Monthly Syllabus Status added successfully"
      failureMessage="Failed to add Monthly Syllabus Status"
      dialogTitle="Add New Monthly Syllabus Status"
      dialogDescription="Fill in the details to add a new monthly syllabus status."
    />
          <ViewMonthlySubjectSyllabusStatus data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
