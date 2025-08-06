"use client";

import React from 'react';
import { DataTable } from '@/components/custom-components/DataTable';
import { ColumnFiltersState } from '@tanstack/react-table';
import { columns } from './columns';

const ViewVerification = ({ data }: { data: any }) => {
  const columnFilters: ColumnFiltersState = [];

  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        initialColumnFilters={columnFilters}
        data={data}
      />
    </div>
  );
};

export default ViewVerification;
