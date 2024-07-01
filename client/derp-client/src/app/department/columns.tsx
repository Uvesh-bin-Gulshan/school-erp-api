import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateDepartment from "./UpdateDepartment";

export type Department = {
  name: string;
 

};

export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "Name",
    header: "Department Name",
  },
  {
accessorKey:"Action",
header: "Action",
cell: ({ row }) => {
  const department = row.original; 
  console.log(department)
  return <UpdateDepartment department={department} />;
},
  },
  
  
  

];