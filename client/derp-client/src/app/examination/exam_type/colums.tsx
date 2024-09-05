import DeleteButton from "@/app/_component/DeleteButton";
import RetrieveDetail from "@/app/_component/RetriveDetail";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateExamType from "./UpdateExamType";

import { AiFillDelete } from "react-icons/ai";
import { DELETE_EXAMTYPE } from "@/lib/routePath";

export type ExamType = {
  exam_type_id: string;
  name: string;
  effective_date: string;
};

export const columns: ColumnDef<ExamType>[] = [
  {
    accessorKey: "name",
    header: "Exam Type Name",
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
        console.log("Exam Type deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          {/* <RetrieveDetail
            id={examType.exam_type_id}
            endpoint={`${RETRIEVE_EXAMTYPE}`}
            onSuccess={handleSuccess}
          /> */}
          <UpdateExamType examType={examType} />
          <DeleteButton
            id={examType.exam_type_id}
            endpoint={`${DELETE_EXAMTYPE}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
