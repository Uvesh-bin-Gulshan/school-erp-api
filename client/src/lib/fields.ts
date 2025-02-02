  export const studentFields = [
    {
      name: 'student_status',
      label: 'Student Status',
      type: 'select',
      options: [
        { value: 'pursuing', label: 'Pursuing' },
        { value: 'completed', label: 'Completed' },
        { value: 'left', label: 'Left' },
      ],
      defaultValue: 'pursuing', // or fetch from backend data
    },

    // Add more fields based on the `Student` model
  ];

  export const alumniFields = [
    {
      name: 'student',
      label: 'Student',
      type: 'select', // Assuming students will be selected from a list
      options: [], // You can populate this via API or static values
    },
    {
      name: 'occupation',
      label: 'Occupation',
      type: 'text',
    },
    {
      name: 'work_place',
      label: 'Workplace',
      type: 'text',
    },
    {
      name: 'residence',
      label: 'Residence',
      type: 'text',
    },
  ];

  // departmentFields
  export const departmentFields = [
    {
      name: 'name',
      label: 'Department Name',
      type: 'text',
      placeholder: 'Enter department name',
    },
  ];

  // courseFields
  export const courseFields = [
    {
      name: 'name',
      label: 'Course Name',
      type: 'text',
      placeholder: 'Enter course name',
    },
    {
      name: 'department',
      label: 'Department',
      type: 'text',
      placeholder: 'Enter department',
    },
    {
      name: 'effective_date',
      label: 'Effective Date',
      type: 'date',
      placeholder: 'Select effective date',
    },
  ];
  
  // syllabusTypeFields
  export const syllabusTypeFields = [
    {
      name: 'name',
      label: 'Syllabus Type Name',
      type: 'text',
      placeholder: 'Enter syllabus type name',
    },
  ];
  
  // subjectFields
  export const subjectFields = [
    {
      name: 'name',
      label: 'Subject Name',
      type: 'text',
      placeholder: 'Enter subject name',
    },
    {
      name: 'syllabus_count',
      label: 'Syllabus Count',
      type: 'number',
      placeholder: 'Enter syllabus count',
    },
    {
      name: 'syllabus_type',
      label: 'Syllabus Type',
      type: 'text',
      placeholder: 'Enter syllabus type',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      placeholder: 'Enter description (optional)',
    },
    {
      name: 'course',
      label: 'Course',
      type: 'text',
      placeholder: 'Enter course',
    },
  ];
  
  // annuallySubjectSyllabusStatusFields
  export const annuallySubjectSyllabusStatusFields = [
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'Enter subject',
    },
    {
      name: 'teacher',
      label: 'Teacher',
      type: 'text',
      placeholder: 'Enter teacher name',
    },
    {
      name: 'yearly_status',
      label: 'Yearly Status',
      type: 'number',
      placeholder: 'Enter yearly status (numeric value)',
    },
    {
      name: 'yearly_summary',
      label: 'Yearly Summary',
      type: 'text',
      placeholder: 'Enter yearly summary',
    },
  ];

  // monthlySubjectSyllabusStatusFields
  export const monthlySubjectSyllabusStatusFields = [
    {
      name: 'month',
      label: 'Month',
      type: 'date',
      placeholder: 'Select month',
    },
    {
      name: 'annual_status',
      label: 'Annual Status',
      type: 'text',
      placeholder: 'Enter annual status',
    },
    {
      name: 'target_type',
      label: 'Target Type',
      type: 'text',
      placeholder: 'Enter target type',
    },
    {
      name: 'count',
      label: 'Count',
      type: 'number',
      placeholder: 'Enter count',
    },
    {
      name: 'monthly_summary',
      label: 'Monthly Summary',
      type: 'text',
      placeholder: 'Enter monthly summary',
    },
  ];

  // syllabusStatusFields
  export const syllabusStatusFields = [
    {
      name: 'feedback',
      label: 'Feedback',
      type: 'textarea',
      placeholder: 'Enter feedback',
    },
    {
      name: 'is_approved',
      label: 'Approved Status',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'approved_date',
      label: 'Approved Date',
      type: 'date',
    },
  ];

  // timetableFields
  export const timetableFields = [
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
    },
    {
      name: 'teacher',
      label: 'Teacher',
      type: 'text',
    },
    {
      name: 'time',
      label: 'Time',
      type: 'time',
    },
    {
      name: 'effective_date',
      label: 'Effective Date',
      type: 'date',
    },
  ];

  //vacationFields
  export const vacationFields = [
    {
      name: 'name',
      label: 'Vacation Name',
      type: 'text',
    },
    {
      name: 'start_date',
      label: 'Start Date',
      type: 'date',
    },
    {
      name: 'end_date',
      label: 'End Date',
      type: 'date',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
  ];

  // examTypeFields
  export const examTypeFields = [
    {
      name: 'name',
      label: 'Exam Type Name',
      type: 'text',
    },
    {
      name: 'effective_date',
      label: 'Effective Date',
      type: 'date',
    },
  ];

  // examTimeTableFields
  export const examTimeTableFields = [
  {
    name: 'exam_type',
    label: 'Exam Type',
    type: 'text',
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
  },
  {
    name: 'total_marks',
    label: 'Total Marks',
    type: 'number',
  },
  {
    name: 'passing_marks',
    label: 'Passing Marks',
    type: 'number',
  },
  {
    name: 'time',
    label: 'Time',
    type: 'time',
  },
];

//hallTicketFields
export const hallTicketFields = [
  {
    name: 'exam_time_table',
    label: 'Exam Time Table',
    type: 'text',
  },
  {
    name: 'student',
    label: 'Student',
    type: 'text',
  },
];

// markSheetFields
export const markSheetFields = [
  {
    name: 'exam_detail',
    label: 'Exam Detail',
    type: 'text',
  },
  {
    name: 'student',
    label: 'Student',
    type: 'text',
  },
  {
    name: 'marks_obtained',
    label: 'Marks Obtained',
    type: 'number',
  },
  {
    name: 'result',
    label: 'Result',
    type: 'text',
  },
];

// resultSheetFields
export const resultSheetFields = [
  {
    name: 'student',
    label: 'Student',
    type: 'text',
  },
  {
    name: 'result_data',
    label: 'Result Data',
    type: 'json',
  },
  {
    name: 'total_marks_obtained',
    label: 'Total Marks Obtained',
    type: 'number',
  },
  {
    name: 'rank',
    label: 'Rank',
    type: 'number',
  },
];

//attendanceFields
export const attendanceFields = [
  {
    name: 'time_table',
    label: 'Time Table',
    type: 'text',
  },
  {
    name: 'student',
    label: 'Student',
    type: 'text',
  },
  {
    name: 'date',
    label: 'Date',
    type: 'date',
  },
  {
    name: 'time',
    label: 'Time',
    type: 'time',
  },
  {
    name: 'status',
    label: 'Status',
    type: 'checkbox',
  },
];

// fingerRecordFields
export const fingerRecordFields = [
  {
    name: 'student',
    label: 'Student',
    type: 'text',
  },
  {
    name: 'fingerprint_data',
    label: 'Fingerprint Data',
    type: 'text',
  },
];

// authorFields
export const authorFields = [
  {
    name: 'first_name',
    label: 'First Name',
    type: 'text',
  },
  {
    name: 'last_name',
    label: 'Last Name',
    type: 'text',
  },
  {
    name: 'short_bio',
    label: 'Short Bio',
    type: 'textarea',
  },
  {
    name: 'date_of_birth',
    label: 'Date of Birth',
    type: 'date',
  },
  {
    name: 'date_of_death',
    label: 'Date of Death',
    type: 'date',
  },
];

//categoryFields
export const categoryFields = [
  {
    name: 'name',
    label: 'Category Name',
    type: 'text',
  },
];

// bookFields
export const bookFields = [
  {
    name: 'title',
    label: 'Title',
    type: 'text',
  },
  {
    name: 'author',
    label: 'Author',
    type: 'text',
  },
  {
    name: 'summary',
    label: 'Summary',
    type: 'textarea',
  },
  {
    name: 'isbn',
    label: 'ISBN',
    type: 'text',
  },
  {
    name: 'category',
    label: 'Category',
    type: 'select',
    options: [
      { label: 'Fiction', value: 'fiction' },
      { label: 'Non-fiction', value: 'non_fiction' },
      // Add more categories as required
    ],
  },
];

// checkoutFields
export const checkoutFields = [
  {
    name: 'book',
    label: 'Book',
    type: 'text',
  },
  {
    name: 'member',
    label: 'Member',
    type: 'text',
  },
  {
    name: 'due_date',
    label: 'Due Date',
    type: 'date',
  },
  {
    name: 'returned',
    label: 'Returned',
    type: 'checkbox',
  },
];











  
  
  