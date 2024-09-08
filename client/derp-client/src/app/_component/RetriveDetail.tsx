import React, { useEffect, useState } from 'react';
import { BiSolidDetail } from "react-icons/bi";
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


interface RetrieveDetailProps {
  id: string;
  endpoint: string;
  onSuccess: (data: any) => void;
  item:string;
}

const RetrieveDetail: React.FC<RetrieveDetailProps> = ({ item,id, endpoint, onSuccess }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const handleRetrive=async()=>{
    try{
      const response =await fetch(`${endpoint}/${id}`,{
        method:'GET',
  
      })
      if(response.ok){
        const result = await response.json();
                 console.log(result,"demo ")
        setData(result);

        onSuccess(result);
        console.log("item retrived successfully")
      }else{
        console.log("failed to retrive item")
  
      }
    }catch(error){
      console.error("error retriving",error)
    }
  }


  return (

    <Dialog >
      <DialogTrigger onClick={handleRetrive} className='cursor-pointer text-lg  text-cyan-700' asChild>
      <BiSolidDetail />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {item} Details
          </DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
      
          <div className="py-2">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {data && (
            <table className="table-auto  w-full">
              <tbody>
                {Object.entries(data).map(([key, value]) => (
                  <tr key={key}>
                    <td className=" px-4 py-2 border-cyan-700 border-y  font-bold">{key}</td>
                    <td className=" px-4 border-b-1 border-cyan-700 border-t border-b py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </DialogContent>
    </Dialog>
 


     
  );
};

export default RetrieveDetail;
