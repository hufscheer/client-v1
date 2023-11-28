import { Icon } from '@/components/common/Icon';
import { QUERY_PARAMS } from '@/constants/queryParams';
import { SportsType } from '@/types/league';
import { $ } from '@/utils/core';

type SportsListProps = {
  selectedId: string[];
  sportsList: SportsType[];
  onClick: (key: string, value: string) => void;
};

export default function SportsList({
  selectedId = [],
  sportsList,
  onClick,
}: SportsListProps) {
  return (
    <ul className="mb-5 flex w-full items-center gap-5">
      {sportsList.map(sports => (
        <li
          key={sports.sportId}
          className={$(
            'text-gary-5 cursor-pointer rounded-xl bg-gray-2',
            selectedId.includes(sports.sportId + '') && 'bg-primary text-white',
          )}
        >
          <button
            onClick={() => onClick(QUERY_PARAMS.sports, String(sports.sportId))}
            className="flex items-center gap-2 px-3 py-2"
          >
            <span>{sports.name}</span>
            <Icon iconName="cross" width="12" height="12" />
          </button>
        </li>
      ))}
    </ul>
  );
}
