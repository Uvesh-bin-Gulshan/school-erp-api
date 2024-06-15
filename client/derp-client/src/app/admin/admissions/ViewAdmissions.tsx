import { DataTable } from '@/app/_component/DataTable'
import React from 'react'
import { columns } from './columns'
import { getAsset } from 'node:sea'

const ViewAdmissions = ({data}:{data:any}) => {


  return (
<>

<DataTable 


columns={columns}

data={data}/>


</>

)
}

export default ViewAdmissions