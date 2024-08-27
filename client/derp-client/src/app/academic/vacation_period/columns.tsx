import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

import UpdateVacationPeriod from "./UpdateVacationPeriod";
import { AiFillDelete } from "react-icons/ai";
import DeleteButton from "../_component/DeleteButton";
import { DELETE_VACATION_PERIOD, RETRIEVE_VACATION_PERIOD } from "@/lib/routePath";

export type VacationPeriod = {
  vacation_id: string;
  name: string;
  start_date: string;
  end_date: string;
  description?: string;
};

export const columns: ColumnDef<VacationPeriod>[] = [
  {
    accessorKey: "vacation_id",
    header: ({ column }) => (
      <div className="flex items-center">
        <span>ID</span>
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
    accessorKey: "name",
    header: "Vacation Name",
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
      const vacationPeriod = row.original;

      const handleSuccess = () => {
        console.log("Vacation Period deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <RetrieveDetail 
            id={vacationPeriod.vacation_id} 
            endpoint={`${RETRIEVE_VACATION_PERIOD}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={vacationPeriod.vacation_id} 
            endpoint={`${DELETE_VACATION_PERIOD}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
