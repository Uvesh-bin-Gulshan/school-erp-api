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


