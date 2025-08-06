import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { routes } from "@/lib/routePath";
import { fingerRecordSchema } from "@/lib/zodschema";
import { fingerRecordFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type FingerRecord = {
  record_id: string;
  student: string;
  fingerprint_data: string;
};

export const columns: ColumnDef<FingerRecord>[] = [
  {
    accessorKey: "record_id",
    header: "Record ID",
  },
  {
    accessorKey: "student",
    header: "Student",
  },
  {
    accessorKey: "fingerprint_data",
    header: "Fingerprint Data",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const record = row.original;

      const handleSuccess = () => {
        console.log("Finger record deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={fingerRecordSchema}
            fields={fingerRecordFields}
            apiEndpoint={`${routes.UPDATE_FINGER_RECORD}/${record.record_id}`}
            title="Update Finger Record"
            description="Update fingerprint record details"
          />
          <RetrieveDetail
            item={"fingerrecord"}
            id={record.record_id}
            endpoint={`${routes.RETRIEVE_FINGER_RECORD}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={record.record_id}
            endpoint={`${routes.DELETE_FINGER_RECORD}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
