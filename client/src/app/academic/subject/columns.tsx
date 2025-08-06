import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";

import { subjectFields } from '@/lib/fields';
import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import GenericUpdateForm from "@/components/custom-components/GenericForm";
import DeleteButton from "@/components/custom-components/DeleteButton";
import GenericForm from "@/components/custom-components/GenericForm";
import { subjectSchema } from "@/lib/zodschema";

export type Subject = {
  subject_id: string;
  name: string;
  syllabus_count: number;
  syllabus_type: string;
  description: string;
  course: string;
};

export const columns: ColumnDef<Subject>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <span>Subject Name</span>
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown className="ml-0.5 h-4 w-4" />
        </Button>
      </>
    ),
  },
  {
    accessorKey: "syllabus_count",
    header: "Syllabus Count",
  },
  {
    accessorKey: "syllabus_type",
    header: "Syllabus Type",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const subject = row.original;

      const handleSuccess = () => {
        console.log("Subject deleted, refresh the table");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={subjectSchema}
            apiEndpoint={routes.CREATE_SUBJECT}
            fields={subjectFields}            
            title="Update Subject"
            description="Update subject details here"
          />
          <DeleteButton
            id={subject.subject_id}
            endpoint={`${routes.DELETE_SUBJECT}/${subject.subject_id}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
