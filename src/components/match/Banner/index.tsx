import { MatchInfo } from '@/components/common/MatchInfo';
import { MatchDetailType } from '@/types/match';

export default function MatchBanner(props: MatchDetailType) {
  return (
    <MatchInfo {...props} className="flex flex-col">
      <MatchInfo.Label className="absolute left-2 top-2" />
      <div className="flex h-full items-center justify-around">
        <MatchInfo.Team teamIndex={1} className="flex flex-col items-center" />
        <MatchInfo.Score teamIndex={1} />
        <MatchInfo.Status />
        <MatchInfo.Score teamIndex={2} />
        <MatchInfo.Team teamIndex={2} className="flex flex-col items-center" />
      </div>
    </MatchInfo>
  );
}
