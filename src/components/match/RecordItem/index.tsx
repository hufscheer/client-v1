import { MatchRecordsType } from '@/types/match';

export default function RecordItem({
  playerName,
  score,
  scoredAt,
  teamName,
}: MatchRecordsType) {
  return (
    <li className="relative mb-3 ms-4">
      <time className="absolute -left-1/2">{scoredAt}</time>
      <span>[ {teamName} ] </span>
      <span>
        {playerName} 선수 {score}점 득점 🎉
      </span>
    </li>
  );
}
