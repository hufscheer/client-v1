import { ReactNode, SelectHTMLAttributes } from 'react';

import { $ } from '@/utils/core';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
}

export default function Select({
  children,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <select {...props} className={$('block w-full rounded-lg border p-2')}>
      {placeholder && (
        <option value="0" disabled hidden>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}
