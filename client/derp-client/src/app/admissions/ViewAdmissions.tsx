"use client"
import { DataTable } from '@/app/_component/DataTable'
import React from 'react'
import { columns } from './columns'
import { getAsset } from 'node:sea'
import { ColumnFiltersState } from '@tanstack/react-table'
import AddAdmissions from './AdmisionForm/AddAdmissions'
import Link from 'next/link'
import CustomButton from '../_component/CustomButton'
import { Plus } from 'lucide-react'

const ViewAdmissions = ({data}:{data:any}) => {
  const columnFilters: ColumnFiltersState = []

  return (
    <>
    <div className="w-full relative ">
      
    <div className='absolute right-4 mt-2.5 '>
    
    <Link href="../admissions/AdmisionForm">     
       <CustomButton text="Add Admission" icon={<Plus />} />
    </Link>
    
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