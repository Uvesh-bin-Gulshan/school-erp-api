import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";

import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import GenericUpdateForm from "@/components/custom-components/GenericForm";
import DeleteButton from "@/components/custom-components/DeleteButton";
import { syllabusTypeFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import { syllabusTypeSchema } from "@/lib/zodschema";

export type SyllabusType = {
  type_id: string;
  name: string;
};

export const columns: ColumnDef<SyllabusType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <span>Syllabus Type Name</span>
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown className="ml-0.5 h-4 w-4" />
        </Button>
      </>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const syllabusType = row.original;

      const handleSuccess = () => {
        console.log("Syllabus Type deleted, refresh the table");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={syllabusTypeSchema}
            fields={syllabusTypeFields}
            apiEndpoint={`${routes.UPDATE_SYLLABUS_TYPE}/${syllabusType.type_id}`}            
            title="Update Syllabus Type"
            description="Update Syllabus Type details here"
          />
          <DeleteButton
            id={syllabusType.type_id}
            endpoint={`${routes.DELETE_SYLLABUS_TYPE}/${syllabusType.type_id}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
