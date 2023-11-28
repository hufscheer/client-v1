import { ButtonHTMLAttributes } from 'react';

import { $ } from '@/utils/core';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={$('flex items-center justify-center', className)}
      {...props}
    />
  );
}
