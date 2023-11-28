import Link from 'next/link';

import { MatchCard } from '@/components/common/MatchCard';
import useIntersect from '@/hooks/useInfiniteObserver';
import { MatchListType } from '@/types/match';

type MatchListProps = {
  matchList: MatchListType[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetching: boolean;
};

export default function MatchList({
  matchList,
  fetchNextPage,
  hasNextPage,
  isFetching,
}: MatchListProps) {
  const { ref } = useIntersect<HTMLDivElement>(async (entry, observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);

      if (hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }
  });

  return (
    <>
      <ul>
        {matchList.map(({ id, ...match }) => (
          <li key={id} className="mb-14">
            <Link href={`match/${id}`}>
              <MatchCard {...match} className="flex flex-col">
                <MatchCard.Label className="mb-2 grid w-full grid-cols-3 border-b-2 border-b-gray-5 px-1 pb-1" />
                <div className="flex h-full min-h-[180px] items-center justify-around rounded-xl bg-gray-1 shadow-lg">
                  <MatchCard.Background
                    viewBox="-13 117 120 50"
                    width={150}
                    height={170}
                    className="h-[180px] fill-primary"
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
      <div ref={ref}></div>
    </>
  );
}
