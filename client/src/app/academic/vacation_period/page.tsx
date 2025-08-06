import React from 'react';
import ViewVacationPeriod from './ViewVacationPeriod';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { vacationSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { vacationFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';
import { getVacationPeriodList } from '@/lib/services';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Vacation Periods" },
];

const Page = async () => {
  const data = await getVacationPeriodList();

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
            apiEndpoint={`${routes.CREATE_VACATION_PERIOD}`}
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
