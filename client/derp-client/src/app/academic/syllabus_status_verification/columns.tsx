import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateSyllabusStatus from "./UpdateSyllabusStatus";
import { AiFillDelete } from "react-icons/ai";
import { DELETE_SYLLABUS_STATUS_VERIFICATION, RETRIEVE_SYLLABUS_STATUS_VERIFICATION } from "@/lib/routePath";
import RetrieveDetail from "../../_component/RetriveDetail";
import DeleteButton from "@/app/_component/DeleteButton";


export type SyllabusStatus = {
  id: string;
  month: string;
  status: string;
};

export const columns: ColumnDef<SyllabusStatus>[] = [
  {
    accessorKey: "month",
    header: ({ column }) => (
      <div className="">
        <span>Month</span>
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
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const syllabusStatus = row.original;

      const handleSuccess = () => {
        console.log("Syllabus status deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          {/* <RetrieveDetail id={syllabusStatus.id} endpoint={RETRIEVE_SYLLABUS_STATUS_VERIFICATION} onSuccess={handleSuccess} /> */}
          <DeleteButton id={syllabusStatus.id} endpoint={DELETE_SYLLABUS_STATUS_VERIFICATION} onSuccess={handleSuccess} item={""} />
        </div>
      );
    },
  },
];
