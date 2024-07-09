import React, { useEffect, useState } from 'react';

interface RetrieveDetailProps {
  id: string;
  endpoint: string;
  onSuccess: (data: any) => void;
}

const RetrieveDetail: React.FC<RetrieveDetailProps> = ({ id, endpoint, onSuccess }) => {
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
    <div onClick={handleRetrive}>
<pre>{JSON.stringify(data, null, 2)}</pre>
      </div>


     
  );
};

export default RetrieveDetail;
