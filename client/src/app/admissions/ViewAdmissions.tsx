"use client";
import { DataTable } from '@/components/custom-components/DataTable';
import React from 'react';
import { columns } from './columns';
import { ColumnFiltersState } from '@tanstack/react-table';
import AddAdmissions from './AdmisionForm/add_admission/AddAdmissions';
import Link from 'next/link';
import CustomButton from '@/components/custom-components/CustomButton';
import { FileDown, FileUp, LayoutDashboard, Plus } from 'lucide-react';
import { exportAdmissions } from '@/lib/import_export';
import { AdmissionProvider } from './AdmissionContext';

interface ViewAdmissionsProps {
  data: any;
  basic_info:any;
  other_info:any;
}

const ViewAdmissions: React.FC<ViewAdmissionsProps> = ({ data ,basic_info,other_info}:any) => {
  const columnFilters: ColumnFiltersState = [];

  return (
    <AdmissionProvider>
      <div className="w-full relative">
      
        <div className="absolute right-4 flex  gap-4">


      <Link className=" " href="../admissions/dashboard">
        <CustomButton className="w-" text="Admission Dashboard" icon={<LayoutDashboard />} />
      </Link>

          <Link className="mr-2" href="/admissions/ImportAdmission">
            <CustomButton className="w-36" text="Import" icon={<FileUp />} />
          </Link>
          
          <CustomButton className="w-36 mr-2" text="Export" onClick={exportAdmissions} icon={<FileDown />} />
          
          <Link href="/admissions/AdmisionForm/add_admission">
            <CustomButton className="w-36 mr-1" text="Admission" icon={<Plus />} />
          </Link>
          
        </div>
        <div className='mt-8 absolute'>


        <DataTable columns={columns} initialColumnFilters={columnFilters} data={data} />
        </div>

      </div>
      
    </AdmissionProvider>
  );
};

export default ViewAdmissions;
