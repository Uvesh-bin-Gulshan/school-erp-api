"use server";
import { NextApiRequest, NextApiResponse } from 'next';
import {ADMISSION_LIST, ANNUALLY_SYLLABUS_STATUS_LIST, COURSE_LIST, DEPARTMENT_LIST, LOGIN, MONTHLY_SYLLABUS_STATUS_LIST, RETRIEVE_DEPARTMENT, SUBJECT_LIST} from './routePath'
import toast from "react-hot-toast"
import { fetchData } from './helper';
export const getDepartmentDetail = async (department_id: string) => {
  return fetchData(`${RETRIEVE_DEPARTMENT}${department_id}`);
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


export const successToastMessage = (message: string) => {
  toast.success(message);
};

export const failedToastMessage = (message: string) => {
  toast.error(message);
};
