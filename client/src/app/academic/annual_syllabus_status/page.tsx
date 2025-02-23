import React from 'react';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import ViewAnnuallySubjectSyllabusStatus from './ViewAnnualSyllabus';
import GenericForm from '@/components/custom-components/GenericForm';
import { annuallySubjectSyllabusStatusSchema } from '@/lib/zodschema';
import { annuallySubjectSyllabusStatusFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';

const items = [
  { href: "/", label: "Home" },
  { href: "/annually-subject-syllabus-status", label: "Annually Subject Syllabus Status" },
];

const Page = async () => {
  const data = await getAnnuallySubjectSyllabusStatusList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
        <GenericForm
      schema={annuallySubjectSyllabusStatusSchema}
      fields={annuallySubjectSyllabusStatusFields}
      apiEndpoint={routes.CREATE_ANNUALLY_SUBJECT_SYLLABUS_STATUS}
      title="Add New Annually Subject Syllabus Status"
      description="Fill in the details to add a new annually subject syllabus status."
    />
          <ViewAnnuallySubjectSyllabusStatus data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
function getAnnuallySubjectSyllabusStatusList() {
  throw new Error('Function not implemented.');
}

