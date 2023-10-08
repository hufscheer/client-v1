import { DOMAttributes, HTMLAttributes, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  datas: any[];
}

export default function Select({ datas, ...props }: SelectProps) {
  return (
    <select {...props} className="block w-full p-2 border rounded-lg">
      {datas.map((data, idx) => (
        <option key={`${data}${idx}`} value={idx}>
          {data}
        </option>
      ))}
    </select>
  );
}
