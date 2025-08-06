import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { annuallySubjectSyllabusStatusFields } from '@/lib/fields';
import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import GenericForm from "@/components/custom-components/GenericForm";
import { annuallySubjectSyllabusStatusSchema } from "@/lib/zodschema";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type AnnuallySubjectSyllabusStatus = {
  annual_status_id: string;
  subject: string;
  teacher: string;
  yearly_status: number;
  yearly_summary: string;
};

export const columns: ColumnDef<AnnuallySubjectSyllabusStatus>[] = [
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <>
        <span>Subject</span>
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown className="ml-0.5 h-4 w-4" />
        </Button>
      </>
    ),
  },
  {
    accessorKey: "teacher",
    header: "Teacher",
  },
  {
    accessorKey: "yearly_status",
    header: "Yearly Status",
  },
  {
    accessorKey: "yearly_summary",
    header: "Yearly Summary",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const status = row.original;

      const handleSuccess = () => {
        console.log("Status deleted, refresh the table");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={annuallySubjectSyllabusStatusSchema}
            fields={annuallySubjectSyllabusStatusFields}
            apiEndpoint={`${routes.ANNUALLY_SUBJECT_SYLLABUS_STATUS_LIST}/${status.annual_status_id}`}
            title="Update Annually Subject Syllabus Status"
            description="Update syllabus status details here"
          />
          <DeleteButton
            id={status.annual_status_id}
            endpoint={`${routes.DELETE_ANNUALLY_SUBJECT_SYLLABUS_STATUS}/${status.annual_status_id}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
