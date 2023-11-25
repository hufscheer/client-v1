import { MatchPlayerType } from '@/types/match';

export default function LineupItem({
  playerName,
  description,
}: MatchPlayerType) {
  return (
    <li
      className="mb-2 grid items-center gap-4"
      style={{ gridTemplateColumns: 'minmax(0, 30px) 1fr' }}
    >
      <span className="flex aspect-square items-center justify-center rounded-full bg-secondary leading-relaxed text-primary">
        {description}
      </span>
      <span className="text-gray-5">{playerName}</span>
    </li>
  );
}
