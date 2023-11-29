import { FallbackProps } from '@/components/common/ErrorBoundary';
import { MatchCard } from '@/components/common/MatchCard';
import { MatchType } from '@/types/match';

export default function RummiKubMatchBanner(match: MatchType) {
  return (
    <MatchCard {...match} className="flex flex-col">
      <MatchCard.Label className="absolute top-2 flex w-full justify-between px-2" />
      <div className="flex h-full min-h-[200px] flex-col items-center justify-around rounded-xl bg-gray-1 shadow-lg">
        <MatchCard.Background
          viewBox="-13 117 120 50"
          width={150}
          height={170}
          className="z-[0] h-[180px] fill-primary"
        />
        <MatchCard.Status className="mt-5 text-black" />
        <div className="z-10 flex items-center justify-center gap-7">
          <div className="flex flex-col items-center justify-center">
            <MatchCard.Team
              teamIndex={1}
              className="flex flex-col items-center justify-center [&>img]:my-0"
            />
            <MatchCard.Score teamIndex={1} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <MatchCard.Team
              teamIndex={2}
              className="flex flex-col items-center justify-center [&>img]:my-0"
            />
            <MatchCard.Score teamIndex={2} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <MatchCard.Team
              teamIndex={3}
              className="flex flex-col items-center justify-center [&>img]:my-0"
            />
            <MatchCard.Score teamIndex={3} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <MatchCard.Team
              teamIndex={4}
              className="flex flex-col items-center justify-center [&>img]:my-0"
            />
            <MatchCard.Score teamIndex={4} />
          </div>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </MatchCard>
  );
}

RummiKubMatchBanner.ErrorFallback = function ErrorFallback({
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="relative my-5 flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-5 rounded-xl border p-2">
      <div className="flex flex-wrap justify-center gap-x-1">
        <span>게임 정보를 불러올 수 없어요.</span>
        <span>잠시 후 다시 시도해주세요!</span>
      </div>
      <button onClick={resetErrorBoundary} className="text-primary">
        새로고침
      </button>
    </div>
  );
};

RummiKubMatchBanner.Skeleton = function Skeleton() {
  return (
    <MatchCard
      className="flex flex-col"
      gameTeams={[]}
      startTime={''}
      gameQuarter={''}
      gameName={''}
      sportsName={''}
    >
      <div className="flex h-full min-h-[200px] items-center justify-around rounded-xl bg-gray-1 shadow-lg">
        <MatchCard.Background
          viewBox="-3 120 100 50"
          width={150}
          height={200}
          className="h-[200px]"
        />
      </div>
    </MatchCard>
  );
};
