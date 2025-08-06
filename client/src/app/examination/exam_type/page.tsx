import React from 'react';
import ViewExamType from './ViewExamType';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getExamTypeList } from '@/lib/services';
import { examTypeSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { examTypeFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Exam Types" },
];

const Page = async () => {
  const data = await getExamTypeList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          <GenericForm
            schema={examTypeSchema}
            fields={examTypeFields}
            apiEndpoint={`${routes.CREATE_EXAMTYPE}`}
            title="Create Exam Type"
            description="Create a new exam type here"
          />
          <ViewExamType data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
