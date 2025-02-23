import React from 'react';
import ViewCheckout from './ViewCheckout';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getCheckoutList } from '@/lib/services';
import { checkoutSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { checkoutFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Checkout" },
];

const Page = async () => {
  const data = await getCheckoutList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={checkoutSchema}
            fields={checkoutFields}
            apiEndpoint={`${routes.CREATE_CHECKOUT}`}
            title="Create Checkout"
            description="Add a new checkout"
          />
          <ViewCheckout data={data} />
        </div>
      </Sidebar>
    </>
  );
}

export default Page;
