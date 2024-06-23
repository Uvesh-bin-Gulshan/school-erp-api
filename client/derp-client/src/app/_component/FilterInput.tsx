import React from "react";
import { Input } from "@/components/ui/input";

interface FilterInputProps {
  column: string;
  table: any;
}

const FilterInput: React.FC<FilterInputProps> = ({ column, table }) => {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Filter emails..."
        value={(table.getColumn(column)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(column)?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  );
};

export default FilterInput;