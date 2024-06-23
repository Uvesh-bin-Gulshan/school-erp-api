import { Button } from '@/components/ui/button'
import React from 'react'

interface SubmitButtonProps {
  text?: string;
  onClick?: () => void;
  [key: string]: any;
}

const SubmitButton = ({
  text = 'Submit',
  onClick,
  ...rest
}: SubmitButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <Button onClick={handleClick} {...rest}>
        {text}
      </Button>
    </>
  );
};

export default SubmitButton;