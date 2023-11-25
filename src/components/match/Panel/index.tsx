import { MouseEvent, ReactNode, useState } from 'react';

import { Dropdown } from '@/components/common/Dropdown';
import { $ } from '@/utils/core';

type PanelProps = {
  options: Array<{ label: string }>;
  children: ({ selected }: { selected: string }) => ReactNode;
  defaultValue: string;
};

export default function Panel({ defaultValue, options, children }: PanelProps) {
  const [selected, setSelected] = useState(defaultValue);

  const handleClickItem = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedValue = (e.target as Element).textContent;

    if (!selectedValue) return;
    if (selected === selectedValue) return;

    setSelected(selectedValue);
  };

  return (
    <div>
      <Dropdown className="relative rounded-xl border-2  border-gray-2">
        <Dropdown.Menu className="grid w-full grid-cols-4 rounded-lg bg-gray-2 text-gray-4">
          {options.map(option => (
            <Dropdown.Item
              onClick={handleClickItem}
              key={option.label}
              className={$(
                'rounded-xl py-3',
                selected === option.label ? 'bg-secondary text-primary' : '',
              )}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
        {children({ selected })}
      </Dropdown>
    </div>
  );
}
