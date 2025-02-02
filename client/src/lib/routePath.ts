//path for apis
const BASE_HOST='http://127.0.0.1:8000/';

export const  routes={
      LOGIN:`${BASE_HOST}userauth/login/`,
    
    //admission
      ADMISSION_LIST:`${BASE_HOST}admission/list`,
      CREATE_ADMISSION:`${BASE_HOST}admission/create/`,
      RETRIEVE_ADMISSION:`${BASE_HOST}admission/retrieve`,
      DELETE_ADMISSION:`${BASE_HOST}admission/delete`,
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

    //annuallySubjectSyllabusStatus 
      ANNUALLY_SUBJECT_SYLLABUS_STATUS_LIST:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/list`,
      CREATE_ANNUALLY_SUBJECT_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/create`,
      UPDATE_ANNUALLY_SUBJECT_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/update`,
      RETRIEVE_ANNUALLY_SUBJECT_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/retrieve`,
      DELETE_ANNUALLY_SUBJECT_SYLLABUS_STATUS:`${BASE_HOST}academic/annuallySubjectSyllabusStatus/delete`,
    
    //syllabusStatusVerification
      SYLLABUS_STATUS_VERIFICATION_LIST:`${BASE_HOST}academic/verification/list`,
      CREATE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/create`,
      UPDATE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/update`,
      RETRIEVE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/retrieve`,
      DELETE_SYLLABUS_STATUS_VERIFICATION:`${BASE_HOST}academic/verification/delete`,
    
    
    // SyllabusType
      SYLLABUS_TYPE_LIST : `${BASE_HOST}academic/syllabustype/list/`,
      CREATE_SYLLABUS_TYPE : `${BASE_HOST}academic/syllabustype/create/`,
      RETRIEVE_SYLLABUS_TYPE : `${BASE_HOST}academic/syllabustype/retrieve/`,
      UPDATE_SYLLABUS_TYPE : `${BASE_HOST}academic/syllabustype/update/`,
      DELETE_SYLLABUS_TYPE : `${BASE_HOST}academic/syllabustype/delete/`,
    
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
      STUDENT_LIST : `${BASE_HOST}admission/student/list`,
      CREATE_STUDENT : `${BASE_HOST}admission/student/create`,
      RETRIEVE_STUDENT : `${BASE_HOST}admission/student/retrieve`,
      UPDATE_STUDENT : `${BASE_HOST}admission/student/update`,
      DELETE_STUDENT : `${BASE_HOST}admission/student/delete`,
      
    // Alumni 
      ALUMNI_LIST: `${BASE_HOST}admission/alumni/list/`,
      CREATE_ALUMNI: `${BASE_HOST}admission/alumni/create/`,
      RETRIEVE_ALUMNI: `${BASE_HOST}admission/alumni/retrieve/`, // append ID dynamically
      UPDATE_ALUMNI: `${BASE_HOST}admission/alumni/update/`, // append ID dynamically
      DELETE_ALUMNI: `${BASE_HOST}admission/alumni/delete/`, // append ID dynamically
    
    // Exam Type
      EXAMTYPE_LIST : `${BASE_HOST}examtype/list/`,
      CREATE_EXAMTYPE : `${BASE_HOST}examtype/create/`,
      RETRIEVE_EXAMTYPE : `${BASE_HOST}examtype/retrieve`,
      UPDATE_EXAMTYPE : `${BASE_HOST}examtype/update`,
      DELETE_EXAMTYPE : `${BASE_HOST}examtype/delete`,
    
    // New ExamTimeTable routes
      EXAMTIMETABLE_LIST : `${BASE_HOST}examination/examtimetable/list/`,
      CREATE_EXAMTIMETABLE : `${BASE_HOST}examination/examtimetable/create/`,
      RETRIEVE_EXAMTIMETABLE : `${BASE_HOST}examination/examtimetable/retrieve`,
      UPDATE_EXAMTIMETABLE : `${BASE_HOST}examination/examtimetable/update`,
      DELETE_EXAMTIMETABLE : `${BASE_HOST}examination/examtimetable/delete`,
    
    // HallTicket routes
      HALLTICKET_LIST : `${BASE_HOST}examination/hallticket/list`,
      CREATE_HALLTICKET : `${BASE_HOST}examination/hallticket/create`,
      RETRIEVE_HALLTICKET : `${BASE_HOST}examination/hallticket/retrieve`,
      UPDATE_HALLTICKET : `${BASE_HOST}examination/hallticket/update`,
      DELETE_HALLTICKET : `${BASE_HOST}examination/hallticket/delete`,
      
      // Marksheet
      MARK_SHEET_LIST : `${BASE_HOST}examination/marksheet/list`,
      CREATE_MARK_SHEET: `${BASE_HOST}examination/marksheet/create`,
      RETRIEVE_MARK_SHEET: `${BASE_HOST}examination/marksheet/retrieve`,
      UPDATE_MARK_SHEET: `${BASE_HOST}examination/marksheet/update`,
      DELETE_MARK_SHEET: `${BASE_HOST}examination/marksheet/delete`,
      
      // Result Sheet
      RESULT_SHEET_LIST: `${BASE_HOST}examination/resultsheet/list`,
      CREATE_RESULT_SHEET: `${BASE_HOST}examination/resultsheet/create`,
      RETRIEVE_RESULT_SHEET: `${BASE_HOST}examination/resultsheet/retrieve`,
      UPDATE_RESULT_SHEET: `${BASE_HOST}examination/resultsheet/update`,
      DELETE_RESULT_SHEET: `${BASE_HOST}examination/resultsheet/delete`,

      // Attendance
      ATTENDANCE_LIST: `${BASE_HOST}attendance/attendance/list`,
      RETRIEVE_ATTENDANCE: `${BASE_HOST}attendance/attendance/retrieve`,
      UPDATE_ATTENDANCE: `${BASE_HOST}attendance/attendance/update`,
      DELETE_ATTENDANCE: `${BASE_HOST}attendance/attendance/delete`,
      CREATE_ATTENDANCE: `${BASE_HOST}attendance/attendance/create`,

      //Finger Record
      FINGER_RECORD_LIST: `${BASE_HOST}attencance/fingerrecord/list`,
      RETRIEVE_FINGER_RECORD: `${BASE_HOST}attencance/fingerrecord/retrieve`,
      UPDATE_FINGER_RECORD: `${BASE_HOST}attencance/fingerrecord/update`,
      DELETE_FINGER_RECORD: `${BASE_HOST}attencance/fingerrecord/delete`,
      CREATE_FINGER_RECORD: `${BASE_HOST}attencance/fingerrecord/create`,

      // Author 
      AUTHOR_LIST: `${BASE_HOST}library/author/list`,
      CREATE_AUTHOR: `${BASE_HOST}library/author/create`,
      RETRIEVE_AUTHOR: `${BASE_HOST}library/author/retrieve`,
      UPDATE_AUTHOR: `${BASE_HOST}library/author/update`,
      DELETE_AUTHOR: `${BASE_HOST}library/author/delete`,

      // category
      CATEGORY_LIST: `${BASE_HOST}library/category/list`,
      CREATE_CATEGORY: `${BASE_HOST}library/category/create`,
      RETRIEVE_CATEGORY: `${BASE_HOST}library/category/retrieve`,
      UPDATE_CATEGORY: `${BASE_HOST}library/category/update`,
      DELETE_CATEGORY: `${BASE_HOST}library/category/delete`,

      // book in library
      BOOK_LIST: `${BASE_HOST}library/book/list`,
      CREATE_BOOK: `${BASE_HOST}library/book/create`,
      RETRIEVE_BOOK: `${BASE_HOST}library/book/retrieve`,
      UPDATE_BOOK: `${BASE_HOST}library/book/update`,
      DELETE_BOOK: `${BASE_HOST}library/book/delete`,

      // checkout
      CHECKOUT_LIST: `${BASE_HOST}library/checkout/list`,
      CREATE_CHECKOUT: `${BASE_HOST}library/checkout/create`,
      RETRIEVE_CHECKOUT: `${BASE_HOST}library/checkout/retrieve`,
      UPDATE_CHECKOUT: `${BASE_HOST}library/checkout/update`,
      DELETE_CHECKOUT: `${BASE_HOST}library/checkout/delete`,
}
