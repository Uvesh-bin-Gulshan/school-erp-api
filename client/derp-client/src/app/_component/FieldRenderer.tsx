import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import SelectComponent from './SelectComponent';
import { FormInput } from './FormInput';

interface FieldProps {
  field: any;
  dataSource :any;
}

const FieldRenderer: React.FC<FieldProps> = ({ field,dataSource  }) => {
  switch (field.type) {
    case 'text':
      return (
        <FormField
          key={field.name}
          name={field.name}
          render={({ field: formField }) => (
            <FormItem>
              <FormControl>
                {/* <input {...formField} id={field.name} type="text" className="input" /> */}
                {/* Use the custom SelectComponent */}
                <FormInput
                  id={field.name}
                  label={field.label}
                  options={field.options}
                  placeholder="Please enter a text"
                  {...formField} // Pass form field props
                />
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
                  <SelectComponent
                    id={field.name}
                    label={field.label}
                    options={dataSource[field.name]} // Use dataSource for options
                    placeholder="Select an option"
                    {...formField}
                  />
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
                {/* <input {...formField} id={field.name} type="file" /> */}
                <SelectComponent
                  id={field.name}
                  label={field.label}
                  options={field.options}
                  placeholder="Select an option"
                  {...formField} // Pass form field props
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case 'textarea':
      return (

        <FormField
        key={field.name}
        name={field.name}
        render={({ field: formField }) => (
          <FormItem>
            <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
            <FormControl>
              {/* <input {...formField} id={field.name} type="textarea" /> */}
              <SelectComponent
                  id={field.name}
                  label={field.label}
                  options={field.options}
                  placeholder="Please enter a text"
                  {...formField} // Pass form field props
                />
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
