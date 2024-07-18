"use client"
import { DataTable } from '@/app/_component/DataTable'
import React from 'react'
import { columns } from './columns'
import { getAsset } from 'node:sea'
import { ColumnFiltersState } from '@tanstack/react-table'
import AddAdmissions from './AddAdmissions'

const ViewAdmissions = ({data}:{data:any}) => {
  const columnFilters: ColumnFiltersState = []

  return (
    <>
    <div className="w-full relative ">
      
    <div className='absolute right-0 mt-2.5 '>
    
    <AddAdmissions  />
    
    </div>
    
    <DataTable 
    
    columns={columns}
    
    initialColumnFilters={columnFilters}
    
    
    data={data}/>
    
    </div>
    
    
    </>
    
    
    
    )
  }

export default ViewAdmissions