import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder: string;
  [key: string]: any;
}

const SelectComponent = ({
  id,
  label,
  options,
  placeholder,
  ...rest
}: SelectProps) => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]" {...rest}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectComponent