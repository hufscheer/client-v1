import { InputHTMLAttributes } from 'react';

import { $ } from '@/utils/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={$(
        'mt-2 block w-full rounded-lg border border-gray-3/70 bg-secondary/25 p-4',
        className,
      )}
      {...props}
    />
  );
}
