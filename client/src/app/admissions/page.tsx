"use client";

import React from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/custom-components/SideBar";
import { AdmissionProvider, useAdmissionContext } from "./AdmissionContext";

const items = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
];

const DynamicViewAdmissions = dynamic(() => import("./ViewAdmissions"), {
  ssr: false,
});

const PageContent = () => {
  const { data, loading } = useAdmissionContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  // Ensure data is not empty and get the first admission record
  const admissionData = data && data.length > 0 ? data[0] : null;

  if (!admissionData) {
    return <div>No admission data available.</div>;
  }

  // Separate basic admission details and other details
  const basic_info = {
    admission_id: admissionData.admission_id,
    student_name: admissionData.student_name,
    date_of_admission: admissionData.date_of_admission,
    father_name: admissionData.father_name,
    date_of_birth: admissionData.date_of_birth,
    admission_status: admissionData.admission_status,
    applied_for: admissionData.applied_for,
  };

  const other_info = {
    aadhar_number: admissionData.aadhar_number,
    district: admissionData.district,
    locality: admissionData.locality,
    pincode: admissionData.pincode,
    mobile_number: admissionData.mobile_number,
    previous_education: admissionData.previous_education,
    previous_institution: admissionData.previous_institution,
    previous_result_status: admissionData.previous_result_status,
    profile_image: admissionData.profile_image,
    state: admissionData.state,
    fees_amount: admissionData.fees_amount,
    pay_fees: admissionData.pay_fees,
    required_donation: admissionData.required_donation,
    lc_given: admissionData.lc_given,
  };
  console.log(basic_info, "basic page");
  return (
    <Sidebar breadcrumbs={items}>
      <div className="h-[73vh] mt-10">
        <DynamicViewAdmissions
          data={data}
          basic_info={basic_info}
          other_info={other_info}
        />
      </div>
    </Sidebar>
  );
};

const DynamicPageContent = dynamic(() => Promise.resolve(PageContent), {
  ssr: false,
});

const Page: React.FC = () => {
  return (
    <AdmissionProvider>
      <DynamicPageContent />
    </AdmissionProvider>
  );
};

export default Page;
