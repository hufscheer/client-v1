import { MatchCard } from '@/components/common/MatchCard';
import { MatchType } from '@/types/match';

export default function MatchBanner(props: MatchType) {
  return (
    <MatchCard {...props} className="flex flex-col">
      <MatchCard.Label className="absolute top-2 flex w-full justify-between px-2" />
      <div className="flex h-full min-h-[200px] items-center justify-around rounded-xl bg-gray-1 shadow-lg">
        <MatchCard.Background
          viewBox="-3 120 100 50"
          width={150}
          height={200}
          className="h-[200px]"
        />
        <MatchCard.Team teamIndex={1} className="flex flex-col items-center" />
        <MatchCard.Score teamIndex={1} />
        <MatchCard.Status />
        <MatchCard.Score teamIndex={2} />
        <MatchCard.Team teamIndex={2} className="flex flex-col items-center" />
      </div>
    </MatchCard>
  );
}
