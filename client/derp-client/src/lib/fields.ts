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
  
  export const departmentFields = [
    {
      name: 'name',
      label: 'Department Name',
      type: 'text',
      placeholder: 'Enter department name',
    },
  ];

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
   