import { ColumnDef } from "@tanstack/react-table";
import { routes } from "@/lib/routePath";
import { categorySchema } from "@/lib/zodschema";
import { categoryFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type Category = {
  id: string;
  name: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "Category ID",
  },
  {
    accessorKey: "name",
    header: "Category Name",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const category = row.original;

      const handleSuccess = () => {
        console.log("Category updated or deleted");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={categorySchema}
            fields={categoryFields}
            apiEndpoint={`${routes.UPDATE_CATEGORY}/${category.id}`}
            title="Update Category"
            description="Update category details"
          />
          <RetrieveDetail
            item={"category"}
            id={category.id}
            endpoint={`${routes.RETRIEVE_CATEGORY}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={category.id}
            endpoint={`${routes.DELETE_CATEGORY}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
