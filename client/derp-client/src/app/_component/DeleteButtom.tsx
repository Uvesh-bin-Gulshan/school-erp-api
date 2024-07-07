import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

interface DeleteButtonprops {
  id: string;
  endpoint: string;
  onSuccess:()=> void;
}

const DeleteButtom:React.FC<DeleteButtonprops> = ({id,endpoint,onSuccess}) => {
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
<div  onClick={handleDelete} className='cursor-pointer text-red-500'>
<AiFillDelete/>
  </div>

</>

)
}

export default DeleteButtom