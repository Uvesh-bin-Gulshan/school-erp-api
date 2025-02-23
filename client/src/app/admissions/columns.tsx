import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateAdmission from "./AdmisionForm/update_admission/UpdateAdmission";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { routes } from "@/lib/routePath";
import DeleteButton from "@/components/custom-components/DeleteButton";
import Profile from "@/components/custom-components/Profile";

export type Admission = {
  id: number;
  admission_id: string;
  student_name: string;
  guardian_name: string;
  profile_image: string;
  date_of_birth: string;
  state: string;
  district: string;
  locality: string;
  pincode: string;
  mobile_number: string;
  addhar_number: string;
  previous_result_status: string;
  admission_status: string;
  previous_institution: string;
  previous_education: string;
  worldly_studies: string;
  lc_given: boolean;
  donation: boolean;
  donation_amount: string;
  require_donation: boolean;
  created_at: string;
  updated_at: string;
  date_of_admission: string;
  applied_for: number;
};

export const columns: ColumnDef<Admission>[] = [
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
    accessorKey: "admission_id",
    header: "Admission ID",
  },
  {
    accessorKey: "student_name",
    header: "Student Name",
  },
  {
    accessorKey: "guardian_name",
    header: "Guardian Name",
  },
  {
    accessorKey: "profile_image",
    header: "Profile Image",
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of Birth",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "district",
    header: "District",
  },
  {
    accessorKey: "locality",
    header: "Locality",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const admissionData = row.original; 
      
      const handleSuccess = () => {
        // handle successful deletion, e.g., refresh the table
        console.log("Department deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center  space-x-3">
          <Link href={{
    pathname: "../admissions/AdmisionForm/update_admission",
    query: { id: admissionData.admission_id }, // pass the admission ID
  }}  >  <MdModeEdit /></Link>
{/* <RetrieveDetail 
  item={'admission'}    
  id={admissionData.admission_id} 
  endpoint={`${routes.RETRIEVE_ADMISSION}`}
  onSuccess={handleSuccess}
/> */}


    <Profile
     id={admissionData.admission_id} 
     endpoint={`${routes.RETRIEVE_ADMISSION}`}
      title="Student Profile"
      basic_info={''}
      other_info={''}
    />




          <DeleteButton
            item={'department'}
            id={admissionData.admission_id} 
            endpoint={`${routes.DELETE_ADMISSION}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },

];