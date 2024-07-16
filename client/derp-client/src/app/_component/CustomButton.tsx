import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface CustomButtonProps {
  text?: string;
  [key: string]: any;
  icon?:React.ReactNode
}

const CustomButton = ({ text,icon, className, ...rest }: CustomButtonProps) => {
  return (
    <>
      <div className="p-2 ">
        <Button
          className={cn(
            "w-56 bg-gradient-to-r  from-cyan-900 via-cyan-800 to-cyan-700 hover:text-cyan-800   hover:bg-white",
            className
          )}
          {...rest} 
        >
          {text}
          {icon &&<span className="mr-2 ">{icon}</span>}
        </Button>
      </div>
    </>
  );
};

export default CustomButton;
