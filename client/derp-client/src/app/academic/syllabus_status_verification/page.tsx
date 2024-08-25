import React from "react";
import ViewSyllabusStatus from "./ViewSyllabusStatus";
import AddSyllabusStatus from "./AddSyllabusStatus";
import { BreadcrumbWithCustomSeparator } from "@/app/_component/BreadCrumb";
import SideBar from "@/app/_component/SideBar";

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Syllabus Status" },
];

const Page = async () => {
  const data = await getSyllabusStatusList();
  console.log(data);
  return (
    <>
      <SideBar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          <AddSyllabusStatus />
          <ViewSyllabusStatus data={data} />
        </div>
      </SideBar>
    </>
  );
};

export default Page;
function getSyllabusStatusList() {
  throw new Error("Function not implemented.");
}

