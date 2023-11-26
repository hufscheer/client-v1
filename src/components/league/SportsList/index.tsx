import { SportsType } from '@/types/league';

type SportsListProps = {
  sportsList: SportsType[];
  onClick: (key: string, value: string) => void;
};

export default function SportsList({ sportsList, onClick }: SportsListProps) {
  return (
    <ul className="mb-5 flex w-full items-center gap-5">
      {sportsList.map(sports => (
        <li
          key={sports.sportId}
          className="text-gary-5 cursor-pointer rounded-xl bg-gray-2"
        >
          <button
            onClick={() => onClick('sportsId', String(sports.sportId))}
            className="px-3 py-2"
          >
            {sports.name}
          </button>
        </li>
      ))}
    </ul>
  );
}