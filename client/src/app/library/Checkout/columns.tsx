import { ColumnDef } from "@tanstack/react-table";
import { routes } from "@/lib/routePath";
import { checkoutSchema } from "@/lib/zodschema";
import { checkoutFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type Checkout = {
  id: string;
  book: string;
  member: string;
  due_date: string;
  returned: boolean;
};

export const columns: ColumnDef<Checkout>[] = [
  {
    accessorKey: "id",
    header: "Checkout ID",
  },
  {
    accessorKey: "book",
    header: "Book",
  },
  {
    accessorKey: "member",
    header: "Member",
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
  },
  {
    accessorKey: "returned",
    header: "Returned",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const checkout = row.original;

      const handleSuccess = () => {
        console.log("Checkout updated or deleted");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={checkoutSchema}
            fields={checkoutFields}
            apiEndpoint={`${routes.UPDATE_CHECKOUT}/${checkout.id}`}
            title="Update Checkout"
            description="Update checkout details"
          />
          <RetrieveDetail
            item={"checkout"}
            id={checkout.id}
            endpoint={`${routes.RETRIEVE_CHECKOUT}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={checkout.id}
            endpoint={`${routes.DELETE_CHECKOUT}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
