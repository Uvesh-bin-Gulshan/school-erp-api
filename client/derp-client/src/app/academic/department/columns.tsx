import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateDepartment from "./UpdateDepartment";
import { AiFillDelete } from "react-icons/ai";
import { DELETE_DEPARTMENT, RETRIEVE_DEPARTMENT } from "@/lib/routePath";
import RetrieveDetail from "@/app/_component/RetriveDetail";
import DeleteButtom from "@/app/_component/DeleteButton";

export type Department = {
  department_id:string;
  name: string;
 


  

};

export const columns: ColumnDef<Department>[] = [
  {
    
    accessorKey: "department_id",
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
    header: "Department Name",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const department = row.original; 
      
      const handleSuccess = () => {
        // handle successful deletion, e.g., refresh the table
        console.log("Department deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center  space-x-3">
          <UpdateDepartment department={department} />
          <RetrieveDetail 
                 item={'department'}     id={department.department_id} 

            endpoint={`${RETRIEVE_DEPARTMENT}`}
            onSuccess={handleSuccess}/>
          <DeleteButtom 
            item={'department'}
            id={department.department_id} 
            endpoint={`${DELETE_DEPARTMENT}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
 
      
  
  

];