import React from 'react';
import Sidebar from '@/app/_component/SideBar';
import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb';
import { getCourseList } from '@/lib/services';
import AddCourse from './AddCourse';
import ViewCourse from './ViewCourse';

const items = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
];

const Page = async () => {
  const data = await getCourseList();

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          <AddCourse />
          <ViewCourse data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
