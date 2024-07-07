import React from 'react'

interface RetriveDetailProps {
    id: string;
    endpoint: string;
    onSuccess:(data:any)=> void;
  }
  
const RetriveDetail:React.FC<RetriveDetailProps> = ({id,endpoint,onSuccess}) => {
  return (
<>

<div>

    <p>
        {JSON.stringify(data,null,2)}
        </p>
</div>
</>


)
}

export default RetriveDetail