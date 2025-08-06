import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { monthlySubjectSyllabusStatusFields } from '@/lib/fields';
import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import GenericUpdateForm from "@/components/custom-components/GenericForm";
import DeleteButton from "@/components/custom-components/DeleteButton";
import GenericForm from "@/components/custom-components/GenericForm";
import { monthlySubjectSyllabusStatusSchema } from "@/lib/zodschema";

export type MonthlySubjectSyllabusStatus = {
  month_status_id: string;
  month: string;
  annual_status: string;
  target_type: string;
  count: number;
  monthly_summary: string;
};

export const columns: ColumnDef<MonthlySubjectSyllabusStatus>[] = [
  {
    accessorKey: "month",
    header: ({ column }) => (
      <>
        <span>Month</span>
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown className="ml-0.5 h-4 w-4" />
        </Button>
      </>
    ),
  },
  {
    accessorKey: "annual_status",
    header: "Annual Status",
  },
  {
    accessorKey: "target_type",
    header: "Target Type",
  },
  {
    accessorKey: "count",
    header: "Count",
  },
  {
    accessorKey: "monthly_summary",
    header: "Monthly Summary",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const syllabusStatus = row.original;

      const handleSuccess = () => {
        console.log("Syllabus status deleted, refresh the table");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={monthlySubjectSyllabusStatusSchema}
            fields={monthlySubjectSyllabusStatusFields}
            apiEndpoint={`${routes.UPDATE_MONTHLY_SYLLABUS_STATUS}/${syllabusStatus.month_status_id}`}
            title="Update Monthly Syllabus Status"
            description="Update syllabus status details here"
          />
          <DeleteButton
            id={syllabusStatus.month_status_id}
            endpoint={`${routes.DELETE_MONTHLY_SYLLABUS_STATUS}/${syllabusStatus.month_status_id}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
