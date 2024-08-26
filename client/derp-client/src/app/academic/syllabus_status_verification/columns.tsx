import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import UpdateSyllabusStatus from "./UpdateSyllabusStatus";
import { AiFillDelete } from "react-icons/ai";
import { DELETE_SYLLABUS_STATUS_VERIFICATION, RETRIEVE_SYLLABUS_STATUS_VERIFICATION } from "@/lib/routePath";
import RetrieveDetail from "@/app/_component/RetriveDetail";
import DeleteButton from "@/app/_component/DeleteButton";

export type SyllabusStatus = {
  status_verification_id: string;
  monthly_syllabus_approval: string;
  feedback: string;
  is_approved: boolean;
  approved_date: string;
};

export const columns: ColumnDef<SyllabusStatus>[] = [
  {
    accessorKey: "status_verification_id",
    header: "Verification ID",
  },
  {
    accessorKey: "monthly_syllabus_approval",
    header: "Monthly Syllabus Approval",
  },
  {
    accessorKey: "feedback",
    header: "Feedback",
  },
  {
    accessorKey: "is_approved",
    header: "Approved",
    cell: ({ row }) => (row.original.is_approved ? "Yes" : "No"),
  },
  {
    accessorKey: "approved_date",
    header: "Approved Date",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const syllabusStatus = row.original;

      const handleSuccess = () => {
        console.log("Syllabus status verification deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          {/* <RetrieveDetail 
            id={syllabusStatus.status_verification_id} 
            endpoint={`${RETRIEVE_SYLLABUS_STATUS_VERIFICATION}`}
            onSuccess={handleSuccess}
          /> */}
          <DeleteButton
            id={syllabusStatus.status_verification_id} 
            endpoint={`${DELETE_SYLLABUS_STATUS_VERIFICATION}`}
            onSuccess={handleSuccess}
          />
          <UpdateSyllabusStatus syllabusStatus={syllabusStatus} />
        </div>
      );
    },
  },
];
