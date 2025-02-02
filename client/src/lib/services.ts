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

export const getSyllabusStatusVerificationList = async () => {
  return fetchData(routes.SYLLABUS_STATUS_VERIFICATION_LIST);
};

export const getSyllabusTypeList = async () => {
  return fetchData(routes.SYLLABUS_TYPE_LIST);
};

export const getTimeTableList = async () => {
  return fetchData(routes.TIMETABLE_LIST);
};

//STUDENTS
export const getStudentList = async () => {
  return fetchData(routes.STUDENT_LIST);
};

// ALUMNI
export const getAlumniList = async () => {
  return fetchData(routes.ALUMNI_LIST);
};

// EXAMINATION
export const getExamTypeList = async () => {
  return fetchData(routes.EXAMTYPE_LIST);
};


export const getDepartmentDetail = async (department_id: string) => {
  return fetchData(`${routes.RETRIEVE_DEPARTMENT}${department_id}`);
};



export const getMarkSheetList = async () => {
  return fetchData(routes.MARK_SHEET_LIST);
};

export const getResultSheetList = async () => {
  return fetchData(routes.RESULT_SHEET_LIST);
};

export const getHallTicketList = async () => {
  return fetchData(routes.HALLTICKET_LIST);
};

export const getExamTimeTableList = async () => {
  return fetchData(routes.EXAMTIMETABLE_LIST);
};

export const getVacationPeriodList = async () => {
  return fetchData(routes.VACATION_PERIOD_LIST);
};

export const getAttendanceList = async () => {
  return fetchData(routes.ATTENDANCE_LIST);
};

export const getFingerRecordList = async () => {
  return fetchData(routes.FINGER_RECORD_LIST);
};

export const getAuthorList = async () => {
  return fetchData(routes.AUTHOR_LIST);
};

export const getCategoryList = async () => {
  return fetchData(routes.CATEGORY_LIST);
};

export const getBookList = async () => {
  return fetchData(routes.BOOK_LIST);
};

export const getCheckoutList = async () => {
  return fetchData(routes.CHECKOUT_LIST);
};


