"use client"

import React from 'react'
import { ColumnFiltersState } from '@tanstack/react-table'
import { columns } from './columns'
import { DataTable } from '@/app/_component/DataTable'

const ViewTimeTable = ({ data }: { data: any }) => {
  const columnFilters: ColumnFiltersState = []

  return (
    <>
      <div className="w-full">
        <DataTable
          columns={columns}
          initialColumnFilters={columnFilters}
          data={data}
        />
      </div>
    </>
  )
}

export default ViewTimeTable
