import React from 'react';
import ViewCategory from './ViewCategory';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getCategoryList } from '@/lib/services';
import { categorySchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { categoryFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Category" },
];

const Page = async () => {
  const data = await getCategoryList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={categorySchema}
            fields={categoryFields}
            apiEndpoint={`${routes.CREATE_CATEGORY}`}
            title="Create Category"
            description="Add a new book category"
          />
          <ViewCategory data={data} />
        </div>
      </Sidebar>
    </>
  );
}

export default Page;
