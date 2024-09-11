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
  