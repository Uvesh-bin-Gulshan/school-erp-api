"use client"

import { DataTable } from '@/app/_component/DataTable'
import React from 'react'
import { columns } from './columns'
import { ColumnFiltersState } from '@tanstack/react-table'

const ViewSyllabusType = ({ data }: { data: any }) => {
  const columnFilters: ColumnFiltersState = []

  return (
    <div className="w-full">
      <DataTable 
        columns={columns}
        initialColumnFilters={columnFilters}
        data={data}
      />
    </div>
  )
}

export default ViewSyllabusType
