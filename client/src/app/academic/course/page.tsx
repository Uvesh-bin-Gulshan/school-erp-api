import React from "react";
import Sidebar from "@/components/custom-components/SideBar";
import { BreadcrumbWithCustomSeparator } from "@/components/custom-components/BreadCrumb";
import { getCourseList } from "@/lib/services";
import ViewCourse from "./ViewCourse";
// import GenericAddForm from "@/components/custom-components/GenericAddForm";
import { courseSchema } from "@/lib/zodschema";
import { courseFields } from "@/lib/fields";
import { routes } from "@/lib/routePath";

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
          <BreadcrumbWithCustomSeparator
            items={items}
            separator={<span> :: </span>}
          />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          {/* <GenericAddForm
            schema={courseSchema}
            fields={courseFields}
            apiEndpoint={routes.CREATE_COURSE}
            successMessage="Course added successfully"
            failureMessage="Failed to add course"
            dialogTitle="Add New Course"
            dialogDescription="Fill in the details to add a new course."
          /> */}
          <ViewCourse data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
