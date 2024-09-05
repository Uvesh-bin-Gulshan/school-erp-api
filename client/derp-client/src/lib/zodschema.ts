//make schema for client validatiion
import {z} from "zod"

export const loginSchema=z.object({

    username:z.string().min(3,{
        message:"username must be at least 3 characters"
    }),
    password:z.string().min(8,{
        message:"password must be at least 3 characters"
    })

})

export const departmentSchema=z.object({

    name:z.string().min(3,{
        message:"department name must be at least 3 characters"
    }),
   

})




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
  admission_status: z.enum(["pending", "accepted", "rejected"]).default("pending"),
});


// Define the schema for SyllabusStatusVerification
export const syllabusStatusSchema = z.object({
  status_verification_id: z.string().length(6), // Assuming the ID is always 6 characters
  monthly_syllabus_approval: z.string(), // Assuming this is a reference ID
  feedback: z.string().max(300).optional(), // Feedback is optional and has a max length
  is_approved: z.boolean(), // Boolean field
  approved_date: z.string(), // DateTime should be in ISO 8601 format as a string
});

export const SyllabusTypeSchema = z.object({
    type_id: z.string().max(6),
    name: z.string().max(50),
  });
  
  // Define a TypeScript type based on the schema
  export type SyllabusType = z.infer<typeof SyllabusTypeSchema>;


// Define the schema for the `TimeTable`
export const timeTableSchema = z.object({
    time_table_id: z.string().length(6).optional(), // CharField with max_length=6
    subject: z.string(), // ForeignKey to Subject, represented by its `subject_id`
    teacher: z.string().max(20), // CharField with max_length=20
    time: z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/), // TimeField in HH:MM or HH:MM:SS format
    effective_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // DateField in YYYY-MM-DD format
  });
  

// Define the schema for the `VacationPeriod`
export const vacationPeriodSchema = z.object({
    vacation_id: z.string().length(6).optional(), // CharField with max_length=6, automatically generated
    name: z.string().max(100), // CharField with max_length=100
    start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // DateField in YYYY-MM-DD format
    end_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // DateField in YYYY-MM-DD format
    description: z.string().max(254).nullable().optional(), // CharField with max_length=254, nullable and optional
  });


// Student Schema
export const studentSchema = z.object({
  student_id: z.string().length(6).optional(), // CharField with max_length=6, automatically generated
  admission: z.string().uuid(), // Assuming Admission is represented by a UUID string
  course: z.string().uuid(), // Assuming Course is represented by a UUID string
  department: z.string().uuid(), // Assuming Department is represented by a UUID string
  student_status: z.enum(['pursuing', 'completed', 'left']).default('pursuing'), // Choices for student_status with default
});

// Exam Type
export const examTypeSchema = z.object({
  name: z.string().min(1, "Exam Type Name is required"),
  effective_date: z.string().nonempty("Effective Date is required"),
});


export const examTimeTableSchema = z.object({
  exam_type: z.string().min(1, { message: "Exam Type is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  total_marks: z.number().min(0, { message: "Total marks are required" }),
  passing_marks: z.number().min(0, { message: "Passing marks are required" }),
  time: z.string().min(1, { message: "Time is required" }),
});


export type ExamTypeSchema = z.infer<typeof examTypeSchema>;

