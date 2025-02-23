import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { routes } from "@/lib/routePath";
import { attendanceSchema } from "@/lib/zodschema";
import { attendanceFields } from "@/lib/fields";
import GenericForm from "@/components/custom-components/GenericForm";
import RetrieveDetail from "@/components/custom-components/RetriveDetail";
import DeleteButton from "@/components/custom-components/DeleteButton";

export type Attendance = {
  attendance_id: string;
  time_table: string;
  student: string;
  date: string;
  time: string;
  status: boolean;
};

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "attendance_id",
    header: "Attendance ID",
  },
  {
    accessorKey: "time_table",
    header: "Time Table",
  },
  {
    accessorKey: "student",
    header: "Student",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (row.original.status ? "Present" : "Absent"),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const attendance = row.original;

      const handleSuccess = () => {
        console.log("Attendance deleted, refresh the table or state");
      };

      return (
        <div className="flex items-center space-x-2">
          <GenericForm
            schema={attendanceSchema}
            fields={attendanceFields}
            apiEndpoint={`${routes.UPDATE_ATTENDANCE}/${attendance.attendance_id}`}
            title="Update Attendance"
            description="Update attendance details"
          />
          <RetrieveDetail
            item={"attendance"}
            id={attendance.attendance_id}
            endpoint={`${routes.RETRIEVE_ATTENDANCE}`}
            onSuccess={handleSuccess}
          />
          <DeleteButton
            id={attendance.attendance_id}
            endpoint={`${routes.DELETE_ATTENDANCE}`}
            onSuccess={handleSuccess}
          />
        </div>
      );
    },
  },
];
