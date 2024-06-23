import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormTextAreaProps {
    id: string;
    label: string;
    type?: string;
    [key: string]: any;
  }
  

export function FormTextArea({
  id,
  
  label,
  ...rest
}:FormTextAreaProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Textarea placeholder="Type your message here." id={id}   {...rest}/>
    </div>
  )
}

