"use server";
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from './helper';
import { exportToExcel } from './import_export';
import { routes } from './routePath';


//ADMISSION
export const getAdmissionDashboard = async () => {
  return fetchData(routes.ADMISSION_DASHBOARD);
};

export const getAdmissionList = async () => {
  return fetchData(routes.ADMISSION_LIST);

};
export const getAdmissionDetail = async (admission_id: string) => {
  return fetchData(`${routes.RETRIEVE_ADMISSION}/${admission_id}/`);
};

//ACADEMICS
export const getCourseList = async () => {
  return fetchData(routes.COURSE_LIST);
};

export const getSubjectList = async () => {
  return fetchData(routes.SUBJECT_LIST);
};

export const getMonthlyStatusList = async () => {
  return fetchData(routes.MONTHLY_SYLLABUS_STATUS_LIST);
};

export const getAnnualStatusList = async () => {
  return fetchData(routes.ANNUALLY_SUBJECT_SYLLABUS_STATUS_LIST);
};

export const getDepartmentList = async () => {
  return fetchData(routes.DEPARTMENT_LIST);
};

export const getSyllabusStatusList = async () => {
  return fetchData(routes.SYLLABUS_STATUS_VERIFICATION_LIST);
};

export const getSyllabusTypeList = async () => {
  return fetchData(routes.SYLLABUS_TYPE_LIST);
};

export const getTimeTableList = async () => {
  return fetchData(routes.TIMETABLE_LIST);
};

export const getStudentList = async () => {
  return fetchData(routes.STUDENT_LIST);
};

export const getAlumniList = async () => {
  return fetchData(routes.ALUMNI_LIST);
};

export const getExamTypeList = async () => {
  return fetchData(routes.EXAMTYPE_LIST);
};


export const getDepartmentDetail = async (department_id: string) => {
  return fetchData(`${routes.RETRIEVE_DEPARTMENT}${department_id}`);
};
