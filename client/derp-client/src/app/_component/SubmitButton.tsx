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
      <Button  className={cn("bg-amber-400 hover:bg-amber-700",className)} onClick={handleClick} {...rest}>
        {text}
      </Button>
    </>
  );
};

export default SubmitButton;