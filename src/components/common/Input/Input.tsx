import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`block w-full p-2 border rounded-lg ${className}`}
      {...props}
    />
  );
}
