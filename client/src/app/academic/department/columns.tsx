import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { routes } from "@/lib/routePath";
import { departmentSchema } from '@/lib/zodschema';
import { departmentFields } from '@/lib/fields';
import GenericUpdateForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type Department = {
  department_id: string;
  name: string;
};

export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <div className="">
        <span>Department Name</span>
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="ml-0.5 h-4 w-4" />
        </Button>
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const department = row.original;
      const handleSuccess = () => console.log("Department deleted, refresh the table");

      return (
        <div className="flex items-center space-x-2">
          <GenericUpdateForm
            schema={departmentSchema}
            fields={departmentFields}
            apiEndpoint={`${routes.UPDATE_DEPARTMENT}/${department.department_id}`}          
            title="Update Department"
            description="Update department details here"
          />
          <RetrieveDetail
            item={"department"}
            id={department.department_id}
            endpoint={`${routes.RETRIEVE_DEPARTMENT}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={department.department_id}
            endpoint={`${routes.DELETE_DEPARTMENT}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
