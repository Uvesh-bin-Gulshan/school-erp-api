import React from 'react';
import Sidebar from '@/app/_component/SideBar';
import ViewAdmissions from './ViewAdmissions';
import Link from 'next/link';
import CustomButton from '../_component/CustomButton';
import { LayoutDashboard } from 'lucide-react';
import { useAdmissionContext } from './AdmissonContext';

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
];

const Page: React.FC = () => {
  const { data, dashboard, loading } = useAdmissionContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(dashboard);
  console.log(data);

  return (
    <>
      <Sidebar breadcrumbs={items}>
        <Link className="" href="../admissions/dashboard">
          <CustomButton className="w-36 ml-4" text="Dashboard" icon={<LayoutDashboard />} />
        </Link>
        <div className="h-96">
          <ViewAdmissions data={data} />
        </div>
      </Sidebar>
    </>
  );
};

export default Page;
