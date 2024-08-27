"use server";
import { NextApiRequest, NextApiResponse } from 'next';
import {ADMISSION_DASHBOARD, ADMISSION_LIST, ANNUALLY_SYLLABUS_STATUS_LIST, COURSE_LIST, DEPARTMENT_LIST, LOGIN, MONTHLY_SYLLABUS_STATUS_LIST, RETRIEVE_DEPARTMENT, SUBJECT_LIST, SYLLABUS_STATUS_VERIFICATION_LIST} from './routePath'
import { fetchData } from './helper';
import { exportToExcel } from './import_export';


export const getDepartmentDetail = async (department_id: string) => {
  return fetchData(`${RETRIEVE_DEPARTMENT}${department_id}`);
};

export const getAdmissionDashboard = async () => {
  return fetchData(ADMISSION_DASHBOARD);
};

export const getAdmissionList = async () => {
  return fetchData(ADMISSION_LIST);

};


export const getCourseList = async () => {
  return fetchData(COURSE_LIST);
};

export const getSubjectList = async () => {
  return fetchData(SUBJECT_LIST);
};

export const getMonthlyStatusList = async () => {
  return fetchData(MONTHLY_SYLLABUS_STATUS_LIST);
};

export const getAnnualStatusList = async () => {
  return fetchData(ANNUALLY_SYLLABUS_STATUS_LIST);
};

export const getDepartmentList = async () => {
  return fetchData(DEPARTMENT_LIST);
};

export const getSyllabusStatusList = async () => {
  return fetchData(SYLLABUS_STATUS_VERIFICATION_LIST);
};

