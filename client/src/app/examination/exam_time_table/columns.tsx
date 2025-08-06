import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";

import { examTimeTableSchema } from "@/lib/zodschema";
import { examTimeTableFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import { routes } from "@/lib/routePath";
import DeleteButton from "@/components/custom-components/DeleteButton";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";

export type ExamTimeTable = {
  exam_time_table_id: string;
  exam_type: string;
  subject: string;
  total_marks: number;
  passing_marks: number;
  time: string;
};

export const columns: ColumnDef<ExamTimeTable>[] = [
  {
    accessorKey: "exam_type",
    header: "Exam Type",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "total_marks",
    header: "Total Marks",
  },
  {
    accessorKey: "passing_marks",
    header: "Passing Marks",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const examTimeTable = row.original;

      const handleSuccess = () => {
        console.log("ExamTimeTable deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={examTimeTableSchema}
            fields={examTimeTableFields}
            apiEndpoint={`${routes.UPDATE_EXAMTIMETABLE}/${examTimeTable.exam_time_table_id}`}
            title="Update ExamTimeTable"
            description="Update exam time table details"
          />
          <RetrieveDetail
            item={"exam_time_table"}
            id={examTimeTable.exam_time_table_id}
            endpoint={`${routes.RETRIEVE_EXAMTIMETABLE}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={examTimeTable.exam_time_table_id}
            endpoint={`${routes.DELETE_EXAMTIMETABLE}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
