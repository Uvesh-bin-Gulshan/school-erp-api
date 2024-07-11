//path for apis
const BASE_HOST='http://127.0.0.1:8000/';

export const LOGIN=`${BASE_HOST}userauth/login/`;
//admission
export const ADMISSION_LIST=`${BASE_HOST}admission/admission/list`

//department
export const DEPARTMENT_LIST=`${BASE_HOST}academic/department/list`
export const CREATE_DEPARTMENT=`${BASE_HOST}academic/department/create`
export const UPDATE_DEPARTMENT=`${BASE_HOST}academic/department/update`
export const RETRIEVE_DEPARTMENT=`${BASE_HOST}academic/department/retrieve`
export const DELETE_DEPARTMENT=`${BASE_HOST}academic/department/delete`
//course 
export const COURSE_LIST=`${BASE_HOST}academic/course/list`
export const CREATE_COURSE=`${BASE_HOST}academic/course/create`
export const UPDATE_COURSE=`${BASE_HOST}academic/course/update`
export const RETRIEVE_COURSE=`${BASE_HOST}academi/course/retrieve`
export const DELETE_COURSE=`${BASE_HOST}academic/course/delete`
//subject SUBJECT
export const SUBJECT_LIST=`${BASE_HOST}academic/subject/list`
export const CREATE_SUBJECT=`${BASE_HOST}academic/subject/create`
export const UPDATE_SUBJECT=`${BASE_HOST}academic/subject/update`
export const RETRIEVE_SUBJECT=`${BASE_HOST}academi/subject/retrieve`
export const DELETE_SUBJECT=`${BASE_HOST}academic/subject/delete`
//monthlySyllabusStatus 
export const MONTHLY_SYLLABUS_STATUS_LIST=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/list`
export const CREATE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/create`
export const UPDATE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/update`
export const RETRIEVE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academi/monthlySubjectSyllabusStatus/retrieve`
export const DELETE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/delete`
//annualySyllabusStatus 
export const ANNUALLY_SYLLABUS_STATUS_LIST=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/list`
export const CREATE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/create`
export const UPDATE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/update`
export const RETRIEVE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academi/annuallySubjectSyllabusStatus/retrieve`
export const DELETE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/delete`
