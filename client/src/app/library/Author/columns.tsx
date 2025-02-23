import { ColumnDef } from "@tanstack/react-table";
import { routes } from "@/lib/routePath";
import { authorSchema } from "@/lib/zodschema";
import { authorFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type Author = {
  Author_id: string;
  first_name: string;
  last_name: string;
  short_bio: string;
  date_of_birth: string | null;
  date_of_death: string | null;
};

export const columns: ColumnDef<Author>[] = [
  {
    accessorKey: "Author_id",
    header: "Author ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "short_bio",
    header: "Short Bio",
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of Birth",
  },
  {
    accessorKey: "date_of_death",
    header: "Date of Death",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const author = row.original;

      const handleSuccess = () => {
        console.log("Author deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={authorSchema}
            fields={authorFields}
            apiEndpoint={`${routes.UPDATE_AUTHOR}/${author.Author_id}`}
            title="Update Author"
            description="Update author details"
          />
          <RetrieveDetail
            item={"author"}
            id={author.Author_id}
            endpoint={`${routes.RETRIEVE_AUTHOR}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={author.Author_id}
            endpoint={`${routes.DELETE_AUTHOR}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
