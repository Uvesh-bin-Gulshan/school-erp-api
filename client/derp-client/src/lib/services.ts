import { NextApiRequest, NextApiResponse } from 'next';
import {ADMISSION_LIST, LOGIN} from './routePath'
import toast from "react-hot-toast"

export const submitForm = async (data:any) => {
    try {
      const response = await fetch(LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      console.log(response)
   if(response.ok){
    return{success:true}
   }else{
    return{success:false}
   }
  
      const result = await response.json();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



export const getAdmissionList=async()=>{
const response =await fetch(ADMISSION_LIST)
console.log(response)
if(!response.ok){

  throw new Error("failed")
}
const data = await response.json();
console.log(data)
return data;

}


export const  successtoastMessage=(message:string)=>{
  toast.success(message);
 }

 export const  failedtoastMessage=(message:string)=>{
  toast.error(message);
 }