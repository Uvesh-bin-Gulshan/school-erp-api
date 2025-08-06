import React from 'react';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { syllabusStatusSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { syllabusStatusFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';
import ViewVerification from './ViewSyllabusStatus';
import { getSyllabusStatusVerificationList } from '@/lib/services';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Verification" },
];

const Page = async () => {
  const data = await getSyllabusStatusVerificationList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={syllabusStatusSchema}
            fields={syllabusStatusFields}
            apiEndpoint={`${routes.CREATE_SYLLABUS_STATUS_VERIFICATION}`}
            title="Add Verification"
            description="Add syllabus status verification details here"
          />
          <ViewVerification data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
