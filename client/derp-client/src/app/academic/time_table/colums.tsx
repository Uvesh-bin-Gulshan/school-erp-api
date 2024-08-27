import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateTimeTable from "./UpdateTimeTable";
import { AiFillDelete } from "react-icons/ai";
import DeleteButtom from "../_component/DeleteButtom";
import { DELETE_TIME_TABLE, RETRIEVE_TIME_TABLE } from "@/lib/routePath";
import RetrieveDetail from "../_component/RetriveDetail";

export type TimeTable = {
  time_table_id: string;
  subject: string;
  teacher: string;
  time: string;
  effective_date: string;
};

export const columns: ColumnDef<TimeTable>[] = [
  {
    accessorKey: "time_table_id",
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
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "teacher",
    header: "Teacher",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "effective_date",
    header: "Effective Date",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const timeTable = row.original;

      const handleSuccess = () => {
        console.log("TimeTable deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <RetrieveDetail 
            id={timeTable.time_table_id} 
            endpoint={`${RETRIEVE_TIME_TABLE}`}
            onSuccess={handleSuccess}
          />
          <DeleteButtom 
            id={timeTable.time_table_id} 
            endpoint={`${DELETE_TIME_TABLE}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
