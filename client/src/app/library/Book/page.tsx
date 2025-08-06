import React from 'react';
import ViewBook from './ViewBook';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getBookList } from '@/lib/services';
import { bookSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { bookFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Book" },
];

const Page = async () => {
  const data = await getBookList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={bookSchema}
            fields={bookFields}
            apiEndpoint={`${routes.CREATE_BOOK}`}
            title="Create Book"
            description="Add a new book"
          />
          <ViewBook data={data} />
        </div>
      </Sidebar>
    </>
  );
}

export default Page;
