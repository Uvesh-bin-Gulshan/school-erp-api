import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";

import { MdModeEdit } from "react-icons/md";
import { examTypeSchema } from "@/lib/zodschema";
import { examTypeFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import { routes } from "@/lib/routePath";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type ExamType = {
  exam_type_id: string;
  name: string;
  effective_date: string;
};

export const columns: ColumnDef<ExamType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <div className="">
          <span>Exam Type Name</span>
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
    accessorKey: "effective_date",
    header: "Effective Date",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const examType = row.original;

      const handleSuccess = () => {
        console.log("Exam type deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={examTypeSchema}
            fields={examTypeFields}
            apiEndpoint={`${routes.UPDATE_EXAMTYPE}/${examType.exam_type_id}`}
            title="Update Exam Type"
            description="Update exam type details here"
          />
          <RetrieveDetail
            item={"exam type"}
            id={examType.exam_type_id}
            endpoint={`${routes.RETRIEVE_EXAMTYPE}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={examType.exam_type_id}
            endpoint={`${routes.DELETE_EXAMTYPE}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
