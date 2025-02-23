import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { routes } from "@/lib/routePath";
import { markSheetSchema } from "@/lib/zodschema";
import { markSheetFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type MarkSheet = {
  mark_sheet_id: string;
  exam_detail: string;
  student: string;
  marks_obtained: number;
  result: string;
};

export const columns: ColumnDef<MarkSheet>[] = [
  {
    accessorKey: "exam_detail",
    header: "Exam Detail",
  },
  {
    accessorKey: "student",
    header: "Student",
  },
  {
    accessorKey: "marks_obtained",
    header: "Marks Obtained",
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const markSheet = row.original;

      const handleSuccess = () => {
        console.log("MarkSheet deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={markSheetSchema}
            fields={markSheetFields}
            apiEndpoint={`${routes.UPDATE_MARK_SHEET}/${markSheet.mark_sheet_id}`}
            title="Update MarkSheet"
            description="Update marksheet details"
          />
          <RetrieveDetail
            item={"mark_sheet"}
            id={markSheet.mark_sheet_id}
            endpoint={`${routes.RETRIEVE_MARK_SHEET}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={markSheet.mark_sheet_id}
            endpoint={`${routes.DELETE_MARK_SHEET}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
