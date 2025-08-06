import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import DeleteButton from "@/components/custom-components/DeleteButton";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import GenericUpdateForm from "@/components/custom-components/GenericForm";
import { MdModeEdit } from "react-icons/md";
import { alumniSchema } from "@/lib/zodschema";
import { alumniFields } from "@/lib/fields";
import { routes } from "@/lib/routePath";

export type Alumni = {
  alumni_id: string;
  student: string;
  occupation: string;
  work_place: string;
  residence: string;
};

export const columns: ColumnDef<Alumni>[] = [
  {
    accessorKey: "student",
    header: ({ column }) => (
      <>
        <div className="">
          <span>Student</span>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="ml-0.5 h-4 w-4" />
          </Button>
        </div>
      </>
    ),
  },
  {
    accessorKey: "occupation",
    header: "Occupation",
  },
  {
    accessorKey: "work_place",
    header: "Work Place",
  },
  {
    accessorKey: "residence",
    header: "Residence",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const alumni = row.original;

      const handleSuccess = () => {
        console.log("Alumni record updated or deleted, refresh table");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericUpdateForm
            schema={alumniSchema}
            fields={alumniFields}
            apiEndpoint={`${routes.UPDATE_ALUMNI}/${alumni.alumni_id}`}            
            title="Update Alumni"
            description="Update alumni details here"
          />
          <RetrieveDetail
            item="alumni"
            id={alumni.alumni_id}
            endpoint={`${routes.RETRIEVE_ALUMNI}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={alumni.alumni_id}
            endpoint={`${routes.DELETE_ALUMNI}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
