import React from 'react';
import ViewAuthor from './ViewAuthor';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getAuthorList } from '@/lib/services';
import { authorSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { authorFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Author" },
];

const Page = async () => {
  const data = await getAuthorList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={authorSchema}
            fields={authorFields}
            apiEndpoint={`${routes.CREATE_AUTHOR}`}
            title="Create Author"
            description="Add a new author"
          />
          <ViewAuthor data={data} />
        </div>
      </Sidebar>
    </>
  );
}

export default Page;
