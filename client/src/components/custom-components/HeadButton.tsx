import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { HeaderContext } from "@tanstack/react-table";
import { Admission } from "../admissions/columns";

type HeaderButtonProps = {
  column: HeaderContext<Admission, unknown>["column"];
};

const HeaderButton: React.FC<HeaderButtonProps> = ({ column }) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default HeaderButton;
