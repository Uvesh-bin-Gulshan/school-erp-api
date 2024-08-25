import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateSyllabus from "./UpdateSyllabus";
import { AiFillDelete } from "react-icons/ai";
import DeleteButton from "../_component/DeleteButton";
import { DELETE_SYLLABUS, RETRIEVE_SYLLABUS } from "@/lib/routePath";
import RetrieveDetail from "../_component/RetrieveDetail";

export type Syllabus = {
  syllabus_id: string;
  title: string;
  description: string;
  effective_date: string;
};

export const columns: ColumnDef<Syllabus>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <>
        <div className="">
          <span>Title</span>
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
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const syllabus = row.original;

      const handleSuccess = () => {
        // handle successful deletion, e.g., refresh the table
        console.log("Syllabus deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <RetrieveDetail
            id={syllabus.syllabus_id}
            endpoint={`${RETRIEVE_SYLLABUS}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={syllabus.syllabus_id}
            endpoint={`${DELETE_SYLLABUS}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
