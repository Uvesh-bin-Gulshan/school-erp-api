import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateSyllabusType from "./UpdateSyllabusType";
import { AiFillDelete } from "react-icons/ai";
import DeleteButton from "../_component/DeleteButton";
import { DELETE_SYLLABUS_TYPE, RETRIEVE_SYLLABUS_TYPE } from "@/lib/routePath";
import RetrieveDetail from "../_component/RetriveDetail";

export type SyllabusType = {
  type_id: string;
  name: string;
};

export const columns: ColumnDef<SyllabusType>[] = [
  {
    accessorKey: "type_id",
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
    header: "Syllabus Type Name",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const syllabusType = row.original;

      const handleSuccess = () => {
        console.log("Syllabus Type deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <RetrieveDetail 
            id={syllabusType.type_id} 
            endpoint={`${RETRIEVE_SYLLABUS_TYPE}`}
            onSuccess={handleSuccess}
          />
          <DeleteButtom 
            id={syllabusType.type_id} 
            endpoint={`${DELETE_SYLLABUS_TYPE}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
