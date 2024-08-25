"use client"
import { DataTable } from '@/app/_component/DataTable'
import React from 'react'
import { columns } from './columns'
import { getAsset } from 'node:sea'
import { ColumnFiltersState } from '@tanstack/react-table'
import AddAdmissions from './AdmisionForm/AddAdmissions'
import Link from 'next/link'
import CustomButton from '../_component/CustomButton'
import { FileDown, FileUp, LayoutDashboard, Plus } from 'lucide-react'
import { exportAdmissions } from '@/lib/import_export'
import ImportAdmission from './ImportAdmission/ImportAdmission'

const ViewAdmissions = ({data}:{data:any}) => {
  const columnFilters: ColumnFiltersState = []
  console.log(data)

  return (
    <>
    <div className="w-full relative ">
      
    <div className='absolute right-4 mt-2.5 gap-4'>
    <Link  className="mr-2"   href="../admissions/dashboard">     
       <CustomButton text="Dashboard" icon={<LayoutDashboard />} />
    </Link>
    <Link  className="mr-2"   href="../admissions/ImportAdmission">     
       <CustomButton text="Import" icon={<FileUp />} />
    </Link>
      {/* <ImportAdmission /> */}
    <CustomButton text="Export" className="mr-2" onClick={exportAdmissions} icon={<FileDown />}/>

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