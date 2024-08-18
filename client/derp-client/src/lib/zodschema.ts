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
  student_name: z.string().min(1, 'Student name is required').max(200, 'Student name cannot exceed 200 characters'),
  father_name: z.string().min(1, 'Father name is required').max(50, 'Father name cannot exceed 50 characters'),
  date_of_birth: z.string().min(1, 'Date of birth is required').refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  profile_image: z.any().optional(), // Assuming image upload will be handled separately
  state: z.string().min(1, 'State is required').max(100, 'State cannot exceed 100 characters'),
  district: z.string().min(1, 'District is required').max(100, 'District cannot exceed 100 characters'),
  locality: z.string().min(1, 'Locality is required').max(100, 'Locality cannot exceed 100 characters'),
  pincode: z.string().min(6, 'Pincode must be exactly 6 characters').max(6, 'Pincode must be exactly 6 characters'),
  mobile_number: z.string().min(10, 'Mobile number must be at least 10 digits').max(12, 'Mobile number cannot exceed 12 digits'),
  aadhar_number: z.string().min(12, 'Aadhar number must be exactly 12 digits').max(12, 'Aadhar number must be exactly 12 digits'),
  created_at: z.string().min(1, 'Created at date is required').refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  updated_at: z.string().min(1, 'Updated at date is required').refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  date_of_admission: z.string().min(1, 'Date of admission is required').refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  previous_result_status: z.enum(['pass', 'fail']).default('pass'),
  previous_institution: z.string().min(1, 'Previous institution is required').max(200, 'Previous institution cannot exceed 200 characters'),
  previous_education: z.string().min(1, 'Previous education is required').max(200, 'Previous education cannot exceed 200 characters'),
  school_education: z.string().min(1, 'School education is required').max(200, 'School education cannot exceed 200 characters'),
  applied_for: z.string().min(1, 'Applied for is required').max(200, 'Applied for cannot exceed 200 characters'),
  lc_given: z.boolean().default(false),
  pay_fees: z.boolean().default(false),
  fees_amount: z.string().min(0, 'Fees amount cannot be negative').optional().nullable(),
  required_donation: z.boolean().default(false),
  admission_status: z.enum(['approved', 'pending', 'left']).default('pending'),
});
