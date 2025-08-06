import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";

import { MdModeEdit } from "react-icons/md";
import { timetableFields } from "@/lib/fields";
import { routes } from "@/lib/routePath";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";
import GenericForm from "@/components/custom-components/GenericForm";
import { timeTableSchema } from "@/lib/zodschema";

export type TimeTable = {
  time_table_id: string;
  subject: string;
  teacher: string;
  time: string;
  effective_date: string;
};

export const columns: ColumnDef<TimeTable>[] = [
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <>
        <div className="">
          <span>Subject</span>
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
      const timetable = row.original;

      const handleSuccess = () => {
        console.log("TimeTable deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
          schema={timeTableSchema}
          fields={timetableFields}
          apiEndpoint={`${routes.UPDATE_TIMETABLE}/${timetable.time_table_id}`}
          title="Update TimeTable"
          description="Update timetable details here"
          />
          <RetrieveDetail
            item={"timetable"}
            id={timetable.time_table_id}
            endpoint={`${routes.RETRIEVE_TIMETABLE}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={timetable.time_table_id}
            endpoint={`${routes.DELETE_TIMETABLE}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
