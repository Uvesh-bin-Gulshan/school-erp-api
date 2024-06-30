import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    [key: string]: any;
  }
  

export function FormInput({
  id,
  name,
  label,
  type = "text",
  ...rest
}:FormInputProps) {
  return (
    <div className="text-left w-full gap-4 px-2 my-4 ">
      <Label  htmlFor={id}>{label}</Label>
      <Input className="focus:" id={id} type={type}  {...rest}  />
    </div>
  )
}

