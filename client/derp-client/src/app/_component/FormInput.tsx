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
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type}  {...rest}  />
    </div>
  )
}

