//path for apis
const BASE_HOST='http://127.0.0.1:8000/';

export const  routes={
      LOGIN:`${BASE_HOST}userauth/login/`,
    
    //admission
      ADMISSION_LIST:`${BASE_HOST}admission/list`,
      CREATE_ADMISSION:`${BASE_HOST}admission/create/`,
      RETRIEVE_ADMISSION:`${BASE_HOST}retrieve/`,
      DELETE_ADMISSION:`${BASE_HOST}delete/`,
    
      IMPORT_ADMISSION:`${BASE_HOST}admission/import-admission/`,
      ADMISSION_DASHBOARD:`${BASE_HOST}admission/admission-dashboard/`,
    //department
      DEPARTMENT_LIST:`${BASE_HOST}academic/department/list`,
      CREATE_DEPARTMENT:`${BASE_HOST}academic/department/create`,
      UPDATE_DEPARTMENT:`${BASE_HOST}academic/department/update`,
      RETRIEVE_DEPARTMENT:`${BASE_HOST}academic/department/retrieve`,
      DELETE_DEPARTMENT:`${BASE_HOST}academic/department/delete`,
    
    //course 
      COURSE_LIST:`${BASE_HOST}academic/course/list`,
      CREATE_COURSE:`${BASE_HOST}academic/course/create`,
      UPDATE_COURSE:`${BASE_HOST}academic/course/update`,
      RETRIEVE_COURSE:`${BASE_HOST}academic/course/retrieve`,
      DELETE_COURSE:`${BASE_HOST}academic/course/delete`,
    //subject
      SUBJECT_LIST:`${BASE_HOST}academic/subject/list`,
      CREATE_SUBJECT:`${BASE_HOST}academic/subject/create`,
      UPDATE_SUBJECT:`${BASE_HOST}academic/subject/update`,
      RETRIEVE_SUBJECT:`${BASE_HOST}academic/subject/retrieve`,
      DELETE_SUBJECT:`${BASE_HOST}academic/subject/delete`,
    //monthlySyllabusStatus 
      MONTHLY_SYLLABUS_STATUS_LIST:`${BASE_HOST}academic/monthlySubjectSyllabusStatus/list`,
      CREATE_MONTHLY_SYLLABUS_STATUS:`${BASE_HOST}academic/monthlySubjectSyllabusStatus/create`,
      UPDATE_MONTHLY_SYLLABUS_STATUS:`${BASE_HOST}academic/monthlySubjectSyllabusStatus/update`,
      RETRIEVE_MONTHLY_SYLLABUS_STATUS:`${BASE_HOST}academic/monthlySubjectSyllabusStatus/retrieve`,
      DELETE_MONTHLY_SYLLABUS_STATUS:`${BASE_HOST}academic/monthlySubjectSyllabusStatus/delete`,
    //annuallySyllabusStatus 
      ANNUALLY_SYLLABUS_STATUS_LIST:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/list`,
      CREATE_ANNUALLY_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/create`,
      UPDATE_ANNUALLY_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/update`,
      RETRIEVE_ANNUALLY_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/retrieve`,
      DELETE_ANNUALLY_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/delete`,
    //syllabusStatusVerification
      SYLLABUS_STATUS_VERIFICATION_LIST:`${BASE_HOST}academic/verification/list`,
      CREATE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/create`,
      UPDATE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/update`,
      RETRIEVE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/retrieve`,
      DELETE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/delete`,
    
    
    // SyllabusType
      SYLLABUS_TYPE_LIST : `${BASE_HOST}syllabustype/list/`,
      CREATE_SYLLABUS_TYPE : `${BASE_HOST}syllabustype/create/`,
      RETRIEVE_SYLLABUS_TYPE : `${BASE_HOST}syllabustype/retrieve/`,
      UPDATE_SYLLABUS_TYPE : `${BASE_HOST}syllabustype/update/`,
      DELETE_SYLLABUS_TYPE : `${BASE_HOST}syllabustype/delete/`,
    
    // Route paths for `TimeTable`
      TIMETABLE_LIST : `${BASE_HOST}timetable/list/`,
      CREATE_TIMETABLE : `${BASE_HOST}timetable/create/`,
      RETRIEVE_TIMETABLE : `${BASE_HOST}timetable/retrieve/`,
      UPDATE_TIMETABLE : `${BASE_HOST}timetable/update/`,
      DELETE_TIMETABLE : `${BASE_HOST}timetable/delete/`,
    
    // Vacation Period
      VACATION_PERIOD_LIST : `${BASE_HOST}vacationperiod/list`,
      CREATE_VACATION_PERIOD : `${BASE_HOST}vacationperiod/create`,
      RETRIEVE_VACATION_PERIOD : `${BASE_HOST}vacationperiod/retrieve`,
      UPDATE_VACATION_PERIOD : `${BASE_HOST}vacationperiod/update`,
      DELETE_VACATION_PERIOD : `${BASE_HOST}vacationperiod/delete`,

    // Student
      STUDENT_LIST : `${BASE_HOST}student/list`,
      CREATE_STUDENT : `${BASE_HOST}student/create`,
      RETRIEVE_STUDENT : `${BASE_HOST}student/retrieve`,
      UPDATE_STUDENT : `${BASE_HOST}student/update`,
      DELETE_STUDENT : `${BASE_HOST}student/delete`,
    
    // Exam Type
      EXAMTYPE_LIST : '/examtype/list/',
      CREATE_EXAMTYPE : '/examtype/create/',
      RETRIEVE_EXAMTYPE : '/examtype/retrieve',
      UPDATE_EXAMTYPE : '/examtype/update',
      DELETE_EXAMTYPE : '/examtype/delete',
    
    // New ExamTimeTable routes
      EXAMTIMETABLE_LIST : '/examtimetable/list/',
      CREATE_EXAMTIMETABLE : '/examtimetable/create/',
      RETRIEVE_EXAMTIMETABLE : '/examtimetable/retrieve',
      UPDATE_EXAMTIMETABLE : '/examtimetable/update',
      DELETE_EXAMTIMETABLE : '/examtimetable/delete/',
    
    // HallTicket routes
      HALLTICKET_LIST : `${BASE_HOST}hallticket/list`,
      CREATE_HALLTICKET : `${BASE_HOST}hallticket/create`,
      RETRIEVE_HALLTICKET : `${BASE_HOST}hallticket/retrieve`,
      UPDATE_HALLTICKET : `${BASE_HOST}hallticket/update`,
      DELETE_HALLTICKET : `${BASE_HOST}hallticket/delete`,
}
