//make schema for client validatiion
import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, {
    message: "username must be at least 3 characters",
  }),
  password: z.string().min(8, {
    message: "password must be at least 3 characters",
  }),
});

export const departmentSchema = z.object({
  name: z.string().min(3, {
    message: "department name must be at least 3 characters",
  }),
});

// const personalInfoSchema = z.object({
//   student_name: z.string().min(1, "Required"),
//   father_name: z.string().min(1, "Required"),
//   date_of_birth: z.string().min(1, "Required"),
// });

// const addressInfoSchema = z.object({
//   state: z.string().min(1, "Required"),
//   district: z.string().min(1, "Required"),
//   locality: z.string().min(1, "Required"),
//   pincode: z.string().min(1, "Required"),
// });

// const previousEducationSchema = z.object({
//   previous_institution: z.string().min(1, "Required"),
//   previous_education: z.string().min(1, "Required"),
//   school_education: z.string().min(1, "Required"),
//   previous_result_status: z.string().min(1, "Required"),
// });

// const applicationDetailsSchema = z.object({
//   applied_for: z.string().min(1, "Required"),
//   lc_given: z.boolean(),
//   pay_fees: z.boolean(),
//   fees_amount: z.string().min(1, "Required"),
// });

// // Combine these into a step-based schema that you can use later
// export const admissionSchema = z.object({
//   ...personalInfoSchema.shape,
//   ...addressInfoSchema.shape,
//   ...previousEducationSchema.shape,
//   ...applicationDetailsSchema.shape,
// });

export const admissionSchema = z.object({
  student_name: z.string().nonempty("Student name is required"),
  father_name: z.string().nonempty("Father name is required"),
  date_of_birth: z.string().nonempty("Date of birth is required"),
  profile_image: z.instanceof(File).nullable(), // Allowing File or null
  state: z.string().nonempty("State is required"),
  district: z.string().nonempty("District is required"),
  locality: z.string().nonempty("Locality is required"),
  pincode: z.string().nonempty("Pincode is required"),
  mobile_number: z.string().nonempty("Mobile number is required"),
  aadhar_number: z.string().nonempty("Aadhar number is required"),
  previous_institution: z.string().nonempty("Previous institution is required"),
  previous_education: z.string().nonempty("Previous education is required"),
  school_education: z.string().nonempty("School education is required"),
  previous_result_status: z.enum(["pass", "fail"]).default("pass"),
  applied_for: z.string().nonempty("Applied for is required"),
  lc_given: z.boolean().default(false),
  pay_fees: z.boolean().default(false),
  fees_amount: z.string().nonempty("Fees amount is required"),
  required_donation: z.boolean().default(false),
  admission_status: z
    .enum(["pending", "accepted", "rejected"])
    .default("pending"),
});

// subject
export const subjectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  syllabus_count: z.number().min(0, "Syllabus count must be a positive number"),
  syllabus_type: z.string().min(1, "Syllabus type is required"),
  description: z.string().optional(),
  course: z.string().min(1, "Course is required"),
});

// Define the schema for SyllabusStatusVerification
export const syllabusStatusSchema = z.object({
  feedback: z.string().max(300, "Feedback cannot exceed 300 characters"),
  is_approved: z.boolean(),
  approved_date: z.string(),
});

// annual subject syllabus status
export const annuallySubjectSyllabusStatusSchema = z.object({
  annual_status_id: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required" }),
  teacher: z.string().min(1, { message: "Teacher is required" }),
  yearly_status: z
    .number()
    .min(0, { message: "Yearly status must be a number" }),
  yearly_summary: z.string().min(1, { message: "Yearly summary is required" }),
});

// monthlySubjectSyllabusStatusSchema
export const monthlySubjectSyllabusStatusSchema = z.object({
  month_status_id: z.string().optional(),
  month: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" }),
  annual_status: z.string().min(1, { message: "Annual status is required" }),
  target_type: z.string().min(1, { message: "Target type is required" }),
  count: z.number().min(0, { message: "Count must be a positive number" }),
  monthly_summary: z
    .string()
    .max(300, { message: "Summary must be less than 300 characters" }),
});

export const SyllabusTypeSchema = z.object({
  type_id: z.string().max(6),
  name: z.string().max(50),
});

// Define a TypeScript type based on the schema
export type SyllabusType = z.infer<typeof SyllabusTypeSchema>;

// Define the schema for the `TimeTable`
export const timetableSchema = z.object({
  subject: z.string().min(1, { message: "Subject is required" }),
  teacher: z.string().min(1, { message: "Teacher is required" }),
  time: z.string().min(1, { message: "Time is required" }),
  effective_date: z.string().min(1, { message: "Effective Date is required" }),
});

// Define the schema for the `VacationPeriod`
export const vacationSchema = z.object({
  name: z.string().min(1, "Vacation name is required"),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
  description: z.string().optional(),
});

export const studentSchema = z.object({
  admission: z.string(), // Assuming this is the ID of the related Admission
  course: z.string(), // Assuming this is the course_id
  department: z.string(), // Assuming this is the department_id
  student_status: z.enum(["pursuing", "completed", "left"]).default("pursuing"),
});

export const alumniSchema = z.object({
  alumni_id: z.string().optional(),
  student: z.string().min(1, "Student is required"),
  occupation: z.string().min(1, "Occupation is required"),
  work_place: z.string().min(1, "Workplace is required"),
  residence: z.string().min(1, "Residence is required"),
});

// Exam Type

export const examTypeSchema = z.object({
  name: z.string().min(1, "Exam type name is required"),
  effective_date: z.string().min(1, "Effective date is required"),
});

export const examTimeTableSchema = z.object({
  exam_type: z.string().min(1, "Exam Type is required"),
  subject: z.string().min(1, "Subject is required"),
  total_marks: z.number().min(1, "Total Marks is required"),
  passing_marks: z.number().min(1, "Passing Marks is required"),
  time: z.string().min(1, "Time is required"),
});

export type ExamTypeSchema = z.infer<typeof examTypeSchema>;

// Define the schema for HallTicket using Zod
export const hallTicketSchema = z.object({
  exam_time_table: z.string().min(1, "Exam Time Table is required"),
  student: z.string().min(1, "Student is required"),
});

// course
export const courseSchema = z.object({
  course_id: z.string().max(6).optional(),
  name: z
    .string()
    .min(1, "Course name is required")
    .max(70, "Course name cannot exceed 70 characters"),
  department: z.string().min(1, "Department is required"),
  effective_date: z
    .string()
    .min(1, "Effective date is required")
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
});

export const syllabusTypeSchema = z.object({
  type_id: z.string().optional(),
  name: z.string().min(1, { message: "Syllabus Type name is required" }),
});

export const timeTableSchema = z.object({
  time_table_id: z
    .string()
    .length(6, "Time table ID must be 6 characters long"),
  subject: z.string().min(1, "Subject is required"),
  teacher: z
    .string()
    .min(1, "Teacher is required")
    .max(20, "Teacher name cannot exceed 20 characters"),
  time: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
      "Time must be in HH:MM:SS format"
    ),
  effective_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
});

// Infer the type from the schema
export type HallTicket = z.infer<typeof hallTicketSchema>;

// markSheetSchema
export const markSheetSchema = z.object({
  exam_detail: z.string().min(1, "Exam detail is required"),
  student: z.string().min(1, "Student is required"),
  marks_obtained: z.number().min(0, "Marks obtained is required"),
  result: z.string().min(1, "Result is required"),
});

// resultSheetSchema
export const resultSheetSchema = z.object({
  student: z.string().min(1, "Student is required"),
  result_data: z.record(z.any()),
  total_marks_obtained: z
    .number()
    .min(0, "Total marks obtained should be a positive number"),
  rank: z.number().min(0, "Rank should be a positive number"),
});

// attendanceSchema
export const attendanceSchema = z.object({
  time_table: z.string().min(1, "Time Table is required"),
  student: z.string().min(1, "Student is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  status: z.boolean(),
});

// fingerRecordSchema
export const fingerRecordSchema = z.object({
  student: z.string().min(1, "Student is required"),
  fingerprint_data: z.string().min(1, "Fingerprint Data is required"),
});

// authorSchema
export const authorSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  short_bio: z.string().min(1, "Short bio is required"),
  date_of_birth: z.string().optional(),
  date_of_death: z.string().optional(),
});

// categorySchema
export const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
});

// bookSchema
export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().optional(),
  summary: z.string().min(1, "Summary is required"),
  isbn: z.string().length(13, "ISBN must be exactly 13 characters"),
  category: z.array(z.string()),
});

// Checkout
export const checkoutSchema = z.object({
  book: z.string().min(1, "Book is required"),
  member: z.string().min(1, "Member is required"),
  due_date: z.string().min(1, "Due date is required"),
  returned: z.boolean(),
});
