import React from 'react';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getSyllabusTypeList } from '@/lib/services';
import ViewSyllabusType from './ViewSyllabusType';
import { syllabusTypeSchema } from '@/lib/zodschema';
import { syllabusTypeFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/syllabus-type", label: "Syllabus Type" },
];

const Page = async () => {
  const data = await getSyllabusTypeList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
        <GenericForm
      schema={syllabusTypeSchema}
      fields={syllabusTypeFields}
      apiEndpoint={routes.CREATE_SYLLABUS_TYPE}
      title="Add New Syllabus Type"
      description="Fill in the details to add a new Syllabus Type."
        />
          <ViewSyllabusType data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
