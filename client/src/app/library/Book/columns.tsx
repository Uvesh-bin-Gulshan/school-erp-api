import { ColumnDef } from "@tanstack/react-table";
import { routes } from "@/lib/routePath";
import { bookSchema } from "@/lib/zodschema";
import { bookFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
};

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "Book ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const book = row.original;

      const handleSuccess = () => {
        console.log("Book updated or deleted");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={bookSchema}
            fields={bookFields}
            apiEndpoint={`${routes.UPDATE_BOOK}/${book.id}`}
            title="Update Book"
            description="Update book details"
          />
          <RetrieveDetail
            item={"book"}
            id={book.id}
            endpoint={`${routes.RETRIEVE_BOOK}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={book.id}
            endpoint={`${routes.DELETE_BOOK}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
