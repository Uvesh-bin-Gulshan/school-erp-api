"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/app/_component/SideBar';
import Link from 'next/link';
import CustomButton from '../_component/CustomButton';
import { LayoutDashboard } from 'lucide-react';
import { AdmissionProvider, useAdmissionContext } from './AdmissionContext';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
];

// Dynamically import the ViewAdmissions component
const DynamicViewAdmissions = dynamic(() => import('./ViewAdmissions'), { ssr: false });

// Create a separate component for the content that uses the context
const PageContent = () => {
  const { data, dashboard, loading } = useAdmissionContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(dashboard);
  console.log(data);

  return (
    <Sidebar breadcrumbs={items}>
   
      <div className="h-[73vh] mt-10">
        <DynamicViewAdmissions data={data} />
      </div>
    </Sidebar>
  );
};

const DynamicPageContent = dynamic(() => Promise.resolve(PageContent), { ssr: false });

const Page: React.FC = () => {
  return (
    <AdmissionProvider>
      <DynamicPageContent />
    </AdmissionProvider>
  );
};

export default Page;