import React from 'react';
import Sidebar from '@/app/_component/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb';
import { getSubjectList } from '@/lib/services';
import AddSubject from './AddSubject';
import ViewSubject from './ViewSubject';

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
        <GenericAddForm
      schema={subjectSchema}
      fields={subjectFields}
      apiEndpoint={routes.CREATE_SUBJECT}
      successMessage="Subject added successfully"
      failureMessage="Failed to add subject"
      dialogTitle="Add New Subject"
      dialogDescription="Fill in the details to add a new subject."
    />
          <ViewSubject data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
