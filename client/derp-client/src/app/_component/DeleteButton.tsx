import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CustomButton from './CustomButton';

interface DeleteButtonprops {
  id: string;
  endpoint: string;
  onSuccess:()=> void;
  item?: string;
}



const DeleteButton:React.FC<DeleteButtonprops> = ({id,endpoint,onSuccess,item}) => {
const handleDelete=async()=>{
  try{
    const response =await fetch(`${endpoint}/${id}`,{
      method:'DELETE',

    })
    if(response.ok){
      onSuccess();
      console.log("item deleted successfully")
    }else{
      console.log("failed to delete item")

    }
  }catch(error){
    console.error("error deleting",error)
  }
}



  return (
<>
<div   >
<Dialog>
      <DialogTrigger className='cursor-pointer text-lg  text-cyan-700' asChild>
      <AiFillDelete/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Delete {item}</DialogTitle>
          <DialogDescription>
            Make sure you want to delete {item}
          </DialogDescription>
        </DialogHeader>
        <div className="py-2 ">
          <div className="grid grid-cols-2 mt-4  items-center gap-6">
           <CustomButton onClick={handleDelete} className="w-full" text={'Delete'} />

           <DialogClose asChild>
                  <CustomButton className="w-full bg-white" text={'Cancel'} />
                </DialogClose>


          </div>
        </div>
       
      </DialogContent>
    </Dialog>

  </div>
  

</>

)
}

export default DeleteButton