import Link from 'next/link';

import { MatchCard } from '@/components/common/MatchCard';
import { MatchListType } from '@/types/match';

export default function MatchList({
  matchList,
}: {
  matchList: MatchListType[];
}) {
  return (
    <ul>
      {matchList.map(({ gameId, ...match }) => (
        <li key={gameId}>
          <Link href={`match/${gameId}`}>
            <MatchCard {...match} className="mb-14 flex flex-col">
              <MatchCard.Label className="mb-2 grid w-full grid-cols-3 border-b-2 border-b-gray-5 px-1 pb-1" />
              <div className="flex h-full min-h-[180px] items-center justify-around rounded-xl bg-gray-1 shadow-lg">
                <MatchCard.Background
                  viewBox="-13 117 120 50"
                  width={150}
                  height={170}
                  className="h-[180px]"
                />

                <MatchCard.Team
                  teamIndex={1}
                  className="flex flex-col items-center"
                />
                <MatchCard.Score teamIndex={1} />
                <MatchCard.Status />
                <MatchCard.Score teamIndex={2} />
                <MatchCard.Team
                  teamIndex={2}
                  className="flex flex-col items-center"
                />
              </div>
            </MatchCard>
          </Link>
        </li>
      ))}
    </ul>
  );
}
