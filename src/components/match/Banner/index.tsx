import { MatchCard } from '@/components/common/MatchCard';
import { MatchType } from '@/types/match';

export default function MatchBanner(props: MatchType) {
  return (
    <MatchCard {...props} className="flex flex-col">
      <MatchCard.Label className="absolute left-2 top-2" />
      <div className="flex h-full items-center justify-around">
        <MatchCard.Team teamIndex={1} className="flex flex-col items-center" />
        <MatchCard.Score teamIndex={1} />
        <MatchCard.Status />
        <MatchCard.Score teamIndex={2} />
        <MatchCard.Team teamIndex={2} className="flex flex-col items-center" />
      </div>
    </MatchCard>
  );
}
