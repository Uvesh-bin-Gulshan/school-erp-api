import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import DeleteButton from "@/components/custom-components/DeleteButton";
import { routes } from "@/lib/routePath";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import { MdModeEdit } from "react-icons/md";
import { studentSchema } from "@/lib/zodschema";
import { studentFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";

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
          <GenericForm
            schema={studentSchema}
            fields={studentFields}
            apiEndpoint={`${routes.UPDATE_STUDENT}/${student.student_id}`}
            title="Update Student"
            description="Update student details here"
          />
          <RetrieveDetail
            item={"student"}
            id={student.student_id}
            endpoint={`${routes.RETRIEVE_STUDENT}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={student.student_id}
            endpoint={`${routes.DELETE_STUDENT}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
