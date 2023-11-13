import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`block w-full rounded-lg border p-2 ${className}`}
      {...props}
    />
  );
}
