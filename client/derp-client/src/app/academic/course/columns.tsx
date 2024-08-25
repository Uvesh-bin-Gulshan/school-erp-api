import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateDepartment from "./UpdateDepartment";
import { AiFillDelete } from "react-icons/ai";
import { DELETE_DEPARTMENT, RETRIEVE_COURSE } from "@/lib/routePath";
import DeleteButton from "@/app/_component/DeleteButton";
import RetrieveDetail from "@/app/_component/RetriveDetail";


export type Course = {
  course_id:string;
  name: string;
  department:string;
  effective_date:string
};

export const columns: ColumnDef<Course>[] = [
  {
    
    accessorKey: "course_id",
    header: ({ column }) => {

      return (
        <>
        
        <div className="">


        <span>Sr No.</span>
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
      
          <ArrowUpDown className="ml-0.5 h-4 w-4" />
        </Button>

        </div>
        </>
      )
    },
  },

  {
    accessorKey: "name",
    header: "Course Name",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const course = row.original; 
      
      const handleSuccess = () => {
        // handle successful deletion, e.g., refresh the table
        console.log("Department deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center  space-x-2">
          {/* <UpdateDepartment course={department} /> */}
          {/* <RetrieveDetail id={course.course_id} endpoint={`${RETRIEVE_COURSE}`} onSuccess={handleSuccess}/> */}
          <DeleteButton
            id={course.course_id} 
            endpoint={`${DELETE_DEPARTMENT}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
 
      
  
  

];