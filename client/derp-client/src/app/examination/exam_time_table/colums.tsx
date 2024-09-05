// // src/components/ExamTimeTable/columns.tsx

// import { Button } from "@/components/ui/button";
// import { ColumnDef } from "@tanstack/react-table";
// import { ArrowUpDown } from "lucide-react";
// import UpdateExamTimeTable from "./UpdateExamTimeTable";
// import DeleteButton from "../_component/DeleteButton";
// import { DELETE_EXAMTIMETABLE, RETRIEVE_EXAMTIMETABLE } from "@/lib/routePath";
// import RetrieveDetail from "../_component/RetrieveDetail";

// export type ExamTimeTable = {
//   exam_time_table_id: string;
//   exam_type: {
//     exam_type_id: string;
//     name: string;
//   };
//   subject: {
//     student_id: string;
//     name: string;
//   };
//   total_marks: number;
//   passing_marks: number;
//   time: string;
// };

// export const columns: ColumnDef<ExamTimeTable>[] = [
//   {
//     accessorKey: "exam_time_table_id",
//     header: ({ column }) => (
//       <div className="flex items-center">
//         <span>ID</span>
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           <ArrowUpDown className="ml-0.5 h-4 w-4" />
//         </Button>
//       </div>
//     ),
//   },
//   {
//     accessorKey: "exam_type.name",
//     header: "Exam Type",
//     cell: ({ row }) => row.original.exam_type.name,
//   },
//   {
//     accessorKey: "subject.name",
//     header: "Subject",
//     cell: ({ row }) => row.original.subject.name,
//   },
//   {
//     accessorKey: "total_marks",
//     header: "Total Marks",
//   },
//   {
//     accessorKey: "passing_marks",
//     header: "Passing Marks",
//   },
//   {
//     accessorKey: "time",
//     header: "Time",
//   },
//   {
//     accessorKey: "action",
//     header: "Action",
//     cell: ({ row }) => {
//       const examTimeTable = row.original;

//       const handleSuccess = () => {
//         console.log("Exam Time Table deleted or updated, refresh the table or state");
//       };

//       return (
//         <div className="flex items-center space-x-2">
//           <RetrieveDetail
//             id={examTimeTable.exam_time_table_id}
//             endpoint={`${RETRIEVE_EXAMTIMETABLE}`}
//             onSuccess={handleSuccess}
//           />
//           <UpdateExamTimeTable examTimeTable={examTimeTable} />
//           <DeleteButton
//             id={examTimeTable.exam_time_table_id}
//             endpoint={`${DELETE_EXAMTIMETABLE}`}
//             onSuccess={handleSuccess}
//           />
//         </div>
//       );
//     },
//   },
// ];
