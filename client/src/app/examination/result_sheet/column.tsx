import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { routes } from "@/lib/routePath";
import { resultSheetSchema } from "@/lib/zodschema";
import { resultSheetFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type ResultSheet = {
  result_sheet_id: string;
  student: string;
  result_data: object;
  total_marks_obtained: number;
  rank: number;
  created_at: string;
  updated_at: string;
};

export const columns: ColumnDef<ResultSheet>[] = [
  {
    accessorKey: "result_sheet_id",
    header: "Result Sheet ID",
  },
  {
    accessorKey: "student",
    header: "Student",
  },
  {
    accessorKey: "total_marks_obtained",
    header: "Total Marks Obtained",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const resultSheet = row.original;

      const handleSuccess = () => {
        console.log("ResultSheet deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={resultSheetSchema}
            fields={resultSheetFields}
            apiEndpoint={`${routes.UPDATE_RESULT_SHEET}/${resultSheet.result_sheet_id}`}
            title="Update ResultSheet"
            description="Update result sheet details"
          />
          <RetrieveDetail
            item={"resultsheet"}
            id={resultSheet.result_sheet_id}
            endpoint={`${routes.RETRIEVE_RESULT_SHEET}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={resultSheet.result_sheet_id}
            endpoint={`${routes.DELETE_RESULT_SHEET}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
