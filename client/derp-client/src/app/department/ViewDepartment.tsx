"use client"
import { DataTable } from '@/app/_component/DataTable'
import React from 'react'
import { columns } from './columns'
import { getAsset } from 'node:sea'
import { ColumnFiltersState } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

const ViewDepartment = ({data}:{data:any}) => {
  const columnFilters: ColumnFiltersState = []
console.log(data)

  return (
<>
<div className="w-full">
  
<Button className=''>Import</Button>
<Button className=''>Export</Button>

<DataTable 

columns={columns}

initialColumnFilters={columnFilters}


data={data}/>

</div>


</>



)
}

export default ViewDepartment