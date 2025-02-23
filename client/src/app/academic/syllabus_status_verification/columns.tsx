import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import { routes } from "@/lib/routePath";
import { syllabusStatusSchema } from "@/lib/zodschema";
import { syllabusStatusFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import DeleteButton from "@/components/custom-components/DeleteButton";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";

export type SyllabusStatusVerification = {
  status_verification_id: string;
  feedback: string;
  is_approved: boolean;
  approved_date: string;
};

export const columns: ColumnDef<SyllabusStatusVerification>[] = [
  {
    accessorKey: "feedback",
    header: ({ column }) => (
      <>
        <div className="">
          <span>Feedback</span>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="ml-0.5 h-4 w-4" />
          </Button>
        </div>
      </>
    ),
  },
  {
    accessorKey: "is_approved",
    header: "Approved Status",
  },
  {
    accessorKey: "approved_date",
    header: "Approved Date",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const verification = row.original;

      const handleSuccess = () => {
        console.log("Verification status deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={syllabusStatusSchema}
            fields={syllabusStatusFields}
            apiEndpoint={`${routes.UPDATE_SYLLABUS_STATUS_VERIFICATION}/${verification.status_verification_id}`}
            title="Update Verification"
            description="Update verification details here"
          />
          <RetrieveDetail
            item={"verification"}
            id={verification.status_verification_id}
            endpoint={`${routes.RETRIEVE_SYLLABUS_STATUS_VERIFICATION}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={verification.status_verification_id}
            endpoint={`${routes.DELETE_SYLLABUS_STATUS_VERIFICATION}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
