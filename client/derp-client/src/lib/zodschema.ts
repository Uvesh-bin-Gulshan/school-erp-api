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

