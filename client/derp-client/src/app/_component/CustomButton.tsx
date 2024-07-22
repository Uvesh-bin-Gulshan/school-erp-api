import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface CustomButtonProps {
  text?: string;
  [key: string]: any;
  icon?:React.ReactNode
  style?: React.CSSProperties; // Add style prop type
}

const CustomButton = ({ text,icon,style, className, ...rest }: CustomButtonProps) => {
  // const defaultClass = "w-56 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 hover:text-cyan-800 !hover:bg-white";
  // const finalClass = `${defaultClass} ${className}`; // Simply concatenate classes
  return (
    <>
        <Button
                style={style} // Apply the style prop

                className={cn(
                  "w-56 bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700  hover:text-cyan-800 ", // Base classes without default background
                  className // Apply custom className to take precedence
                )}          {...rest} 
        >
          {icon &&<span className="mr-2 ">{icon}</span>}
          {text}
        </Button>
    </>
  );
};

export default CustomButton;
