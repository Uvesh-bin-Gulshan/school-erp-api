import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateStudent from "./UpdateStudent";
import { AiFillDelete } from "react-icons/ai";
import DeleteButton from "../_component/DeleteButton";
import { DELETE_STUDENT, RETRIEVE_STUDENT } from "@/lib/routePath";
import RetrieveDetail from "../_component/RetrieveDetail";

export type Student = {
  student_id: string;
  name: string;
  age: number;
  grade: string;
};

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <div className="">
          <span>Name</span>
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
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const student = row.original;

      const handleSuccess = () => {
        // handle successful deletion, e.g., refresh the table
        console.log("Student deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <RetrieveDetail
            id={student.student_id}
            endpoint={`${RETRIEVE_STUDENT}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={student.student_id}
            endpoint={`${DELETE_STUDENT}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
