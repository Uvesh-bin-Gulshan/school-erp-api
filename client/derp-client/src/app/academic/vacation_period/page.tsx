import React from 'react';
import ViewVacationPeriod from './ViewVacationPeriod';
import Sidebar from '@/app/_component/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb';
import { getVacationList } from '@/lib/services';
import { vacationSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { vacationFields } from '@/lib/fields';
import GenericForm from '../_component/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Vacation Periods" },
];

const Page = async () => {
  const data = await getVacationList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          <GenericForm
            schema={vacationSchema}
            fields={vacationFields}
            apiEndpoint={`${routes.CREATE_VACATION}`}
            title="Create Vacation Period"
            description="Create a new vacation period here"
          />
          <ViewVacationPeriod data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
