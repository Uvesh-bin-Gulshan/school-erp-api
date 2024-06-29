"use client"
import { DataTable } from '@/app/_component/DataTable'
import React from 'react'
import { columns } from './columns'
import { getAsset } from 'node:sea'
import { ColumnFiltersState } from '@tanstack/react-table'

const ViewAdmissions = ({data}:{data:any}) => {
  const columnFilters: ColumnFiltersState = []


  return (
<>

<DataTable 

columns={columns}
initialColumnFilters={columnFilters}


data={data}/>


</>



)
}

export default ViewAdmissions