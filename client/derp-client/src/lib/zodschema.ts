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

