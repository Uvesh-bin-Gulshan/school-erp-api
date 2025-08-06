import { ColumnDef } from "@tanstack/react-table";
import { hallTicketSchema } from "@/lib/zodschema";
import { hallTicketFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";
import { routes } from "@/lib/routePath";

export type HallTicket = {
  hall_ticket_number: string;
  exam_time_table: string;
  student: string;
};

export const columns: ColumnDef<HallTicket>[] = [
  {
    accessorKey: "hall_ticket_number",
    header: "Hall Ticket Number",
  },
  {
    accessorKey: "exam_time_table",
    header: "Exam Time Table",
  },
  {
    accessorKey: "student",
    header: "Student",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const hallTicket = row.original;

      const handleSuccess = () => {
        console.log("HallTicket deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={hallTicketSchema}
            fields={hallTicketFields}
            apiEndpoint={`${routes.UPDATE_HALLTICKET}/${hallTicket.hall_ticket_number}`}
            title="Update HallTicket"
            description="Update hall ticket details"
          />
          <RetrieveDetail
            item={"hall_ticket"}
            id={hallTicket.hall_ticket_number}
            endpoint={`${routes.RETRIEVE_HALLTICKET}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={hallTicket.hall_ticket_number}
            endpoint={`${routes.DELETE_HALLTICKET}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
