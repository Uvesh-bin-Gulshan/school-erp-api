"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAdmissionList, getAdmissionDashboard } from '@/lib/services';
export interface Admission {
    id: string;  // shortuuid
    admission_id: string;  // shortuuid as primary key
    student_name: string;
    father_name: string;
    date_of_birth: string;  // Assuming a string format for dates
    profile_image: string;
    state: string;
    district: string;
    locality: string;
    pincode: string;
    mobile_number: string;
    aadhar_number: string;
    created_at: string;  // Date string
    updated_at: string;  // Date string
    date_of_admission: string;
    previous_result_status: 'pass' | 'fail';  // Result status choices
    previous_institution: string;
    previous_education: string;
    school_education: string;
    applied_for: string;
    lc_given: boolean;
    pay_fees: boolean;
    fees_amount: number | null;
    required_donation: boolean;
    admission_status: 'approved' | 'pending' | 'left';  // Admission status choices
  }
  

  export interface DashboardData {
    total_admissions_applied: number;
    admission_applied_per_year: Array<{
      year: number;
      count: number;
    }>;
    admission_approved_per_year: Array<{
      year: number;
      count: number;
    }>;
    admission_pending_per_year: Array<{
      year: number;
      count: number;
    }>;
    admission_left_per_year: Array<{
      year: number;
      count: number;
    }>;
    admission_filter_by_course: Array<{
      applied_for: string;
      count: number;
    }>;
    admission_filter_by_department: Array<{
      previous_education: string;
      count: number;
    }>;
    admission_filter_by_age: Array<{
      age: number;
      count: number;
    }>;
    admission_filter_by_city: Array<{
      district: string;
      count: number;
    }>;
    admission_filter_by_state: Array<{
      state: string;
      count: number;
    }>;
    admission_filter_by_country: Array<{
      locality: string;  // Assuming locality is used for country
      count: number;
    }>;
    age_per_course: Array<{
      applied_for: string;
      age: number;
      count: number;
    }>;
    age_per_department: Array<{
      previous_education: string;
      age: number;
      count: number;
    }>;
  }
  
  export interface AdmissionContextType {
    data: Admission[] | null;
    basic_info:Admission[]
    other_info:Admission[]
    dashboard: DashboardData | null;
    loading: boolean;
  }
  

// Create the context
const AdmissionContext = createContext<AdmissionContextType | undefined>(undefined);

// Custom hook to use the AdmissionContext
export const useAdmissionContext = () => {
  const context = useContext(AdmissionContext);
  if (!context) {
    throw new Error('useAdmissionContext must be used within an AdmissionProvider');
  }
  return context;
};

// Provider component
export const AdmissionProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Admission[] | null>(null);
  const [basic_info, setBasicInfo] = useState<Admission[] | null>(null);

  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const admissions = await getAdmissionList();
        const dashboardData = await getAdmissionDashboard();
        setData(admissions);
        setDashboard(dashboardData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <AdmissionContext.Provider value={{ data: data || [], basic_info: basic_info || [], other_info: [], dashboard, loading }}>
      {children}
    </AdmissionContext.Provider>
  );
};
