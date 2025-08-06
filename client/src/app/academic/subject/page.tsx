import React from 'react';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getSubjectList } from '@/lib/services';
import ViewSubject from './ViewSubject';
import GenericForm from '@/components/custom-components/GenericForm';
import { subjectFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';
import { subjectSchema } from '@/lib/zodschema';

const items = [
  { href: "/", label: "Home" },
  { href: "/subjects", label: "Subjects" },
];

const Page = async () => {
  const data = await getSubjectList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
        <GenericForm
          fields={subjectFields}
          apiEndpoint={routes.CREATE_SUBJECT}        
          schema={subjectSchema}
          title="Add New Subject"
          description="Fill in the details to add a new subject."
    />
          <ViewSubject data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
