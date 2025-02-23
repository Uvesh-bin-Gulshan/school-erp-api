import React from 'react';
import ViewFingerRecord from './ViewFingerRecord';
import Sidebar from '@/components/custom-components/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/components/custom-components/BreadCrumb';
import { getFingerRecordList } from '@/lib/services';
import { fingerRecordSchema } from '@/lib/zodschema';
import { routes } from '@/lib/routePath';
import { fingerRecordFields } from '@/lib/fields';
import GenericForm from '@/components/custom-components/GenericForm';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "FingerRecord" },
];

const Page = async () => {
  const data = await getFingerRecordList();
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className=''>
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className='m-12 bg-white p-4 h-96'>
          <GenericForm
            schema={fingerRecordSchema}
            fields={fingerRecordFields}
            apiEndpoint={`${routes.CREATE_FINGER_RECORD}`}
            title="Create Finger Record"
            description="Add a new fingerprint record"
          />
          <ViewFingerRecord data={data} />
        </div>
      </Sidebar>
    </>
  );
}

export default Page;
