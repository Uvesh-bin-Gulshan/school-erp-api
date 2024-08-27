//path for apis
const BASE_HOST='http://127.0.0.1:8000/';

export const LOGIN=`${BASE_HOST}userauth/login/`;

//admission
export const ADMISSION_LIST=`${BASE_HOST}admission/list`
export const CREATE_ADMISSION=`${BASE_HOST}admission/create/`
export const IMPORT_ADMISSION=`${BASE_HOST}admission/import-admission/`
export const ADMISSION_DASHBOARD=`${BASE_HOST}admission/admission-dashboard/`
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
export const RETRIEVE_COURSE=`${BASE_HOST}academic/course/retrieve`
export const DELETE_COURSE=`${BASE_HOST}academic/course/delete`
//subject
export const SUBJECT_LIST=`${BASE_HOST}academic/subject/list`
export const CREATE_SUBJECT=`${BASE_HOST}academic/subject/create`
export const UPDATE_SUBJECT=`${BASE_HOST}academic/subject/update`
export const RETRIEVE_SUBJECT=`${BASE_HOST}academic/subject/retrieve`
export const DELETE_SUBJECT=`${BASE_HOST}academic/subject/delete`
//monthlySyllabusStatus 
export const MONTHLY_SYLLABUS_STATUS_LIST=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/list`
export const CREATE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/create`
export const UPDATE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/update`
export const RETRIEVE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/retrieve`
export const DELETE_MONTHLY_SYLLABUS_STATUS=`${BASE_HOST}academic/monthlySubjectSyllabusStatus/delete`
//annuallySyllabusStatus 
export const ANNUALLY_SYLLABUS_STATUS_LIST=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/list`
export const CREATE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/create`
export const UPDATE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/update`
export const RETRIEVE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/retrieve`
export const DELETE_ANNUALLY_SYLLABUS_STATUS=`${BASE_HOST}academic/annuallySubjectSyllabusStatus/delete`
//syllabusStatusVerification
export const SYLLABUS_STATUS_VERIFICATION_LIST=`${BASE_HOST}academic/verification/list`
export const CREATE_SYLLABUS_STATUS_VERIFICATION=`${BASE_HOST}academic/verification/create`
export const UPDATE_SYLLABUS_STATUS_VERIFICATION=`${BASE_HOST}academic/verification/update`
export const RETRIEVE_SYLLABUS_STATUS_VERIFICATION=`${BASE_HOST}academic/verification/retrieve`
export const DELETE_SYLLABUS_STATUS_VERIFICATION=`${BASE_HOST}academic/verification/delete`


// Route paths for `SyllabusType`
export const SYLLABUS_TYPE_LIST = `${BASE_HOST}syllabustype/list/`;
export const CREATE_SYLLABUS_TYPE = `${BASE_HOST}syllabustype/create/`;
export const RETRIEVE_SYLLABUS_TYPE = `${BASE_HOST}syllabustype/retrieve/`;
export const UPDATE_SYLLABUS_TYPE = `${BASE_HOST}syllabustype/update/`;
export const DELETE_SYLLABUS_TYPE = `${BASE_HOST}syllabustype/delete/`;
