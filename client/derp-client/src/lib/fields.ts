// studentFields
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
  
  // alumniFields
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
  
  