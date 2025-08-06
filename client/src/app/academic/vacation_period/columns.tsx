import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import { vacationSchema } from "@/lib/zodschema";
import { vacationFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type VacationPeriod = {
  vacation_id: string;
  name: string;
  start_date: string;
  end_date: string;
  description: string;
};

export const columns: ColumnDef<VacationPeriod>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <div className="">
          <span>Vacation Name</span>
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
    accessorKey: "start_date",
    header: "Start Date",
  },
  {
    accessorKey: "end_date",
    header: "End Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const vacation = row.original;

      const handleSuccess = () => {
        console.log("Vacation period deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={vacationSchema}
            fields={vacationFields}
            apiEndpoint={`${routes.UPDATE_VACATION_PERIOD}/${vacation.vacation_id}`}
            title="Update Vacation Period"
            description="Update vacation period details here"
          />
          <RetrieveDetail
            item={"vacation period"}
            id={vacation.vacation_id}
            endpoint={`${routes.RETRIEVE_VACATION_PERIOD}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={vacation.vacation_id}
            endpoint={`${routes.DELETE_VACATION_PERIOD}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
