import React from 'react';
import Sidebar from '@/app/_component/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb';
import AddAnnuallySubjectSyllabusStatus from './AddAnnualSyllabus';
import ViewAnnuallySubjectSyllabusStatus from './ViewAnnualSyllabus';

const items = [
  { href: "/", label: "Home" },
  { href: "/annually-subject-syllabus-status", label: "Annually Subject Syllabus Status" },
];

const Page = async () => {
  const data = await getAnnuallySubjectSyllabusStatusList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          <AddAnnuallySubjectSyllabusStatus />
          <ViewAnnuallySubjectSyllabusStatus data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
function getAnnuallySubjectSyllabusStatusList() {
  throw new Error('Function not implemented.');
}

