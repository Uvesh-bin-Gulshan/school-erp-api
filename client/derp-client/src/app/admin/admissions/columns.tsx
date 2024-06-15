import { ColumnDef } from "@tanstack/react-table";

export type Admission = {
  id: number;
  admission_id: string;
  student_name: string;
  guardian_name: string;
  profile_image: string;
  date_of_birth: string;
  state: string;
  district: string;
  locality: string;
  pincode: string;
  mobile_number: string;
  addhar_number: string;
  previous_result_status: string;
  admission_status: string;
  previous_institution: string;
  previous_education: string;
  worldly_studies: string;
  lc_given: boolean;
  donation: boolean;
  donation_amount: string;
  require_donation: boolean;
  created_at: string;
  updated_at: string;
  date_of_admission: string;
  applied_for: number;
};

export const columns: ColumnDef<Admission>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "admission_id",
    header: "Admission ID",
  },
  {
    accessorKey: "student_name",
    header: "Student Name",
  },
  {
    accessorKey: "guardian_name",
    header: "Guardian Name",
  },
  {
    accessorKey: "profile_image",
    header: "Profile Image",
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of Birth",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "district",
    header: "District",
  },
  {
    accessorKey: "locality",
    header: "Locality",
  },
  // {
  //   accessorKey: "pincode",
  //   header: "Pincode",
  // },
  // {
  //   accessorKey: "mobile_number",
  //   header: "Mobile Number",
  // },
  // {
  //   accessorKey: "addhar_number",
  //   header: "Aadhar Number",
  // },
  // {
  //   accessorKey: "previous_result_status",
  //   header: "Previous Result Status",
  // },
  // {
  //   accessorKey: "admission_status",
  //   header: "Admission Status",
  // },
  // {
  //   accessorKey: "previous_institution",
  //   header: "Previous Institution",
  // },
  // {
  //   accessorKey: "previous_education",
  //   header: "Previous Education",
  // },
  // {
  //   accessorKey: "worldly_studies",
  //   header: "Worldly Studies",
  // },
  // {
  //   accessorKey: "lc_given",
  //   header: "LC Given",
  // },
  // {
  //   accessorKey: "donation",
  //   header: "Donation",
  // },
  // {
  //   accessorKey: "donation_amount",
  //   header: "Donation Amount",
  // },
  // {
  //   accessorKey: "require_donation",
  //   header: "Require Donation",
  // },
  // {
  //   accessorKey: "created_at",
  //   header: "Created At",
  // },
  // {
  //   accessorKey: "updated_at",
  //   header: "Updated At",
  // },
  // {
  //   accessorKey: "date_of_admission",
  //   header: "Date of Admission",
  // },
  // {
  //   accessorKey: "applied_for",
  //   header: "Applied For",
  // },
];