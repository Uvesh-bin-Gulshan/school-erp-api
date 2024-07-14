import { NextApiRequest, NextApiResponse } from 'next';
import {ADMISSION_LIST, ANNUALLY_SYLLABUS_STATUS_LIST, COURSE_LIST, DEPARTMENT_LIST, LOGIN, MONTHLY_SYLLABUS_STATUS_LIST, RETRIEVE_DEPARTMENT, SUBJECT_LIST} from './routePath'
import toast from "react-hot-toast"

export const submitForm = async (url:any,data:any,method:string) => {
    try {
      const response = await fetch(url, {
        method,
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
  
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  export const getDepartmentDetail=async(department_id:string)=>{
    const response =await fetch(`${RETRIEVE_DEPARTMENT}${department_id}`)
    console.log(response)
    if(!response.ok){
    
      throw new Error("failed")
    }
    const data = await response.json();
    console.log(data)
    return data;
    
    }


//get addmission list
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

//get course list
export const getCourseList=async()=>{
  const response =await fetch(COURSE_LIST)
  console.log(response)
  if(!response.ok){
  
    throw new Error("failed")
  }
  const data = await response.json();
  console.log(data)
  return data;
  
  }


  //get subject list
  export const getSubjectList=async()=>{
    const response =await fetch(SUBJECT_LIST)
    console.log(response)
    if(!response.ok){
    
      throw new Error("failed")
    }
    const data = await response.json();
    console.log(data)
    return data;
    
    }

    
  //get monthly status list
export const getMonthlyStatusList=async()=>{
  const response =await fetch(MONTHLY_SYLLABUS_STATUS_LIST)
  console.log(response)
  if(!response.ok){
  
    throw new Error("failed")
  }
  const data = await response.json();
  console.log(data)
  return data;
  
  }


    //get annual status list
export const getAnnualStatusList=async()=>{
  const response =await fetch(ANNUALLY_SYLLABUS_STATUS_LIST)
  console.log(response)
  if(!response.ok){
  
    throw new Error("failed")
  }
  const data = await response.json();
  console.log(data)
  return data;
  
  }

  //get department list
export const getDepartmentList=async()=>{
  const response =await fetch(DEPARTMENT_LIST)
  console.log(response)
  if(!response.ok){
  
    throw new Error("failed")
  }
  const data = await response.json();
  console.log(data)
  return data;
  
  }




//toaster
export const  successtoastMessage=(message:string)=>{
  toast.success(message);
 }

 export const  failedtoastMessage=(message:string)=>{
  toast.error(message);
 }