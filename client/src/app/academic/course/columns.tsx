import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { courseFields } from '@/lib/fields';
import { routes } from "@/lib/routePath";
import { MdModeEdit } from "react-icons/md";
import DeleteButton from "@/components/custom-components/DeleteButton";
import GenericForm from "@/components/custom-components/GenericForm";
import { courseSchema } from "@/lib/zodschema";

export type Course = {
  course_id: string;
  name: string;
  department: string;
  effective_date: string;
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <span>Course Name</span>
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <ArrowUpDown className="ml-0.5 h-4 w-4" />
        </Button>
      </>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "effective_date",
    header: "Effective Date",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const course = row.original;

      const handleSuccess = () => {
        console.log("Course deleted, refresh the table");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={courseSchema}
            fields={courseFields}
            apiEndpoint={`${routes.UPDATE_COURSE}/${course.course_id}`}          
            title="Update Course"
            description="Update course details here"
          />
          <DeleteButton
            id={course.course_id}
            endpoint={`${routes.DELETE_COURSE}/${course.course_id}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
