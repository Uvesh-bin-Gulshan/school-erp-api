import React from "react";
import ViewAlumni from "./ViewAlumni";
import SideBar from "@/components/custom-components/SideBar";
import { BreadcrumbWithCustomSeparator } from "@/components/custom-components/BreadCrumb";
import { getAlumniList } from "@/lib/services";
import { alumniSchema } from "@/lib/zodschema";
import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import { alumniFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";

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
          <GenericForm
            schema={alumniSchema}
            fields={alumniFields}
            apiEndpoint={`${routes.CREATE_ALUMNI}`}
            title="Add Alumni"
            description="Add alumni details here"
          />
          <ViewAlumni data={data} />
        </div>
      </SideBar>
    </>
  );
};

export default Page;
