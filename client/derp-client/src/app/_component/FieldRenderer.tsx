import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

interface FieldProps {
  field: any;
}

const FieldRenderer: React.FC<FieldProps> = ({ field }) => {
  switch (field.type) {
    case 'text':
      return (
        <FormField
          key={field.name}
          name={field.name}
          render={({ field: formField }) => (
            <FormItem>
              <FormControl>
                <input {...formField} id={field.name} type="text" className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'select':
      return (
        <FormField
          key={field.name}
          name={field.name}
          render={({ field: formField }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
              <FormControl>
                <select {...formField} id={field.name} className="input">
                  {field.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'file':
      return (
        <FormField
          key={field.name}
          name={field.name}
          render={({ field: formField }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
              <FormControl>
                <input {...formField} id={field.name} type="file" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    default:
      return null;
  }
};

export default FieldRenderer;
