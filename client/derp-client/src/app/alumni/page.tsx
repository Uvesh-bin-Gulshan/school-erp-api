import React from "react";
import ViewAlumni from "./ViewAlumni";
import SideBar from "@/app/_component/SideBar";
import { BreadcrumbWithCustomSeparator } from "@/app/_component/BreadCrumb";
import { getAlumniList } from "@/lib/services";
import { alumniSchema } from "@/lib/zodschema";
import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import GenericAddForm from "../_component/GenericAddForm";
import { alumniFields } from "@/lib/fields";

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { label: "Alumni" },
];

const Page = async () => {
  const data = await getAlumniList();
  console.log(data);

  return (
    <>
      <SideBar breadcrumbs={items}>
        <div className="">
          <BreadcrumbWithCustomSeparator
            items={items}
            separator={<span> :: </span>}
          />
        </div>

        <div className="m-12 bg-white p-4 h-96">
          <GenericAddForm
            schema={alumniSchema}
            fields={alumniFields}
            apiEndpoint={`${routes.CREATE_ALUMNI}`}
            successMessage="Alumni added successfully"
            failureMessage="Failed to add alumni"
            dialogTitle="Add Alumni"
            dialogDescription="Add alumni details here"
          />
          <ViewAlumni data={data} />
        </div>
      </SideBar>
    </>
  );
};

export default Page;
