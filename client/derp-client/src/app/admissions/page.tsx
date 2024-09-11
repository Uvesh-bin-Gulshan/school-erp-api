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
      <Link className="" href="../admissions/dashboard">
        <CustomButton className="w-36 ml-4" text="Dashboard" icon={<LayoutDashboard />} />
      </Link>
      <div className="h-96">
        <DynamicViewAdmissions data={data} />
      </div>
    </Sidebar>
  );
};

// Wrap PageContent with dynamic import to ensure it's only rendered on the client
const DynamicPageContent = dynamic(() => Promise.resolve(PageContent), { ssr: false });

const Page: React.FC = () => {
  return (
    <AdmissionProvider>
      <DynamicPageContent />
    </AdmissionProvider>
  );
};

export default Page;