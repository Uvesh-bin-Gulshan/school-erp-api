import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import React from 'react'

interface SubmitButtonProps {
  text?: string;
  onClick?: () => void;
  [key: string]: any;
}

const SubmitButton = ({
  text = 'Submit',
  onClick,
  className,
  ...rest
}: SubmitButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
    <div className='p-2 '>

      <Button  className={cn("bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 hover:text-cyan-800   hover:bg-white",className)} onClick={handleClick} {...rest}>
        {text}
      </Button>
    </div>
    </>
  );
};

export default SubmitButton;